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
<<<<<<< HEAD
import Food from './views/Afood.vue'

// 我的开始
import Mine from './views/Mine'
import Login from './views/Login'
import Register from './views/Register'
import Order from './views/Order'
import OrderAll from './components/order/orderAll.vue'
import OrderPay from './components/order/orderPay.vue'
import OrderGet from './components/order/orderGet.vue'
import OrderSay from './components/order/orderSay.vue'
import SetPage from './components/set/sett.vue'
import Acount from './components/acount/acount.vue'
import Discount from './views/Discount.vue'
import DiscountAll from './components/discount/discountAll.vue'
import DiscountUse from './components/discount/discountUse.vue'
import DiscountOverdue from './components/discount/discountOverdue.vue'
import Helpcenter from './components/helpcenter/helpcenter.vue'
import Return from './components/return/return.vue'
import Addaddress from'./views/Maddresspage.vue'
// 我的结束
=======

>>>>>>> 03ce1c4789de67a25aaeb4a612be86a64d409de3
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
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
<<<<<<< HEAD
    // 我的开始

    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/orderAll',
      component: OrderAll
    },
    {
      path: '/orderPay',
      component: OrderPay
    },
    {
      path: '/orderGet',
      component: OrderGet
    },
    {
      path: '/orderSay',
      component: OrderSay
    },
    {
      path: '/Sett',
      component: SetPage
    },
    {
      path: '/acount',
      component: Acount
    },
    {
      path: '/discount',
      component: Discount
    },
    {
      path: '/discountAll',
      component: DiscountAll
    },
    {
      path: '/discountUse',
      component: DiscountUse
    },
    {
      path: '/discountOverdue',
      component: DiscountOverdue
    },
    {
      path: '/helpcenter',
      component: Helpcenter
    },
    {
      path: '/return',
      component: Return
    },
    {
      path: '/addaddress',
      component: Addaddress
    }
    // 我的结束
=======
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
>>>>>>> 03ce1c4789de67a25aaeb4a612be86a64d409de3
  ]
})