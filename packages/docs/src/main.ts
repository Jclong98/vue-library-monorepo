import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"

import { uiPlugin } from "ui"
import "ui/style.css"

import { createRouter, createWebHistory } from "vue-router/auto"

const app = createApp(App)

app.use(uiPlugin)

const router = createRouter({
  history: createWebHistory(),
})

app.use(router)

app.mount("#app")
