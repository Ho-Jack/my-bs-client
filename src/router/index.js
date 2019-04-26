import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import personal from '../components/personal'
import publish from '../components/publish'
import tucao from '../components/tucao'
import login from '../components/login'
import publicc from '../components/publicc'
import  axiosDemo from '../components/test/axiosDemo'
import apply from '../components/apply'
import doPublic from '../components/doPublic'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        show: true
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      meta: {
        show: true
      }
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish,
      meta: {
        show: true
      }
    },
    {
      path: '/tucao',
      name: 'tucao',
      component: tucao,
      meta: {
        show: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        show: false
      }
    },
    {
      path: '/publicc/:id',
      name: 'publicc',
      component: publicc,
    },
    {
      path: '/axiosDemo',
      name: 'axiosDemo',
      component: axiosDemo,
    },
    {
      path: '/apply',
      name: 'apply',
      component: apply,
    },
    {
      path: '/doPublic',
      name: 'doPublic',
      component: doPublic,
    },
  ]
})
