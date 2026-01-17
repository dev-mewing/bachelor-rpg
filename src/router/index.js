// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { usePlayerStore } from '../stores/player'

import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import Quests from '../pages/Quests.vue'
import Agenda from '../pages/Agenda.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
    name: 'home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/quests',
    name: 'quests',
    component: Quests,
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: Agenda,
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const player = usePlayerStore()

  if (to.meta.requiresAuth && !player.name) {
    next('/login')
  } else {
    next()
  }
})
