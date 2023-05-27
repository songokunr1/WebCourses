import { createRouter, createWebHistory } from 'vue-router'
import Courses from '../views/Courses.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'
import Portfolio from '../views/Portfolio.vue'
import Consultation from '../views/Consultation.vue'
import Form from '../views/Form.vue'
import PythonPodstawy from '../views/PythonPodstawy.vue'
import ThankYou from "@/views/ThankYou.vue";

const routes = [
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/',
    name: 'Contact2',
    component: Contact
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/consultation',
    name: 'Consultation',
    component: Consultation
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/PythonPodstawy',
    name: 'PythonPodstawy',
    component: PythonPodstawy
  },
  {
    path: "/thankyou",
    name: 'thankyou!',
    component: ThankYou,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
