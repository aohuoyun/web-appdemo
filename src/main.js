// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'mint-ui/lib/style.css';
import App from './App'
import Mint from 'mint-ui';
import VueHttp from 'vue-resource'
import VueRouter from 'vue-router'
import RouterConfig from "../config/RouterConfig" 
import ApiConfig from "../config/api-config"

Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(VueHttp);
var router = new VueRouter({
    linkActiveClass: "active",
    routes : RouterConfig
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
window.router=router;
window.prototype.extendApi=ApiConfig