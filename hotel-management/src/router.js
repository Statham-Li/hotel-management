import Vue from 'vue'
import Router from 'vue-router'
import BookRoom from './views/userPages/BookRoom.vue'
import Service from './views/userPages/Service.vue'
import OrderDetail from './views/userPages/OrderDetail.vue'
import Complaint from './views/userPages/Complaint.vue'
import RoomHandle from './views/managerPages/RoomHandle.vue'
import ServiceHandle from './views/managerPages/ServiceHandle.vue'
import UserIDHandle from './views/managerPages/UserIDHandle.vue'
import User from './views/User.vue'
import notFound from './views/notFound.vue'
import Register from './views/signPages/Register.vue'
import Login from './views/signPages/Login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/BookRoom',
      name: 'BookRoom',
      component: BookRoom
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    },
    // {
    //   path: '/OrderDetail',
    //   name: 'OrderDetail',
    //   component: OrderDetail
    // },
    {
      path: '/Complaint',
      name: 'Complaint',
      component: Complaint
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/RoomHandle',
      name: 'RoomHandle',
      component: RoomHandle
    },
    {
      path: '/ServiceHandle',
      name: 'ServiceHandle',
      component: ServiceHandle
    },
    {
      path: '/UserIDHandle',
      name: 'UserIDHandle',
      component: UserIDHandle
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: '/404',
      component: notFound
    }
  ]
})

// 路由守卫(非登录状态下不可访问除登录注册以外页面)
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if(to.path=='/login' || to.path=='/Register'){
    next()
  }else{
    isLogin?next():next('/login')
  }
})
export default router;
