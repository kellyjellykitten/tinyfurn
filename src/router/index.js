import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/chairs',
      name: 'chairs',
      component: () => import('../views/Chairs.vue')
    },
    {
      path: '/sofas',
      name: 'sofas',
      component: () => import('../views/Sofas.vue')
    },
    {
      path: '/beds',
      name: 'beds',
      component: () => import('../views/Beds.vue')
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('../views/Tables.vue')
    },
    {
      path: '/bookcases',
      name: 'bookcases',
      component: () => import('../views/Bookcases.vue')
    },
    {
      path: '/outdoor',
      name: 'outdoor',
      component: () => import('../views/Outdoor.vue')
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import('../views/Sales.vue')
    }
  ]
})

export default router
