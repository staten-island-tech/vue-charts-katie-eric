import { createRouter, createWebHistory } from 'vue-router'
import BarView from '../views/BarView.vue'
import PieView from '../views/PieView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bar',
      name: 'bar',
      component: () => import('../views/BarView.vue')
    },
    {
      path: '/pie',
      name: 'pie',
      component: () => import('../views/PieView.vue')
    },
    {
      path: '/options',
      name: 'options',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OptionsView.vue')
    }
  ]
})

export default router
