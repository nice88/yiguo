import Vue from 'vue'
import Router from 'vue-router'
import classify from './views/Lclassify'
import Index from './views/Home'
import Product from './views/Afruits.vue'
import Afree from './views/Afree.vue'
import Shop from './views/Shop'
import Shopaddress from './components/shop/shopaddress'
//支付方式
import Lcheckstand from './views/Lcheckstand'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/yiguo'
    },
    {
      path: '/yiguo',
      component: Index
    },
    {
      path: '/product',
      component: Product
    },
    {
      path: '/afree',
      component: Afree
    },
    {

      path: '/L',
      component: classify
    },
    {
      path: '/shop',
      component: Shop,
    },
    {
      path: "/shopaddress",
      component: Shopaddress
    },
    {
      path: "/checkstand",
      component: Lcheckstand
    }
  ]
})