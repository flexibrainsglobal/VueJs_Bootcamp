import {createRouter , createWebHistory } from "vue-router";
import RouterComponent from "../components/RouterComponent.vue"
import FetchApi from "../components/apiFetch.vue"
import Datatable from "../components/datatable.vue"
import Chart from "../components/Chart.vue"
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
    }
]

const router = createRouter({
    history: createWebHistory (process.env.Base_URl),
    routes
})

export default router