<script setup>
/**
 * <KeyTerms :ids="['decree','execution']" />
 *
 * The vocabulary gate for a chapter. Retrofitting a <Term> tooltip onto every
 * occurrence of every term of art across 1.5 million characters is not
 * realistic; putting the chapter's vocabulary in one openable panel at the top
 * is, and it is arguably better pedagogy — the reader meets the words once,
 * deliberately, before the words start doing work.
 *
 * Closed by default so it costs a returning practitioner nothing.
 */
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'
import { glossary } from '../data/glossary.js'

const props = defineProps({
  ids: { type: Array, required: true },
  /** Open on load — used on /start, where the words are the point. */
  open: { type: Boolean, default: false }
})

const expanded = ref(props.open)

const items = computed(() =>
  props.ids.map((id) => ({ id, ...(glossary[id] ?? { term: id, short: '' }) }))
)
</script>

<template>
  <section class="cpc-keyterms" :class="{ 'is-open': expanded }">
    <button type="button" class="cpc-keyterms-toggle" @click="expanded = !expanded">
      <span class="cpc-keyterms-chevron" aria-hidden="true">›</span>
      <span class="cpc-keyterms-label">
        Words on this page
        <span class="cpc-keyterms-count">{{ items.length }}</span>
      </span>
      <span class="cpc-keyterms-hint">
        {{ expanded ? 'Hide' : 'Never seen these before? Open this first.' }}
      </span>
    </button>

    <dl v-show="expanded" class="cpc-keyterms-list">
      <div v-for="t in items" :key="t.id" class="cpc-keyterms-item">
        <dt>
          <a :href="withBase(`/glossary#${t.id}`)">{{ t.term }}</a>
        </dt>
        <dd>{{ t.short }}</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.cpc-keyterms {
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}

.cpc-keyterms-toggle {
  display: flex;
  align-items: baseline;
  gap: 10px;
  width: 100%;
  padding: 12px 16px;
  border: 0;
  background: none;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: var(--vp-c-text-1);
}

.cpc-keyterms-toggle:hover .cpc-keyterms-label {
  color: var(--vp-c-brand-1);
}

.cpc-keyterms-chevron {
  font-size: 1.1rem;
  line-height: 1;
  color: var(--vp-c-brand-1);
  transition: transform 0.18s ease;
}

.is-open .cpc-keyterms-chevron {
  transform: rotate(90deg);
}

.cpc-keyterms-label {
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--vp-c-text-1);
}

.cpc-keyterms-count {
  display: inline-block;
  margin-left: 6px;
  padding: 1px 7px;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.72rem;
  letter-spacing: 0;
}

.cpc-keyterms-hint {
  margin-left: auto;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}

.cpc-keyterms-list {
  margin: 0;
  padding: 4px 16px 16px;
  border-top: 1px solid var(--vp-c-divider);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px 26px;
}

.cpc-keyterms-item {
  min-width: 0;
}

.cpc-keyterms-item dt {
  margin: 10px 0 2px;
  font-weight: 600;
  font-size: 0.9rem;
}

.cpc-keyterms-item dt a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.cpc-keyterms-item dt a:hover {
  text-decoration: underline;
}

.cpc-keyterms-item dd {
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

@media (max-width: 640px) {
  .cpc-keyterms-hint {
    display: none;
  }
}
</style>
