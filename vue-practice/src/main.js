// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select } from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Element from 'element-ui'


Vue.config.productionTip = false
Vue.use(ElementUI);

//使用中间件
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.use(Button)
Vue.use(Select)
    //配置路由
const router = new VueRouter({
    routes: [
        { path: "/", component: Home },
        { path: "/helloworld", component: HelloWorld }
    ],
    //去除#号
    mode: "history"
})

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    components: { App },
    template: '<App/>',
    render: h => h(App)
})