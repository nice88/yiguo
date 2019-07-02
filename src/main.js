import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
Vue.prototype.axios =axios;
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import store from './stores'
Vue.use(Mint);
import Loading from './components/common/loading.vue'
Vue.component('Loading',Loading)
import setButton from './components/common/setButton.vue'
Vue.component('setButton',setButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // store,//挂载store管理对象
  render: h => h(App)
}).$mount('#app')

