import {createRouter , createWebHistory } from "vue-router";
import RouterComponent from "../components/RouterComponent.vue"

const routes = [
    {
        path:"/firstroute",
        name:"First Path",
        component:RouterComponent
    }
]

const router = createRouter({
    history: createWebHistory (process.env.Base_URl),
    routes
})

export default router