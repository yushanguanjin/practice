import Vue from 'vue'
import Router from 'vue-router'
import Accept from './components/Accept'
import PleaseClickMe from './components/PleaseClickMe'

Vue.use(Router)



var routes = [{
            path: "./Accept",
            component: Accept
        },
        {
            path: "/PleaseClickMe",
            component: PleaseClickMe
        }
];


export default new Router({
    routes: routes,
    //去除#号
    mode: "history"
})