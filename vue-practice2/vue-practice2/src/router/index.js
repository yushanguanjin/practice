import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlogs from '@/components/ShowBlogs'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'AddBlog',
        component: AddBlog
    }, {
        path: '/',
        name: 'ShowBlogs',
        component: ShowBlogs
    }],
    //去除#号
    mode: "history"
})