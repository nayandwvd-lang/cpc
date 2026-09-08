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
import './custom.css'

export default {
  extends: DefaultTheme,

  // The progress meter must be fixed to the viewport, so it cannot live inside
  // the doc container. layout-top is the only slot above it.
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ReadingProgress)
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
  }
}
