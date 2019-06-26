import Vue from 'vue'
import Router from 'vue-router'
import classify from './views/Lclassify'
import Index from './views/Home'
<<<<<<< HEAD
import Product from './views/Afruits.vue'
=======
import Shop from './views/Shop'
import Shopaddress from './components/shop/shopaddress'
>>>>>>> 481af6cf484092995fce427ccf5581cc49212c57

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
<<<<<<< HEAD
      path: '/product',
      component: Product
=======
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
>>>>>>> 481af6cf484092995fce427ccf5581cc49212c57
    }

  ]
})