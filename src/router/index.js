import Vue from 'vue'
import Router from 'vue-router'
import BlogAdminPanel from '../components/BlogAdminPanel'
import addNew from '../components/addNew'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BlogAdminPanel',
      component: BlogAdminPanel
    },
    {
      path: '/add',
      name: 'addNew',
      component: addNew
    }
  ]
})
