import DefaultTheme from 'vitepress/theme'
import CivilSuitNavigator from './components/CivilSuitNavigator.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Used on the home page; registered globally so any provision page can
    // drop the navigator in later without a per-page import.
    app.component('CivilSuitNavigator', CivilSuitNavigator)
  }
}
