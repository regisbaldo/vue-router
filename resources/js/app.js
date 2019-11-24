import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './views/App.vue'
import Hello from './views/Hello.vue'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: "*",
            name: '404',
            component: NotFound,
        }
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});