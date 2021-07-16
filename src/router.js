import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            component: Home
        },
        {
            path: '/Taks',
            component: () => import('../src/views/Tasks.vue')
        }
    ]
})