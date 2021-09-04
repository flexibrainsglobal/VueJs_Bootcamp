import {createRouter , createWebHistory } from "vue-router";
import RouterComponent from "../components/RouterComponent.vue"
import FetchApi from "../components/apiFetch.vue"
import Datatable from "../components/datatable.vue"
import Chart from "../components/Chart.vue"
import Vuex from "../components/vuex.vue"
import Watchers from "../components/watchers.vue"
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
    },
    {
        path:"/datatable",
        name:"Datatable",
        component:Datatable
    },
    {
        path:"/chart",
        name:"Chart",
        component:Chart
    },
    {
        path:"/vuex",
        name:"Vuex",
        component:Vuex
    },
    {
        path:"/watchers",
        name:"Watchers",
        component:Watchers
    }
]

const router = createRouter({
    history: createWebHistory (process.env.Base_URl),
    routes
})

export default router