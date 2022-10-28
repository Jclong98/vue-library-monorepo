import { createApp } from 'vue'
import './style.css'

import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

import App from './App.vue'

import { uiPlugin } from './'

const app = createApp(App)

app.use(uiPlugin)

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: routes => setupLayouts(routes),

})

app.use(router)

app.mount('#app')
