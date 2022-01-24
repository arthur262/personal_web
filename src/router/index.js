import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../views/CV.vue'
import Photo from '../views/Photo.vue'
import Contact from '../views/Contact.vue'
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
    path: '/Contact',
    name: 'Contact',
    component: Contact
    },



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
