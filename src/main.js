import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Observer from "./Observer";
Vue.prototype.Observer = Observer
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
<<<<<<< HEAD

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
=======
Vue.use(Mint);
import Loading from './components/common/loading.vue'
Vue.component('Loading',Loading);
Vue.config.productionTip = false;
Vue.component('Loading', Loading);
Vue.config.productionTip = false


new Vue({
  router,
>>>>>>> 1aa1bfb95d2f85fa91202fa8d5e1ee3a66649bb1
  render: h => h(App)
}).$mount('#app')