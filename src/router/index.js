import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/LoginView.vue'
import FoodProviders from '../views/FoodProviders.vue'
import MainPage from '../views/MainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/admin',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin/menu',
    name: 'menu',
    component: () => import( '../views/MenuView.vue')
  },
  {
    path: '/admin/providers',
    name: 'providers',
    component: FoodProviders
  }
]

const router = new VueRouter({
  routes
})

export default router
