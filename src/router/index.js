
import { createRouter, createWebHashHistory, } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            { path: '/', redirect: '/home' },
            { path: '/home', component: Home },
            //     { path: '/daily', component: Daliy },
            //     { path: '/random', component: Random },
        ]
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})