import Vue from 'vue'
import Router from 'vue-router'
import classify from './views/Lclassify'
import Index from './views/Home'
import Shop from './views/Shop'
import Noshop from './views/Noshop'
import Shopaddress from './components/shop/shopaddress'
import Receivinggoods from './components/shop/receivinggoods'
import Region from './components/shop/region'
import Product from './views/Afruits.vue'
// 我的
import Mine from './views/Mine'
import Login from './views/Login'
import Register from './views/Register'
import Order from './views/Order'
import OrderAll from './components/order/orderAll.vue'
import OrderPay from './components/order/orderPay.vue'
import OrderGet from './components/order/orderGet.vue'
import OrderSay from './components/order/orderSay.vue'
import Set from './components/set/set.vue'
import Acount from './components/acount/acount.vue'
import Discount from './views/Discount.vue'
import DiscountAll from './components/discount/discountAll.vue'
import DiscountUse from './components/discount/discountUse.vue'
import DiscountOverdue from './components/discount/discountOverdue.vue'
import Helpcenter from './components/helpcenter/helpcenter.vue'
import Return from './components/return/return.vue'

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
      component: Shopaddress
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

// 我的

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
      path: '/set',
      component: Set
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
    }
  ]
})