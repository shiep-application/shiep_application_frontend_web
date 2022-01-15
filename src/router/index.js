import Vue from 'vue'
import VueRouter from 'vue-router'
import grade from '../views/grade'
import index from '../views'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'grade',
    component: grade
  },
  {
    path: '/',
    name: 'index',
    component: index
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router