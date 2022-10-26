import { createApp } from 'vue'

import App from './App.vue'

import { uiPlugin } from '.'
import './style.css'

const app = createApp(App)

app.use(uiPlugin)

app.mount('#app')
