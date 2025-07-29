import PageFour from '@/pages/pageFout.vue';
import PageOne from '@/pages/pageOne.vue';
import PageThree from '@/pages/pageThree.vue';
import PageTwo from '@/pages/pageTwo.vue';
import { createWebHistory, createRouter } from 'vue-router'

 
const routes = [
  { path: '/', component: PageOne },
  { path: '/cart', component: PageTwo },
  { path: '/category/:slug', component: PageThree },
  { path: '/success', component:PageFour },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;