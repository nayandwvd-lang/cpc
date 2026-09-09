<script setup>
/**
 * Novice / Practitioner switch.
 *
 * The same page has to serve two people with opposite needs. A student
 * meeting Order XXXIX for the first time needs the shop dispute, the plain
 * words, and the instinct check. A practitioner drafting an injunction
 * application at 11pm needs the bare Act, the three tests, the ratio and the
 * prayer checklist, and every line of scaffolding between those is an
 * obstacle.
 *
 * Rather than write two guides, the teaching scaffolding is marked up as such
 * and Practitioner mode collapses it. Nothing is deleted and nothing is
 * behind a network call — it is a class on <html> and a stylesheet rule, so
 * switching is instant and the hidden content is still in the page for
 * Ctrl-F and for print if the reader wants it.
 *
 * Deliberately NOT hiding: the micro-trees. Those are statutory mechanics
 * expressed as a diagram, which is exactly what the practitioner came for.
 */
import { ref, onMounted } from 'vue'

const KEY = 'cpc-view-mode'
const mode = ref('novice')

function apply(next) {
  mode.value = next
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('cpc-practitioner', next === 'practitioner')
  try {
    localStorage.setItem(KEY, next)
  } catch {
    /* private browsing — the toggle still works for this session */
  }
}

function set(next) {
  if (next !== mode.value) apply(next)
}

onMounted(() => {
  let saved = null
  try {
    saved = localStorage.getItem(KEY)
  } catch {
    /* ignore */
  }
  apply(saved === 'practitioner' ? 'practitioner' : 'novice')
})
</script>

<template>
  <div class="cpc-mode no-autoglossary">
    <span class="cpc-mode-label">Reading as</span>

    <div class="cpc-mode-switch" role="group" aria-label="Reading mode">
      <button
        type="button"
        class="cpc-mode-btn"
        :class="{ 'is-on': mode === 'novice' }"
        :aria-pressed="mode === 'novice'"
        @click="set('novice')"
      >
        Novice
      </button>
      <button
        type="button"
        class="cpc-mode-btn"
        :class="{ 'is-on': mode === 'practitioner' }"
        :aria-pressed="mode === 'practitioner'"
        @click="set('practitioner')"
      >
        Practitioner
      </button>
    </div>

    <span class="cpc-mode-hint">
      {{
        mode === 'novice'
          ? 'Everything shown — plain-English openers, worked examples and instinct checks.'
          : 'Scaffolding hidden. Bare Act, mechanics, ratios and drafting only.'
      }}
    </span>
  </div>
</template>

<style scoped>
.cpc-mode {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  margin: 0 0 22px;
  padding: 10px 0 14px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.cpc-mode-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.cpc-mode-switch {
  display: inline-flex;
  padding: 3px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
}

.cpc-mode-btn {
  padding: 5px 14px;
  border: 0;
  border-radius: 999px;
  background: none;
  color: var(--vp-c-text-2);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s, color 0.15s;
}

.cpc-mode-btn:hover {
  color: var(--vp-c-text-1);
}

.cpc-mode-btn.is-on {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.dark .cpc-mode-btn.is-on {
  color: #1b1717;
}

.cpc-mode-hint {
  flex: 1 1 240px;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--vp-c-text-3);
}

@media print {
  .cpc-mode {
    display: none;
  }
}
</style>
