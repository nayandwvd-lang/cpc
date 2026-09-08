<script setup>
/**
 * <Term id="decree" /> or <Term id="decree">decrees</Term>
 *
 * A defined term, inline in the prose, with its plain-English meaning one
 * hover (or one tap) away. The whole point of the beginner layer is that a
 * reader should never have to leave the sentence they are in to find out
 * what a word means.
 *
 * Accessibility: the trigger is a real <button>, so it is reachable by Tab
 * and opens on focus. Escape closes it. On touch devices there is no hover,
 * so the click handler is what does the work.
 */
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'
import { glossary } from '../data/glossary.js'

const props = defineProps({
  id: { type: String, required: true }
})

const open = ref(false)
const root = ref(null)

const entry = computed(() => glossary[props.id])
const label = computed(() => entry.value?.term ?? props.id)

/* A missing id should be loud in development and silent-but-safe in prod. */
if (!glossary[props.id] && typeof console !== 'undefined') {
  console.warn(`[Term] no glossary entry for "${props.id}"`)
}

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}

function onDocumentClick(e) {
  if (root.value && !root.value.contains(e.target)) close()
}

function onKey(e) {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <span class="cpc-term" ref="root" @mouseenter="open = true" @mouseleave="open = false">
    <button
      type="button"
      class="cpc-term-trigger"
      :aria-expanded="open"
      @click.stop="toggle"
      @focus="open = true"
    >
      <slot>{{ label }}</slot>
    </button>

    <span v-if="entry" class="cpc-term-pop" :class="{ 'is-open': open }" role="tooltip">
      <span class="cpc-term-pop-head">{{ entry.term }}</span>
      <span class="cpc-term-pop-body">{{ entry.short }}</span>
      <a class="cpc-term-pop-more" :href="withBase(`/glossary#${id}`)">Full definition &rarr;</a>
    </span>
  </span>
</template>

<style scoped>
.cpc-term {
  position: relative;
  display: inline;
}

.cpc-term-trigger {
  font: inherit;
  color: inherit;
  background: none;
  border: 0;
  padding: 0;
  cursor: help;
  border-bottom: 1px dashed var(--vp-c-brand-1);
  text-align: left;
}

.cpc-term-trigger:hover,
.cpc-term-trigger:focus-visible {
  color: var(--vp-c-brand-1);
  border-bottom-style: solid;
  outline: none;
}

.cpc-term-pop {
  position: absolute;
  z-index: 60;
  top: calc(100% + 8px);
  left: 0;
  display: none;
  flex-direction: column;
  gap: 6px;
  width: max-content;
  max-width: min(340px, 78vw);
  padding: 12px 14px;
  border: 1px solid var(--vp-c-divider);
  border-left: 3px solid var(--vp-c-brand-1);
  border-radius: 0 8px 8px 0;
  background: var(--vp-c-bg-elv);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
  font-size: 0.85rem;
  line-height: 1.55;
  white-space: normal;
  text-align: left;
}

.cpc-term-pop.is-open {
  display: flex;
}

.cpc-term-pop-head {
  font-weight: 700;
  font-size: 0.72rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}

.cpc-term-pop-body {
  color: var(--vp-c-text-1);
}

.cpc-term-pop-more {
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

/* Near the right edge of the prose column a left-anchored card overflows.
   Flipping on the last third of the line is cheaper and more reliable than
   measuring, and the failure mode is merely a card that hugs the other side. */
@media (min-width: 641px) {
  .cpc-term:nth-of-type(3n) .cpc-term-pop {
    left: auto;
    right: 0;
    border-left: 1px solid var(--vp-c-divider);
    border-right: 3px solid var(--vp-c-brand-1);
    border-radius: 8px 0 0 8px;
  }
}

@media (max-width: 640px) {
  .cpc-term-pop {
    position: fixed;
    left: 12px;
    right: 12px;
    top: auto;
    bottom: 16px;
    width: auto;
    max-width: none;
  }
}
</style>
