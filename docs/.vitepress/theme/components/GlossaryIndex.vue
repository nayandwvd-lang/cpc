<script setup>
/**
 * The glossary page body.
 *
 * Two ways in, because two different people arrive here:
 *  - the reader who hit a word and followed a tooltip, and wants that one
 *    entry (filter box, and every entry carries an id so /glossary#decree
 *    lands on it);
 *  - the reader who has never studied the subject and wants to be taught the
 *    vocabulary in a sensible order (the clusters, which run in the sequence
 *    a case actually unfolds).
 */
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'
import { glossary, glossaryList, glossaryClusters } from '../data/glossary.js'

const q = ref('')

const filtered = computed(() => {
  const needle = q.value.trim().toLowerCase()
  if (!needle) return glossaryList
  return glossaryList.filter(
    (e) =>
      e.term.toLowerCase().includes(needle) ||
      e.short.toLowerCase().includes(needle) ||
      (e.long || '').toLowerCase().includes(needle)
  )
})

const letters = computed(() => {
  const seen = new Set()
  const out = []
  for (const e of filtered.value) {
    const l = e.term[0].toUpperCase()
    if (!seen.has(l)) {
      seen.add(l)
      out.push(l)
    }
  }
  return out
})

function firstOfLetter(entry, i) {
  if (i === 0) return true
  return filtered.value[i - 1].term[0].toUpperCase() !== entry.term[0].toUpperCase()
}

function entryOf(id) {
  return glossary[id]
}
</script>

<template>
  <div class="cpc-gloss">
    <!-- Guided path -------------------------------------------------- -->
    <section class="cpc-gloss-clusters">
      <h2 id="learn-in-order" class="cpc-gloss-h2">Learn them in order</h2>
      <p class="cpc-gloss-lede">
        If you are starting from nothing, do not read this page alphabetically. Read these eight
        groups in sequence — they follow the life of a case, so each group is the vocabulary you
        need before the next one makes sense.
      </p>

      <details v-for="(c, ci) in glossaryClusters" :key="ci" class="cpc-gloss-cluster" :open="ci === 0">
        <summary>
          <span class="cpc-gloss-cnum">{{ ci + 1 }}</span>
          <span class="cpc-gloss-ctitle">{{ c.title }}</span>
          <span class="cpc-gloss-ccount">{{ c.ids.length }} terms</span>
        </summary>
        <p class="cpc-gloss-cblurb">{{ c.blurb }}</p>
        <ul class="cpc-gloss-clist">
          <li v-for="id in c.ids" :key="id">
            <a :href="`#${id}`"><strong>{{ entryOf(id)?.term }}</strong></a>
            <span>{{ entryOf(id)?.short }}</span>
          </li>
        </ul>
      </details>
    </section>

    <!-- A to Z ------------------------------------------------------- -->
    <section class="cpc-gloss-all">
      <h2 id="every-term" class="cpc-gloss-h2">Every term, A to Z</h2>

      <div class="cpc-gloss-search">
        <input
          v-model="q"
          type="search"
          placeholder="Type a word — mesne, abatement, garnishee…"
          aria-label="Filter glossary"
        />
        <span class="cpc-gloss-count">
          {{ filtered.length }} of {{ glossaryList.length }}
        </span>
      </div>

      <p v-if="!filtered.length" class="cpc-gloss-empty">
        Nothing matches “{{ q }}”. Try a shorter fragment, or press <kbd>/</kbd> to search the whole
        guide instead.
      </p>

      <div v-for="(e, i) in filtered" :key="e.id">
        <h3 v-if="firstOfLetter(e, i)" class="cpc-gloss-letter" :id="`letter-${e.term[0].toLowerCase()}`">
          {{ e.term[0].toUpperCase() }}
        </h3>

        <article :id="e.id" class="cpc-gloss-entry">
          <h4 class="cpc-gloss-term">
            {{ e.term }}
            <a class="cpc-gloss-anchor" :href="`#${e.id}`" aria-label="Link to this term">#</a>
          </h4>
          <p class="cpc-gloss-short">{{ e.short }}</p>
          <p v-if="e.long" class="cpc-gloss-long">{{ e.long }}</p>
          <p class="cpc-gloss-links">
            <a v-if="e.see" :href="withBase(e.see)" class="cpc-gloss-see">Worked out in the guide &rarr;</a>
            <span v-if="e.also?.length" class="cpc-gloss-also">
              See also:
              <template v-for="(a, ai) in e.also" :key="a">
                <a :href="`#${a}`">{{ entryOf(a)?.term || a }}</a><span v-if="ai < e.also.length - 1">, </span>
              </template>
            </span>
          </p>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cpc-gloss-h2 {
  margin-top: 48px;
  padding-top: 20px;
  border-top: 2px solid var(--vp-c-brand-1);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.cpc-gloss-lede {
  color: var(--vp-c-text-2);
  line-height: 1.75;
}

/* ---- clusters ---- */

.cpc-gloss-cluster {
  margin: 12px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}

.cpc-gloss-cluster > summary {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  list-style: none;
  font-weight: 600;
}

.cpc-gloss-cluster > summary::-webkit-details-marker {
  display: none;
}

.cpc-gloss-cnum {
  flex: none;
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 0.76rem;
  font-weight: 700;
}

.dark .cpc-gloss-cnum {
  color: #1b1717;
}

.cpc-gloss-ctitle {
  flex: 1;
}

.cpc-gloss-ccount {
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.cpc-gloss-cblurb {
  margin: 0;
  padding: 0 16px;
  font-size: 0.88rem;
  color: var(--vp-c-text-3);
}

.cpc-gloss-clist {
  margin: 10px 0 0;
  padding: 0 16px 16px;
  list-style: none;
}

.cpc-gloss-clist li {
  padding: 7px 0;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.9rem;
  line-height: 1.6;
}

.cpc-gloss-clist li a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  margin-right: 8px;
}

.cpc-gloss-clist li a:hover {
  text-decoration: underline;
}

.cpc-gloss-clist li span {
  color: var(--vp-c-text-2);
}

/* ---- A to Z ---- */

.cpc-gloss-search {
  position: sticky;
  top: var(--vp-nav-height);
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  background: var(--vp-c-bg);
}

.cpc-gloss-search input {
  flex: 1;
  padding: 9px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.92rem;
  outline: none;
}

.cpc-gloss-search input:focus {
  border-color: var(--vp-c-brand-1);
}

.cpc-gloss-count {
  flex: none;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.cpc-gloss-empty {
  color: var(--vp-c-text-3);
}

.cpc-gloss-letter {
  margin: 30px 0 8px;
  padding: 0;
  border: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--vp-c-brand-1);
}

.cpc-gloss-entry {
  padding: 14px 0;
  border-top: 1px solid var(--vp-c-divider);
  scroll-margin-top: calc(var(--vp-nav-height) + 24px);
}

.cpc-gloss-entry:target {
  background: var(--vp-c-brand-soft);
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
}

.cpc-gloss-term {
  margin: 0 0 4px;
  font-size: 1.02rem;
  font-weight: 700;
}

.cpc-gloss-anchor {
  margin-left: 6px;
  opacity: 0;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 400;
}

.cpc-gloss-entry:hover .cpc-gloss-anchor {
  opacity: 1;
}

.cpc-gloss-short {
  margin: 0 0 6px;
  font-size: 0.96rem;
  line-height: 1.65;
  color: var(--vp-c-text-1);
}

.cpc-gloss-long {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.cpc-gloss-links {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 18px;
  margin: 8px 0 0;
  font-size: 0.83rem;
  color: var(--vp-c-text-3);
}

.cpc-gloss-links a {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
}

.cpc-gloss-links a:hover {
  text-decoration: underline;
}

.cpc-gloss-see {
  white-space: nowrap;
}
</style>
