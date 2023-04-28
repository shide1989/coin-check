import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from '@/App.vue'
import { routes } from '@/router'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/styles/tailwind.css'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')
