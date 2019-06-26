import Vue from 'vue'
import Router from 'vue-router'
import classify from './views/Lclassify'

import Index from './views/Home'

import City from "./components/home/city"



Vue.use(Router)

export default new Router({
  mode: 'hash',
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
      path: '/City',
      component:City
    },
    {
      path: '/L',
      component: classify
    }
  ]
})
