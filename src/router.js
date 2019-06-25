import Vue from 'vue'
import Router from 'vue-router'
import classify from './views/Lclassify'

import Index from './views/Home'
<<<<<<< HEAD
import City from "./components/home/city"
=======


>>>>>>> fa6135b36eef0c26d8371aaf3b61c41f489d849b
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
<<<<<<< HEAD
   
    {
      path: '/City',
      component:City
=======
    {
      path: '/L',
      component: classify
>>>>>>> fa6135b36eef0c26d8371aaf3b61c41f489d849b
    }
  ]
})
