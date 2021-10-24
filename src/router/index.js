import Vue from 'vue'
import VueRouter from 'vue-router'
import RepoDashboard from '../views/RepoDashboard.vue'
import RepoDetail from '../views/RepoDetail.vue'
import AboutPage from '../views/AboutPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RepoDashboard',
    component: RepoDashboard
  },
  {
    path: '/repo/:repoName',
    name: 'RepoDetail',
    component: RepoDetail
  },

  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },

  // {
  //   path: '*',
  //   name: 'RepoDashboard',
  //   component: RepoDashboard
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
