// entrypoint for the vite playground

import { createApp } from 'vue'
import App from './App.vue'
import { uiPlugin } from './'

const app = createApp(App)

app.use(uiPlugin)

app.mount('#app')
