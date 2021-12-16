import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../views/Home.vue'
import Photo from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'standard',
    redirect:'/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/CV',
    name: 'CV',
    component: CV
  },
  {
    path: '/Photo',
    name: 'Photo',
    component: Photo
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
