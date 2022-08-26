import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>   import(/* webpackChunkName: "log" */ "@/pages/login"),
  },
  {
    path: "/home",
    component: () =>   import(/* webpackChunkName: "home" */ "@/pages/home"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
