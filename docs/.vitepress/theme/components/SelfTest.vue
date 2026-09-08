<script setup>
/**
 * <SelfTest id="sec-9-14" />
 *
 * Retrieval practice. Reading a chapter twice feels like learning and mostly
 * is not; trying to answer a question before you see the answer is the single
 * cheapest intervention that actually moves knowledge into recall.
 *
 * So the answer is hidden by default and the reader must act to see it. The
 * questions are deliberately the ones a viva or an opponent would ask, not
 * definitional trivia.
 */
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'
import { quizzes } from '../data/quizzes.js'

const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, default: 'Check yourself' }
})

const quiz = computed(() => quizzes[props.id] ?? [])
const shown = ref(new Set())
const tick = ref(0)

if (!quizzes[props.id] && typeof console !== 'undefined') {
  console.warn(`[SelfTest] no quiz for "${props.id}"`)
}

function isShown(i) {
  tick.value
  return shown.value.has(i)
}

function reveal(i) {
  shown.value.has(i) ? shown.value.delete(i) : shown.value.add(i)
  tick.value++
}

function revealAll() {
  if (shown.value.size === quiz.value.length) shown.value = new Set()
  else shown.value = new Set(quiz.value.map((_, i) => i))
  tick.value++
}

const allShown = computed(() => (tick.value, shown.value.size === quiz.value.length))
</script>

<template>
  <section v-if="quiz.length" class="cpc-test">
    <header class="cpc-test-head">
      <div>
        <h3 class="cpc-test-title">{{ title }}</h3>
        <p class="cpc-test-sub">
          Answer each one out loud before you open it. If you cannot, that is the part to reread.
        </p>
      </div>
      <button type="button" class="cpc-test-all" @click="revealAll">
        {{ allShown ? 'Hide all' : 'Reveal all' }}
      </button>
    </header>

    <ol class="cpc-test-list">
      <li v-for="(item, i) in quiz" :key="i" class="cpc-test-item">
        <button type="button" class="cpc-test-q" :aria-expanded="isShown(i)" @click="reveal(i)">
          <span class="cpc-test-qtext">{{ item.q }}</span>
          <span class="cpc-test-toggle">{{ isShown(i) ? 'Hide' : 'Show answer' }}</span>
        </button>
        <div v-if="isShown(i)" class="cpc-test-a">
          <p>{{ item.a }}</p>
          <p v-if="item.cite" class="cpc-test-cite">
            <span>{{ item.cite }}</span>
            <a v-if="item.to" :href="withBase(item.to)">Go to it &rarr;</a>
          </p>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.cpc-test {
  margin: 40px 0;
  padding: 20px 22px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.cpc-test-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.cpc-test-title {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.cpc-test-sub {
  margin: 4px 0 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

.cpc-test-all {
  flex: none;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 999px;
  background: transparent;
  color: var(--vp-c-brand-1);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
}

.cpc-test-all:hover {
  background: var(--vp-c-brand-soft);
}

.cpc-test-list {
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  counter-reset: cpctest;
}

.cpc-test-item {
  border-top: 1px solid var(--vp-c-divider);
}

.cpc-test-q {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 14px;
  width: 100%;
  padding: 14px 0;
  border: 0;
  background: none;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: var(--vp-c-text-1);
}

.cpc-test-qtext {
  counter-increment: cpctest;
  font-weight: 600;
  line-height: 1.6;
}

.cpc-test-qtext::before {
  content: counter(cpctest) '. ';
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

.cpc-test-q:hover .cpc-test-qtext {
  color: var(--vp-c-brand-1);
}

.cpc-test-toggle {
  flex: none;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  white-space: nowrap;
}

.cpc-test-a {
  padding: 0 0 16px 20px;
  border-left: 2px solid var(--vp-c-brand-1);
  margin-left: 2px;
}

.cpc-test-a p {
  margin: 0;
  font-size: 0.94rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.cpc-test-cite {
  margin-top: 8px !important;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  font-size: 0.8rem !important;
  color: var(--vp-c-text-3) !important;
}

.cpc-test-cite a {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

@media (max-width: 640px) {
  .cpc-test-toggle {
    display: none;
  }
}
</style>
