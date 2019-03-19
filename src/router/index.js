import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About')
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import('@/views/Practice')
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('@/views/Counter')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search')
    },
    {
      path: '/filterDemo',
      name: 'filterDemo',
      component: () => import('@/views/FilterDemo')
    },
    {
      path: '/listDemo',
      name: 'listDemo',
      component: () => import('@/views/ListDemo')
    },
    {
      path: '/modalDemo',
      name: 'modalDemo',
      component: () => import('@/views/ModalDemo')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register')
    },
    {
      path: '/ajaxDemo',
      name: 'ajaxDemo',
      component: () => import('@/views/AjaxDemo')
    },
    {
      path: '/refDemo',
      name: 'refDemo',
      component: () => import('@/views/RefDemo')
    },
    {
      path: '/carouselDemo',
      name: 'carouselDemo',
      component: () => import('@/views/CarouselDemo')
    },
    {
      path: '/counterWithState',
      name: 'counterWithState',
      component: () => import('@/views/CounterWithState')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/Test')
    }
  ]
})
