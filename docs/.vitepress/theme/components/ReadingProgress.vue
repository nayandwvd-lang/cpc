<script setup>
/**
 * A hairline progress bar across the top of long chapters.
 *
 * Order XXI is a quarter of a million characters. Without a meter a reader has
 * no idea whether they are five per cent or eighty per cent through, and the
 * absence of that signal is a real cause of abandonment. This is the cheapest
 * possible orientation cue: two pixels, no layout impact.
 *
 * Suppressed on the home page, where there is nothing to make progress through.
 */
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter } = useData()
const route = useRoute()

const pct = ref(0)
const show = computed(() => frontmatter.value.layout !== 'home')

let raf = 0

function measure() {
  const doc = document.documentElement
  const scrollable = doc.scrollHeight - doc.clientHeight
  pct.value = scrollable > 200 ? Math.min(100, (doc.scrollTop / scrollable) * 100) : 0
}

function onScroll() {
  if (raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    measure()
  })
}

onMounted(() => {
  measure()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})

/* Route changes reuse the component, so re-measure against the new document. */
watch(
  () => route.path,
  () => setTimeout(measure, 120)
)
</script>

<template>
  <div v-if="show" class="cpc-progress" aria-hidden="true">
    <div class="cpc-progress-fill" :style="{ width: pct + '%' }" />
  </div>
</template>

<style scoped>
.cpc-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 90;
  background: transparent;
  pointer-events: none;
}

.cpc-progress-fill {
  height: 100%;
  background: var(--vp-c-brand-1);
  transition: width 0.08s linear;
}

@media print {
  .cpc-progress {
    display: none;
  }
}
</style>
