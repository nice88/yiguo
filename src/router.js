import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Index from './views/index'
import classify from './views/Lclassify'
=======
import Index from './views/Home'

>>>>>>> 0164da77a2710364fdea3d2bf3c4f984e7e8a527
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
    }
  ]
})
