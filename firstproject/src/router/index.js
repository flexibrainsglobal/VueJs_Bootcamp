import {createRouter , createWebHistory } from "vue-router";
import RouterComponent from "../components/RouterComponent.vue"
import FetchApi from "../components/apiFetch.vue"

const routes = [
    {
        path:"/firstroute",
        name:"First Path",
        component:RouterComponent
    },
    {
        path:"/fetchapi",
        name:"Fetch API",
        component:FetchApi
    }
]

const router = createRouter({
    history: createWebHistory (process.env.Base_URl),
    routes
})

export default router