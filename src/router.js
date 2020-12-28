import Vue from 'vue'
import VueRouter from "vue-router"
import HomePage from '@/Views/Homepage'
import Portfolio from '@/Views/Portfolio'
import Project from '@/Views/Project'
import PageNotFound from '@/Views/PageNotFound'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/portfolio/:id',
    name: 'Project',
    component: Project,
  },
  {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
