// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueResource)
    //自定义指令

Vue.directive("theme", {
    bind(el, binding, vnode) {
        if (binding.value == "wide") {
            el.style.maxWidth = "1260px";
        } else if (binding.value == "narrow") {
            el.style.maxWidth == "560px"
        }
        if (binding.arg == 'column') {
            el.style.background == '#6677fc';
            el.style.padding == '#6677fc'
        }
    }
})



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router, // 注入到根实例中
    components: { App },
    template: '<App/>'
})