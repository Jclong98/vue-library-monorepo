import { uiPlugin } from "ui"

import "ui/style.css"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(uiPlugin)
})
