import { createRouter, createWebHistory} from "vue-router";

const ROUTE_NAMES = {
    home: 'home',
    a: '1'
}

const routes = [
    { path: '/', component: () => import('../pages/home/HomePage.vue'), name: ROUTE_NAMES.home },
    { path: '/1', component: () => import('../pages/111.vue'), name: ROUTE_NAMES.a },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
