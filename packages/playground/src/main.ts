import { createApp } from 'vue'
import './style.css'
import { uiPlugin } from 'ui'
import 'ui/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(uiPlugin)

app.mount('#app')
