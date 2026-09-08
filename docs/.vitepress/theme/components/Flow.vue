<script setup>
/**
 * <Flow id="appeal-route" />
 *
 * Some of this guide was prose that should never have been prose. "Is it a
 * decree? then s. 96. Is it listed in s. 104 or Order XLIII Rule 1? then an
 * appeal from an order. Otherwise your only route is revision" is a decision
 * tree, and a reader who has never done it before will get it from a tree in
 * fifteen seconds and from a paragraph not at all.
 *
 * Deliberately no graph library: a vertical spine of nodes, where a node may
 * fan out into branch cards. That covers both shapes this guide needs —
 * ordered sequences and yes/no chains — with plain DOM that prints, works
 * offline, and reflows on a phone.
 */
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { flows } from '../data/flows.js'

const props = defineProps({
  id: { type: String, required: true }
})

const flow = computed(() => flows[props.id])

if (!flows[props.id] && typeof console !== 'undefined') {
  console.warn(`[Flow] no flow for "${props.id}"`)
}
</script>

<template>
  <figure v-if="flow" class="cpc-flow">
    <figcaption v-if="flow.title" class="cpc-flow-cap">
      <span class="cpc-flow-kicker">{{ flow.kicker || 'Decide it in order' }}</span>
      <strong>{{ flow.title }}</strong>
      <span v-if="flow.intro" class="cpc-flow-intro">{{ flow.intro }}</span>
    </figcaption>

    <ol class="cpc-flow-spine">
      <li v-for="(n, i) in flow.nodes" :key="i" class="cpc-flow-node" :class="`is-${n.kind}`">
        <div class="cpc-flow-box">
          <span v-if="n.kind === 'step'" class="cpc-flow-num">{{ n.num ?? i + 1 }}</span>
          <span v-else-if="n.kind === 'ask'" class="cpc-flow-num is-ask">?</span>

          <div class="cpc-flow-text">
            <component
              :is="n.to ? 'a' : 'span'"
              :href="n.to ? withBase(n.to) : undefined"
              class="cpc-flow-label"
            >
              {{ n.label }}
            </component>
            <span v-if="n.note" class="cpc-flow-note">{{ n.note }}</span>
          </div>
        </div>

        <ul v-if="n.branches" class="cpc-flow-branches">
          <li
            v-for="(b, j) in n.branches"
            :key="j"
            class="cpc-flow-branch"
            :class="`tone-${b.tone || 'next'}`"
          >
            <span class="cpc-flow-answer">{{ b.answer }}</span>
            <component
              :is="b.to ? 'a' : 'span'"
              :href="b.to ? withBase(b.to) : undefined"
              class="cpc-flow-outcome"
            >
              {{ b.label }}
            </component>
            <span v-if="b.note" class="cpc-flow-bnote">{{ b.note }}</span>
          </li>
        </ul>
      </li>
    </ol>

    <p v-if="flow.foot" class="cpc-flow-foot">{{ flow.foot }}</p>
  </figure>
</template>

<style scoped>
.cpc-flow {
  margin: 28px 0;
  padding: 18px 20px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.cpc-flow-cap {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 16px;
}

.cpc-flow-kicker {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}

.cpc-flow-cap strong {
  font-size: 1.02rem;
  line-height: 1.4;
}

.cpc-flow-intro {
  font-size: 0.87rem;
  line-height: 1.6;
  color: var(--vp-c-text-3);
}

.cpc-flow-spine {
  margin: 0;
  padding: 0;
  list-style: none;
}

.cpc-flow-node {
  position: relative;
  padding-bottom: 14px;
}

/* The connector: a hairline running from one box into the next. */
.cpc-flow-node:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 13px;
  top: 30px;
  bottom: 0;
  width: 2px;
  background: var(--vp-c-divider);
}

.cpc-flow-box {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.cpc-flow-num {
  flex: none;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  z-index: 1;
}

.dark .cpc-flow-num {
  color: #1b1717;
}

.cpc-flow-num.is-ask {
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
  border: 2px solid var(--vp-c-brand-1);
}

.cpc-flow-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 3px;
  min-width: 0;
}

.cpc-flow-label {
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}

a.cpc-flow-label {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

a.cpc-flow-label:hover {
  text-decoration: underline;
}

.cpc-flow-note {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--vp-c-text-3);
}

.cpc-flow-branches {
  margin: 10px 0 2px;
  padding: 0 0 0 40px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px;
}

.cpc-flow-branch {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 10px 12px;
  border: 1px solid var(--vp-c-divider);
  border-left-width: 3px;
  border-radius: 0 8px 8px 0;
  background: var(--vp-c-bg);
}

.cpc-flow-answer {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.cpc-flow-outcome {
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.45;
  color: var(--vp-c-text-1);
}

a.cpc-flow-outcome {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

a.cpc-flow-outcome:hover {
  text-decoration: underline;
}

.cpc-flow-bnote {
  font-size: 0.81rem;
  line-height: 1.55;
  color: var(--vp-c-text-3);
}

.tone-go {
  border-left-color: var(--vp-c-tip-1);
}
.tone-go .cpc-flow-answer {
  color: var(--vp-c-tip-1);
}

.tone-stop {
  border-left-color: var(--vp-c-danger-1);
}
.tone-stop .cpc-flow-answer {
  color: var(--vp-c-danger-1);
}

.tone-warn {
  border-left-color: var(--vp-c-warning-1);
}
.tone-warn .cpc-flow-answer {
  color: var(--vp-c-warning-1);
}

.tone-next {
  border-left-color: var(--vp-c-text-3);
}
.tone-next .cpc-flow-answer {
  color: var(--vp-c-text-3);
}

.cpc-flow-foot {
  margin: 14px 0 0;
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.84rem;
  line-height: 1.6;
  color: var(--vp-c-text-3);
}

@media (max-width: 640px) {
  .cpc-flow-branches {
    padding-left: 22px;
  }
}

@media print {
  .cpc-flow {
    break-inside: avoid;
  }
}
</style>
