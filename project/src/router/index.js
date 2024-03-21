import { createRouter, createWebHistory } from 'vue-router'
import BarView from '../views/BarView.vue'
import PieView from '../views/PieView.vue'
import OptionsView from '../views/OptionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bar',
      name: 'bar',
      component: BarView
    },
    {
      path: '/',
      name: 'pie',
      component: PieView
    },
    {
      path: '/options',
      name: 'options',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: OptionsView
    }
  ]
})

export default router
