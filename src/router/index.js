import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Index from '@/views/index'
import Check from '@/views/Check'
import CheckM from '@/views/checkM'
import RegisterInfo from '@/views/registerInfo'
import Guidance from  '@/views/guidance'

Vue.use(Router)

/* eslint-disable */
export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name: 'home',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/check',
          name: 'check',
          component: Check
        },
        {
          path:'/checkM',
          name:'checkM',
          component:CheckM
        },
        {
          path:'/registerInfo',
          name: 'registerInfo',
          component: RegisterInfo
        },
        {
          path: '/guidance',
          name: 'guidance',
          component: Guidance

        }
      ]

    }
    
  ]
})
