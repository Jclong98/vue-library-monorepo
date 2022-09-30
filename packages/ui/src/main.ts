// entrypoint for the vite playground

import { createApp } from "vue"
import { uiPlugin } from "./"
import App from "./App.vue"

const app = createApp(App)

app.use(uiPlugin)

app.mount("#app")
