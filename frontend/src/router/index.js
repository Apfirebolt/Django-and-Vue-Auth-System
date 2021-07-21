import Vue from 'vue';
import VueRouter from 'vue-router';
import EmptyLayout from '../layouts/empty.vue';
import DashboardLayout from '../layouts/dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: EmptyLayout,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/home.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/auth/login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../views/auth/register.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('../views/dashboard.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
