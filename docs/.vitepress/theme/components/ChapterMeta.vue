<script setup>
/**
 * The orientation card that opens every chapter.
 *
 * Four questions a reader silently asks before committing to 60,000 words,
 * none of which the guide previously answered:
 *   How long is this?      -> time
 *   Am I ready for it?     -> level + prereq
 *   Why am I reading it?   -> outcomes
 *   Where does it sit?     -> stage
 *
 * `outcomes` is deliberately phrased as things the reader will be able to DO.
 * "Understand res judicata" is not an outcome; "tell whether a second suit is
 * barred, and say which Explanation bars it" is.
 */
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  /** Approximate reading minutes for the whole chapter. */
  time: { type: [String, Number], required: true },
  /** Foundation | Intermediate | Advanced */
  level: { type: String, default: 'Foundation' },
  /** Where in the life of a suit this chapter bites. */
  stage: { type: String, default: '' },
  /** [{ text, link }] — read these first. */
  prereq: { type: Array, default: () => [] },
  /** Plain strings, each beginning with a verb. */
  outcomes: { type: Array, default: () => [] }
})

const levelKey = computed(() => props.level.toLowerCase())
</script>

<template>
  <section class="cpc-meta">
    <div class="cpc-meta-bar">
      <span class="cpc-meta-stat">
        <span class="cpc-meta-k">Reading time</span>
        <span class="cpc-meta-v">~{{ time }} min</span>
      </span>
      <span class="cpc-meta-stat">
        <span class="cpc-meta-k">Level</span>
        <span class="cpc-meta-v cpc-meta-level" :class="`is-${levelKey}`">{{ level }}</span>
      </span>
      <span v-if="stage" class="cpc-meta-stat cpc-meta-stage">
        <span class="cpc-meta-k">Stage of a suit</span>
        <span class="cpc-meta-v">{{ stage }}</span>
      </span>
    </div>

    <div v-if="prereq.length" class="cpc-meta-prereq">
      <span class="cpc-meta-k">Read first</span>
      <span>
        <template v-for="(p, i) in prereq" :key="p.link">
          <a :href="withBase(p.link)">{{ p.text }}</a><span v-if="i < prereq.length - 1"> · </span>
        </template>
      </span>
    </div>

    <div v-if="outcomes.length" class="cpc-meta-outcomes">
      <span class="cpc-meta-k">After this chapter you will be able to</span>
      <ul>
        <li v-for="(o, i) in outcomes" :key="i">{{ o }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.cpc-meta {
  margin: 22px 0 30px;
  padding: 16px 18px;
  border: 1px solid var(--vp-c-divider);
  border-top: 3px solid var(--vp-c-brand-1);
  border-radius: 0 0 10px 10px;
  background: var(--vp-c-bg-soft);
}

.cpc-meta-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 28px;
}

.cpc-meta-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cpc-meta-stage {
  min-width: 0;
}

.cpc-meta-k {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.cpc-meta-v {
  font-size: 0.94rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.cpc-meta-level.is-foundation {
  color: #0f766e;
}
.cpc-meta-level.is-intermediate {
  color: #a16207;
}
.cpc-meta-level.is-advanced {
  color: var(--vp-c-danger-1);
}
.dark .cpc-meta-level.is-foundation {
  color: #5eead4;
}
.dark .cpc-meta-level.is-intermediate {
  color: #fbbf24;
}

.cpc-meta-prereq {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 12px;
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.9rem;
}

.cpc-meta-prereq a {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.cpc-meta-outcomes {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-divider);
}

.cpc-meta-outcomes ul {
  margin: 6px 0 0;
  padding-left: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 4px 24px;
}

.cpc-meta-outcomes li {
  position: relative;
  padding-left: 22px;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.cpc-meta-outcomes li::before {
  content: '✓';
  position: absolute;
  left: 2px;
  color: var(--vp-c-brand-1);
  font-weight: 700;
}
</style>
