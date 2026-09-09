<script setup>
/**
 * Automatic vocabulary highlighting.
 *
 * The problem this solves: there are ~1.5 million characters of chapter prose
 * already written, and hand-wrapping every term of art in <Term> is not
 * realistic. So instead of authoring the links, we find them — walk the
 * rendered text nodes after each navigation and wrap known glossary terms.
 *
 * Three restraints, because the naive version of this feature is worse than
 * not having it at all:
 *
 *  1. FIRST OCCURRENCE ONLY, per term per page. A page where every instance
 *     of "decree" is underlined is unreadable, and the reader only needs to
 *     be told once. This is also why the reading experience stays calm: a
 *     typical chapter picks up 20-40 marks, not 400.
 *
 *  2. A denylist of reference tokens. "Section", "Order", "Rule", "Article"
 *     appear thousands of times as pure citation machinery ("Order VII Rule
 *     11"), where a hover definition is noise. They stay in the glossary; they
 *     just do not get auto-marked.
 *
 *  3. Structural skips. Never descend into headings, code, existing links,
 *     the hand-placed <Term> triggers, or the glossary page itself — those
 *     either already explain themselves or would break if rewritten.
 *
 * One shared popup element serves every mark. Creating a Vue component per
 * occurrence would mean hundreds of instances per page for no benefit.
 */
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { useRoute, useData, withBase } from 'vitepress'
import { glossary } from '../data/glossary.js'

const route = useRoute()
const { page } = useData()

/* Reference machinery, not concepts. See restraint 2 above. */
const DENY = new Set([
  'section', 'order', 'rule', 'article', 'first-schedule', 'cpc',
  'air', 'scc', 'suit', 'costs', 'issues', 'admission', 'evidence',
  'possession', 'appeal', 'judgment', 'plaintiff', 'defendant',

  // Ambiguous in ordinary prose. "Commission" is the trigger case: the guide
  // says "a tribunal, a controller or a commission" meaning a consumer
  // commission, and marking that with the Order XXVI definition of a
  // court-appointed commissioner actively misleads. When a word's everyday
  // sense appears in this guide at all, auto-marking is worse than nothing.
  'commission', 'review', 'withdrawal', 'compromise', 'precedent'
])

/* Surface forms that should resolve to an entry but are not the entry's own
   term. Only the ones that actually earn their keep — inflections a reader
   will genuinely meet in this guide. */
const ALIASES = {
  'res judicata': 'res-judicata',
  'res sub judice': 'res-sub-judice',
  'constructive res judicata': 'constructive-res-judicata',
  'mesne profits': 'mesne-profits',
  'ex parte': 'ex-parte',
  'prima facie': 'prima-facie',
  'balance of convenience': 'balance-of-convenience',
  'irreparable injury': 'irreparable-injury',
  'irreparable harm': 'irreparable-injury',
  'sine qua non': 'sine-qua-non',
  'non-obstante': 'non-obstante',
  'suo motu': 'suo-motu',
  'de novo': 'de-novo',
  'locus standi': 'locus-standi',
  'pendente lite': 'pendente-lite',
  'coram non judice': 'coram-non-judice',
  'decree-holder': 'decree-holder',
  'judgment-debtor': 'judgment-debtor',
  'written statement': 'written-statement',
  'cause of action': 'cause-of-action',
  'vakalatnama': 'vakalatnama',
  'garnishee': 'garnishee',
  'interrogatories': 'interrogatories',
  'impleadment': 'impleadment',
  'abatement': 'abatement',
  'restitution': 'restitution',
  'caveat': 'caveat',
  'receiver': 'receiver',
  'plaint': 'plaint',
  'summons': 'summons',
  'decree': 'decree',
  'injunction': 'injunction',
  'jurisdiction': 'jurisdiction',
  'limitation': 'limitation',
  'pleadings': 'pleadings',
  'execution': 'execution',
  'attachment': 'attachment',
  'set-off': 'set-off',
  'counter-claim': 'counter-claim',
  'counterclaim': 'counter-claim',
  'court fee': 'court-fee',
  'court-fee': 'court-fee',
  'material facts': 'material-facts',
  'necessary party': 'necessary-party',
  'proper party': 'proper-party',
  'legal representative': 'legal-representative',
  'substituted service': 'substituted-service',
  'preliminary decree': 'preliminary-decree',
  'final decree': 'final-decree',
  'substantial question of law': 'substantial-question',
  'inherent powers': 'inherent-powers',
  'burden of proof': 'burden-of-proof',
  'cross-examination': 'cross-examination',
  'examination-in-chief': 'examination-in-chief',
  'sufficient cause': 'sufficient-cause',
  'due diligence': 'due-diligence',
  'status quo': 'status-quo',
  'ratio decidendi': 'ratio',
  'obiter': 'obiter',
  'condonation': 'condonation',
  'rateable distribution': 'rateable-distribution',
  'judgment-debtors': 'judgment-debtor',
  'decree-holders': 'decree-holder'
}

/* Longest-first, so "constructive res judicata" wins over "res judicata". */
let matcher = null
function buildMatcher() {
  if (matcher) return matcher

  const forms = new Map()
  for (const [id, entry] of Object.entries(glossary)) {
    if (DENY.has(id)) continue
    forms.set(entry.term.toLowerCase(), id)
  }
  for (const [form, id] of Object.entries(ALIASES)) {
    if (DENY.has(id) || !glossary[id]) continue
    forms.set(form, id)
  }

  const sorted = [...forms.keys()].sort((a, b) => b.length - a.length)
  const escaped = sorted.map((f) => f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))

  matcher = {
    re: new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi'),
    forms
  }
  return matcher
}

const SKIP_TAGS = new Set([
  'A', 'CODE', 'PRE', 'SCRIPT', 'STYLE', 'BUTTON', 'SUMMARY', 'KBD',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'TEXTAREA', 'INPUT', 'ABBR'
])

function shouldSkip(node) {
  let el = node.parentElement
  while (el && el !== document.body) {
    if (SKIP_TAGS.has(el.tagName)) return true
    if (el.classList.contains('cpc-term-trigger')) return true
    if (el.classList.contains('cpc-auto')) return true
    if (el.classList.contains('cpc-gloss')) return true
    if (el.classList.contains('no-autoglossary')) return true
    el = el.parentElement
  }
  return false
}

/* ---- the shared popup ---- */

const open = ref(false)
const active = ref(null)
const pos = ref({ top: 0, left: 0 })

function showFor(el) {
  const id = el.dataset.cpcId
  const entry = glossary[id]
  if (!entry) return

  const r = el.getBoundingClientRect()
  const W = 320
  let left = r.left + r.width / 2 - W / 2
  left = Math.max(12, Math.min(left, window.innerWidth - W - 12))

  // Flip above when there is not enough room below.
  const below = window.innerHeight - r.bottom
  const top = below < 200 ? r.top + window.scrollY - 12 : r.bottom + window.scrollY + 10

  active.value = { id, ...entry, flip: below < 200 }
  pos.value = { top, left }
  open.value = true
}

function hide() {
  open.value = false
  active.value = null
}

let hideTimer = null
function onOver(e) {
  const el = e.target.closest?.('.cpc-auto')
  if (!el) return
  clearTimeout(hideTimer)
  showFor(el)
}

function onOut(e) {
  if (!e.target.closest?.('.cpc-auto')) return
  hideTimer = setTimeout(hide, 180)
}

function onKey(e) {
  if (e.key === 'Escape') hide()
}

/* ---- the walk ---- */

function decorate() {
  // The glossary page defines these words for a living; marking them there
  // would be circular.
  if (route.path.replace(/\/$/, '').endsWith('/glossary')) return

  const root = document.querySelector('.vp-doc')
  if (!root) return
  if (root.dataset.cpcDecorated === route.path) return

  const { re, forms } = buildMatcher()
  const seen = new Set()

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      if (!n.nodeValue || n.nodeValue.length < 4) return NodeFilter.FILTER_REJECT
      if (shouldSkip(n)) return NodeFilter.FILTER_REJECT
      return NodeFilter.FILTER_ACCEPT
    }
  })

  const targets = []
  let n
  while ((n = walker.nextNode())) targets.push(n)

  for (const node of targets) {
    const text = node.nodeValue
    re.lastIndex = 0

    let match
    let cursor = 0
    let frag = null

    while ((match = re.exec(text))) {
      const id = forms.get(match[0].toLowerCase())
      if (!id || seen.has(id)) continue
      seen.add(id)

      frag = frag || document.createDocumentFragment()
      if (match.index > cursor) {
        frag.appendChild(document.createTextNode(text.slice(cursor, match.index)))
      }

      const mark = document.createElement('span')
      mark.className = 'cpc-auto'
      mark.dataset.cpcId = id
      mark.setAttribute('tabindex', '0')
      mark.setAttribute('role', 'button')
      mark.setAttribute('aria-label', `${match[0]} — show definition`)
      mark.textContent = match[0]
      frag.appendChild(mark)

      cursor = match.index + match[0].length
    }

    if (frag) {
      if (cursor < text.length) {
        frag.appendChild(document.createTextNode(text.slice(cursor)))
      }
      node.parentNode.replaceChild(frag, node)
    }
  }

  root.dataset.cpcDecorated = route.path
}

function run() {
  nextTick(() => requestAnimationFrame(decorate))
}

onMounted(() => {
  run()
  document.addEventListener('mouseover', onOver)
  document.addEventListener('mouseout', onOut)
  document.addEventListener('focusin', onOver)
  document.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  document.removeEventListener('mouseover', onOver)
  document.removeEventListener('mouseout', onOut)
  document.removeEventListener('focusin', onOver)
  document.removeEventListener('keydown', onKey)
  clearTimeout(hideTimer)
})

watch(() => page.value.relativePath, run)
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open && active"
      class="cpc-auto-pop"
      :class="{ 'is-flip': active.flip }"
      :style="{ top: `${pos.top}px`, left: `${pos.left}px` }"
      @mouseenter="clearTimeout(hideTimer)"
      @mouseleave="hide"
    >
      <p class="cpc-auto-term">{{ active.term }}</p>
      <p class="cpc-auto-short">{{ active.short }}</p>
      <a class="cpc-auto-more" :href="withBase(`/glossary#${active.id}`)">
        Full entry &rarr;
      </a>
    </div>
  </Teleport>
</template>

<style>
/* Unscoped: the marks are created imperatively, so they carry no scope hash. */
.cpc-auto {
  border-bottom: 1px dotted var(--vp-c-brand-1);
  cursor: help;
  outline: none;
}

.cpc-auto:hover,
.cpc-auto:focus {
  background: var(--vp-c-brand-soft);
  border-radius: 3px;
}

.cpc-auto-pop {
  position: absolute;
  z-index: 100;
  width: 320px;
  padding: 12px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-elv);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.16);
  font-size: 0.87rem;
  line-height: 1.6;
}

.cpc-auto-pop.is-flip {
  transform: translateY(-100%);
}

.cpc-auto-term {
  margin: 0 0 5px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.cpc-auto-short {
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
}

.cpc-auto-more {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.cpc-auto-more:hover {
  text-decoration: underline;
}

@media print {
  .cpc-auto {
    border-bottom: none;
  }

  .cpc-auto-pop {
    display: none;
  }
}
</style>
