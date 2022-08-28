import Vue from "vue";
import App from "./App.vue";
import router from "./utils/routerGuard";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/iconfont/iconfont.js'
import '@/assets/iconfont/iconfont.css'
import '@/assets/styles/iconfont.css'
import '@/assets/styles/common.less'



Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
