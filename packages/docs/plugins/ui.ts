import { uiPlugin } from 'ui'

import 'ui/dist/style.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(uiPlugin)
})