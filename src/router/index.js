import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        component: () =>   import(/* webpackChunkName: "log" */ "@/pages/login"),
    },
    {
        path: "/",
        component: () =>   import(/* webpackChunkName: "home" */ "@/pages/home"),
        children:[
            {
                path:'welcome',
                component: () =>   import(/* webpackChunkName: "welcome" */ "@/pages/home/Welcome"),

            },
            {
                path:'studentproduct',
                component: () =>   import(/* webpackChunkName: "welcome" */ "@/pages/home/StudentManager/StudentProduct"),

            }
        ]
    },
];

const router = new VueRouter({
  routes,
});

export default router;
