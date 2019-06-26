import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Home'
import Product from './views/Afruits.vue'

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
      path: '/product',
      component: Product
    }
  ]
})
