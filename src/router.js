import Vue from 'vue'
import Router from 'vue-router'
import classify from './views/Lclassify'
import Index from './views/Home'
import Shop from './views/Shop'
import Noshop from './views/Noshop'
import Shopaddress from './components/shop/shopaddress'

import details from './components/details/details'
import eat from './components/eat/eat'
import appraise from './components/appraise/appraise'


import Mine from './views/Mine'
//支付方式
import Lcheckstand from './views/Lcheckstand'
import Receivinggoods from './components/shop/receivinggoods'
import Region from './components/shop/region'
import Product from './views/Afruits.vue'
import Free from './views/Afree.vue'
import News from './views/Anews.vue'

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
      path: '/noshop',
      component: Noshop,
    },
    {
      path: "/shopaddress",
      component: Shopaddress,
      // children:{
      //   path:"组件名",
      //   component:渲染的组件名
      // }
    },
    {
      path: "/region",
      component: Region
    },
    {
      path: "/receivinggoods",
      component: Receivinggoods
    },
    {
      path: '/product',
      component: Product
    },
    {
      path: '/free',
      component: Free
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/food',
      component: Food
    },
    {
      path: '/City',
      component:City
    },
    {
      path: '/More',
      component:More
    },
    {
      path:'/details',
      component:details
    },
    {
      path:'/eat',
      component:eat
    },
    {
      path:'/appraise',
      component:appraise
    },
    {
      path: '/Mine',
      component:Mine
    },
  ]
})