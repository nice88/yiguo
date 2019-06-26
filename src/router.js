import Vue from 'vue'
import Router from 'vue-router'
import classify from './views/Lclassify'
import Index from './views/Home'
import Shop from './views/Shop'
import Shopaddress from './components/shop/shopaddress'

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
    }

  ]
})