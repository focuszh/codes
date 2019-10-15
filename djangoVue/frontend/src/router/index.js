import Vue from 'vue'
import Router from 'vue-router'
import Demo from '../components/Demo'
import Layout from '../components/Layout'
import HelloWorld from '../components/HelloWorld'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [{
        path: '/demo',
        name: 'Demo',
        component: Demo
      }, {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
      }]

    }
  ]
})
