import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import CivilSuitNavigator from './components/CivilSuitNavigator.vue'
import ChapterMeta from './components/ChapterMeta.vue'
import KeyTerms from './components/KeyTerms.vue'
import Term from './components/Term.vue'
import SelfTest from './components/SelfTest.vue'
import Flow from './components/Flow.vue'
import GlossaryIndex from './components/GlossaryIndex.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import MicroTree from './components/MicroTree.vue'
import LegalGlossary from './components/LegalGlossary.vue'
import ViewMode from './components/ViewMode.vue'
import './custom.css'

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      // The progress meter must be fixed to the viewport, so it cannot live
      // inside the doc container. layout-top is the only slot above it.
      // LegalGlossary rides along here because it is invisible until hovered
      // and needs to run on every page without being authored into each one.
      'layout-top': () => [h(ReadingProgress), h(LegalGlossary)],

      // The mode switch has to sit above the first heading, so the reader
      // meets it before deciding whether the page is too basic for them.
      'doc-before': () => h(ViewMode)
    })
  },

  enhanceApp({ app }) {
    // Registered globally so any markdown page can use them without an import
    // block at the top of the file.
    app.component('CivilSuitNavigator', CivilSuitNavigator)
    app.component('ChapterMeta', ChapterMeta)
    app.component('KeyTerms', KeyTerms)
    app.component('Term', Term)
    app.component('SelfTest', SelfTest)
    app.component('Flow', Flow)
    app.component('GlossaryIndex', GlossaryIndex)
    app.component('MicroTree', MicroTree)
  }
}
