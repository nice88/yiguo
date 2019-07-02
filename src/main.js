import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import stores from './stores'
Vue.prototype.axios =axios;
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import Loading from './components/common/loading.vue'
Vue.component('Loading',Loading)

Vue.config.productionTip = false
//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store=new Vuex.Store({
  state:{//this.$store.state.***
    car:[] //将购物车中的商品数据，用一个数组存储起来
    //{id:商品的id,count:要购买的数量，price:商品的价格，selected:false}
  },
  mutations:{//this.$store.commit.***
  },
  getters:{//this.$store.getters.***
  }

})
new Vue({
  router,
  stores,
  store,//挂载store管理对象
  render: h => h(App)
}).$mount('#app')

