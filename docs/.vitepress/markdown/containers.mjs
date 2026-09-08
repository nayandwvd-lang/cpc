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

export function cpcContainers(md) {
  const esc = md.utils.escapeHtml

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
}
