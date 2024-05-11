import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import persistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()
pinia.use(persistedstate)

app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
