import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import axios from "axios"
import store from './stores'
Vue.prototype.axios =axios;
=======

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import Loading from './components/common/loading.vue'
Vue.component('Loading',Loading)

>>>>>>> fa6135b36eef0c26d8371aaf3b61c41f489d849b
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
