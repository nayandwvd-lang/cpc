/**
 * Two extra markdown containers, written by hand rather than pulled from npm.
 *
 * Why not a Vue component? Because VitePress's local search indexes rendered
 * markdown, not the innards of client components. Anything a reader might
 * search for — and the plain-English summary of a provision is exactly that —
 * has to stay in markdown or it silently disappears from the search box.
 *
 * Why not reuse ::: info? Because the guide already spends all four built-in
 * container colours on distinct meanings (tip = takeaway, info = architecture,
 * warning = before you file, danger = the trap). Overloading one of them would
 * destroy the at-a-glance legibility the visual layer was built for.
 *
 *   ::: oneminute Section 9 in plain words
 *   The plain-language summary that a beginner reads BEFORE the bare Act.
 *   :::
 *
 *   ::: story Anita's shop
 *   A worked example on invented facts, using the guide's recurring cast.
 *   :::
 */

/**
 * A minimal ::: fence ::: block rule. This is the standard markdown-it
 * container algorithm — scan forward for a closing run of at least as many
 * colons, tokenize the interior as block content, emit an open/close pair.
 */
function addContainer(md, name, renderOpen, renderClose) {
  const MARKER = 0x3a /* ':' */
  const MIN_MARKERS = 3
  const ruleName = `container_${name}`

  function tokenize(state, startLine, endLine, silent) {
    let pos = state.bMarks[startLine] + state.tShift[startLine]
    let max = state.eMarks[startLine]

    // An indented block is code, not a container.
    if (state.sCount[startLine] - state.blkIndent >= 4) return false
    if (state.src.charCodeAt(pos) !== MARKER) return false

    let start = pos
    pos++
    while (pos < max && state.src.charCodeAt(pos) === MARKER) pos++
    const markerCount = pos - start
    if (markerCount < MIN_MARKERS) return false

    const params = state.src.slice(pos, max).trim()
    if (params.split(/\s+/)[0] !== name) return false
    if (silent) return true

    let nextLine = startLine
    let haveEndMarker = false

    for (;;) {
      nextLine++
      if (nextLine >= endLine) break

      pos = state.bMarks[nextLine] + state.tShift[nextLine]
      max = state.eMarks[nextLine]

      if (pos < max && state.sCount[nextLine] < state.blkIndent) break
      if (state.src.charCodeAt(pos) !== MARKER) continue
      if (state.sCount[nextLine] - state.blkIndent >= 4) continue

      start = pos
      pos++
      while (pos < max && state.src.charCodeAt(pos) === MARKER) pos++
      if (pos - start < markerCount) continue

      pos = state.skipSpaces(pos)
      if (pos < max) continue

      haveEndMarker = true
      break
    }

    const oldParent = state.parentType
    const oldLineMax = state.lineMax
    state.parentType = 'container'
    state.lineMax = nextLine

    const open = state.push(`${ruleName}_open`, 'div', 1)
    open.markup = ':'.repeat(markerCount)
    open.block = true
    open.info = params
    open.map = [startLine, nextLine]

    state.md.block.tokenize(state, startLine + 1, nextLine)

    const close = state.push(`${ruleName}_close`, 'div', -1)
    close.markup = state.src.slice(start, pos)
    close.block = true

    state.parentType = oldParent
    state.lineMax = oldLineMax
    state.line = nextLine + (haveEndMarker ? 1 : 0)

    return true
  }

  md.block.ruler.before('fence', ruleName, tokenize, {
    alt: ['paragraph', 'reference', 'blockquote', 'list']
  })

  md.renderer.rules[`${ruleName}_open`] = renderOpen
  md.renderer.rules[`${ruleName}_close`] = renderClose
}

/** Strip the container name off the info string, leaving the human title. */
function titleOf(info, name) {
  return info.slice(name.length).trim()
}

/**
 * Inline badges for the decompiled bare Act.
 *
 *   [[!shall]]        → mandatory, red
 *   [[?may]]          → discretionary, blue
 *   [[=res judicata]] → term of art, dotted (picked up by LegalGlossary)
 *
 * An inline rule rather than raw <span> in the markdown, because the bare Act
 * text gets annotated dozens of times per provision and raw HTML at that
 * density makes the source unreadable — which is how annotations rot.
 *
 * The visible word stays plain text in the rendered output, so search still
 * indexes "shall" and "res judicata" normally.
 */
function addBadges(md) {
  const OPEN = 0x5b /* [ */
  const KINDS = {
    '!': ['cpc-mand', 'Mandatory'],
    '?': ['cpc-disc', 'Discretionary'],
    '=': ['cpc-art', 'Term of art']
  }

  md.inline.ruler.before('link', 'cpc_badge', (state, silent) => {
    const start = state.pos
    if (state.src.charCodeAt(start) !== OPEN) return false
    if (state.src.charCodeAt(start + 1) !== OPEN) return false

    const kind = state.src[start + 2]
    if (!KINDS[kind]) return false

    const end = state.src.indexOf(']]', start + 3)
    if (end === -1) return false

    const body = state.src.slice(start + 3, end)
    // A badge never spans a line break or nests another badge.
    if (!body || body.includes('\n') || body.includes('[[')) return false

    if (!silent) {
      const [cls, title] = KINDS[kind]
      const token = state.push('html_inline', '', 0)
      token.content =
        `<span class="${cls}" title="${title}">` +
        md.utils.escapeHtml(body) +
        '</span>'
    }

    state.pos = end + 2
    return true
  })
}

export function cpcContainers(md) {
  const esc = md.utils.escapeHtml

  addBadges(md)

  addContainer(
    md,
    'oneminute',
    (tokens, idx) => {
      const title = titleOf(tokens[idx].info, 'oneminute')
      return (
        '<div class="cpc-oneminute">' +
        '<p class="cpc-oneminute-head">' +
        '<span class="cpc-oneminute-kicker">In one minute</span>' +
        (title ? `<span class="cpc-oneminute-title">${esc(title)}</span>` : '') +
        '</p>\n'
      )
    },
    () => '</div>\n'
  )

  addContainer(
    md,
    'story',
    (tokens, idx) => {
      const title = titleOf(tokens[idx].info, 'story')
      return (
        '<div class="cpc-story">' +
        '<p class="cpc-story-head">' +
        '<span class="cpc-story-badge">Worked example · invented facts</span>' +
        (title ? `<span class="cpc-story-title">${esc(title)}</span>` : '') +
        '</p>\n'
      )
    },
    () => '</div>\n'
  )

  /**
   * ::: proviso Provided that the suit is of a civil nature
   *
   * A gating proviso is not a note — it is a condition that can defeat the
   * whole provision, and beginners consistently read past it. It gets its own
   * yellow box so the eye cannot skip it.
   */
  addContainer(
    md,
    'proviso',
    (tokens, idx) => {
      const title = titleOf(tokens[idx].info, 'proviso')
      return (
        '<div class="cpc-proviso">' +
        '<p class="cpc-proviso-head">' +
        '<span class="cpc-proviso-kicker">Gating proviso</span>' +
        (title ? `<span class="cpc-proviso-title">${esc(title)}</span>` : '') +
        '</p>\n'
      )
    },
    () => '</div>\n'
  )

  /**
   * Test-your-instinct. Nested, so the facts stay visible and only the ruling
   * is hidden behind the disclosure:
   *
   *   ::::instinct Anita files again
   *   The facts, then the question.
   *   :::ruling
   *   What the court actually does, and why.
   *   :::
   *   ::::
   *
   * <details> rather than a Vue component on purpose: it is keyboard
   * accessible and it still works with JS disabled or before hydration, and
   * the hidden answer stays in the markdown so search can reach it.
   */
  addContainer(
    md,
    'instinct',
    (tokens, idx) => {
      const title = titleOf(tokens[idx].info, 'instinct')
      return (
        '<div class="cpc-instinct">' +
        '<p class="cpc-instinct-head">' +
        '<span class="cpc-instinct-kicker">Test your instinct</span>' +
        (title ? `<span class="cpc-instinct-title">${esc(title)}</span>` : '') +
        '</p>\n'
      )
    },
    () => '</div>\n'
  )

  addContainer(
    md,
    'ruling',
    (tokens, idx) => {
      const label = titleOf(tokens[idx].info, 'ruling') || 'Reveal the ruling'
      return (
        '<details class="cpc-ruling">' +
        `<summary><span>${esc(label)}</span></summary>` +
        '<div class="cpc-ruling-body">\n'
      )
    },
    () => '</div></details>\n'
  )
}
