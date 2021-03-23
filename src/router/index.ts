import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import components from "./modules/components"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        meta: {
            title: "首页",
            keepAlive: true
        },
        component: () => import("../views/Home/index.vue")
    },
    components,
    {
        path: "/login",
        name: "Login",
        meta: {
            title: "登录",
            keepAlive: true
        },
        component: () => import("../views/Login/index.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: () => import("../views/404/index.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;