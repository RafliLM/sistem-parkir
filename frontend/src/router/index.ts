import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect : '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/zone',
    name: 'zone',
    component: () => import('../views/ZoneView.vue')
  },
  {
    path: '/cctv',
    name: 'cctv',
    component: () => import('../views/CctvView.vue')
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('../views/ReportView.vue')
  }
]

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
  routes
})

export default router
