import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MejoresValorados from '../views/MejoresValorados.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Populares',
    name: 'Home',
    component: Home
  },
  {
    path: '/MejoresValorados',
    name: 'MejoresValorados',
    component: MejoresValorados
  },

  {
    path: '/MejoresValorados/:id',
    name: 'DescripcionPeliculas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DescripcionPeliculas" */ '../components/DescripcionPeliculas.vue')
  }
  ,

  {
    path: '/Populares/:id',
    name: 'DescripcionPeliculas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DescripcionPeliculas" */ '../components/DescripcionPeliculas.vue')
  }
  ,

  {
    path: '/*',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
