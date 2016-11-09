import Vue from 'vue'
import Mint from 'mint-ui';
import VueHttp from 'vue-resource'
import VueRouter from 'vue-router'
import RouterConfig from "../config/RouterConfig" 
import ApiConfig from "../config/api-config"
import App from './App'
import 'mint-ui/lib/style.css';
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
Vue.prototype.extendApi=ApiConfig
