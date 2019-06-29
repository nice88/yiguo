import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Observer from "./Observer";
Vue.prototype.Observer = Observer;

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import Loading from './components/common/loading.vue'
Vue.component('Loading', Loading)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')