import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { VueQueryPlugin } from '@tanstack/vue-query'
import Store from '@/Store/index'
import Skeleton from '@brayamvalero/vue3-skeleton'
import '@brayamvalero/vue3-skeleton/dist/style.css'

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)
app.use(Skeleton)
app.use(Store)
app.mount('#app')
