import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../views/CV.vue'
import Landscape from '../views/Landscape.vue'
import Sky from '../views/Sky.vue'
import Travel from '../views/Travel.vue'
import Photo from '../views/Photo.vue'
const routes = [
  {
    path: '/',
    name: 'standard',
    redirect:'/Home',
    component: Home
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
  {
    path: '/Photo/Landscape',
    name: 'Landscape',
    component: Landscape
    },
    {
    path: '/Photo/Sky',
    name: 'Sky',
    component: Sky
    },
    {
    path: '/Photo/Travel',
    name: 'Travel',
    component: Travel
  },



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
