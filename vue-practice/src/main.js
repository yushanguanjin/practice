// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import EventBus from './EventBus'




Vue.config.productionTip = false
Vue.use(ElementUI);

//使用中间件
Vue.use(VueRouter)
Vue.use(VueResource)


    

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    render: h => h(App)
})