import Vue from 'vue'
import Router from 'vue-router'
import classify from './views/Lclassify'
import Index from './views/Home'
import City from "./views/City"
import More from "./views/More"

//支付方式
import Lcheckstand from './views/Lcheckstand'
import Shop from './views/Shop'
import Noshop from './views/Noshop'
import Shopaddress from './components/shop/shopaddress'
import Region from './components/shop/region'
import Receivinggoods from './components/shop/receivinggoods'


// 我的开始
import Mine from './views/Mine'
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
import Forget from'./components/register/forget.vue'
// 我的结束
//jj
import Product from './views/Afruits.vue'
import Free from './views/Afree.vue'
import News from './views/Anews.vue'
import Food from './views/Afood.vue'
import Class from './views/Aclass.vue'
import Asearch from './views/Asearch'
//liqian
import details from './components/details/details'
import eat from './components/eat/eat'
import appraise from './components/appraise/appraise'
import member from './components/member/member'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/yiguo'
    },
    
    {
      path: '/L',
      component: classify
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
      path:'/asearch',
      component:Asearch
    },
    //wp
    {
      path: '/yiguo',
      component: Index
    },
    {
      path: '/City',
      component:City
    },
    {
      path: '/More',
      component:More
    },
    //wangdong
   {
    path: '/mine',
    component: Mine
  },

  {
    path: '/Register',
    component: Register,
  },
  {
    path: '/order',
    component: Order,
    meta:{requireAuth:true}
  },
  {
    path: '/orderAll',
    component: OrderAll,
    meta:{requireAuth:true}
  },
  {
    path: '/orderPay',
    component: OrderPay,
    meta:{requireAuth:true}
  },
  {
    path: '/orderGet',
    component: OrderGet,
    meta:{requireAuth:true}
  },
  {
    path: '/orderSay',
    component: OrderSay,
    meta:{requireAuth:true}
  },
  {
    path: '/Sett',
    component: SetPage
  },
  {
    path: '/acount',
    component: Acount,
    meta:{requireAuth:true}
  },
  {
    path: '/discount',
    component: Discount,
    meta:{requireAuth:true}
  },
  {
    path: '/discountAll',
    component: DiscountAll,
    meta:{requireAuth:true}
  },
  {
    path: '/discountUse',
    component: DiscountUse,
    meta:{requireAuth:true}
  },
  {
    path: '/discountOverdue',
    component: DiscountOverdue,
    meta:{requireAuth:true}
  },
  {
    path: '/helpcenter',
    component: Helpcenter,
    meta:{requireAuth:true}
  },
  {
    path: '/return',
    component: Return,
    meta:{requireAuth:true}
  },
  {
    path: '/addaddress',
    component: Addaddress,
    meta:{requireAuth:true}
  },
  {
    path: '/forget',
    component: Forget
  },


    {
      path: '/class',
      component: Class
    },
    //maxin
    {
      path: '/Lcheckstand',
      component: Lcheckstand,
    },
    {
      path: "/region",
      component: Region
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
    
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/receivinggoods",
      component: Receivinggoods
    },
    //liqian
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
      path:'/member',
      component:member
    },    
  ]
})