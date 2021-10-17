import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
// const Presale = () => import('../views/Presale')

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  linkActiveClass: "open active",
  base: process.env.BASE_URL,
  routes,
});

export default router;
