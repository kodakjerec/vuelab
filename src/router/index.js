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
      // route level code-splitting 動態載入會切檔案打包
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About')
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import(/* webpackChunkName: "practice" */ '@/views/Practice')
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import(/* webpackChunkName: "practice" */ '@/views/Counter')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "practice" */ '@/views/Search')
    },
    {
      path: '/filterDemo',
      name: 'filterDemo',
      component: () => import(/* webpackChunkName: "practice" */ '@/views/FilterDemo')
    },
    {
      path: '/listDemo',
      name: 'listDemo',
      component: () => import(/* webpackChunkName: "practice" */ '@/views/ListDemo')
    },
    {
      path: '/modalDemo',
      name: 'modalDemo',
      component: () => import(/* webpackChunkName: "practice" */ '@/views/ModalDemo')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "practice" */ '@/views/Register')
    },
    {
      path: '/ajaxDemo',
      name: 'ajaxDemo',
      component: () => import(/* webpackChunkName: "practice" */ '@/views/AjaxDemo')
    },
    {
      path: '/refDemo',
      name: 'refDemo',
      component: () => import(/* webpackChunkName: "practice" */ '@/views/RefDemo')
    },
    {
      path: '/carouselDemo',
      name: 'carouselDemo',
      component: () => import(/* webpackChunkName: "practice" */ '@/views/CarouselDemo')
    },
    {
      path: '/counterWithState',
      name: 'counterWithState',
      component: () => import(/* webpackChunkName: "practice" */'@/views/CounterWithState')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "practice" */'@/views/Test')
    }
  ]
})
