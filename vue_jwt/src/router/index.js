import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login"
import Error from "../views/Error";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/error',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-admin')
    next()
  } else {
    let admin = JSON.parse(window.localStorage.getItem('access-admin'))
    if (!admin) {
      next({path: '/login'})
    } else {
      //校验token合法性
      axios({
        url:'http://localhost:8080/checkToken',
        method:'get',
        headers:{
          token:admin.token
        }
      }).then((response) => {
        console.log(response.data)
        if(!response.data){
          console.log('校验失败')
          next({path: '/error'})
        }
      })
      next()
    }
  }
})

export default router
