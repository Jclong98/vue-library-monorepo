import { createApp } from 'vue'
import './style.css'

import { uiPlugin } from 'ui'
import 'ui/style.css'

import { createRouter, createWebHistory } from 'vue-router/auto'

import App from './App.vue'

const app = createApp(App)

app.use(uiPlugin)

const router = createRouter({
  history: createWebHistory(),
})

app.use(router)

app.mount('#app')
