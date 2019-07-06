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
//路由守卫
router.beforeEach((to, from, next) => {
  next()
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if(localStorage.getItem('token')){
      next()
    }else{
      next({path:'/register'});
    }
  }
});
new Vue({
  router,
  store,
  // store,//挂载store管理对象
  render: h => h(App)
}).$mount('#app')

