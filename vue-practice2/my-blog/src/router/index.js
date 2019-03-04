import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlogs from '@/components/ShowBlogs'
import User from '@/components/User'

// 要告诉 vue 使用 vueRouter
Vue.use(Router)

const routes = [{
    path: '/AddBlog',
    name: 'AddBlog',
    component: AddBlog
}, {
    path: '/ShowBlogs',
    name: 'ShowBlogs',
    component: ShowBlogs
},
 /*新增user路径，配置了动态的id*/
 {
    path: "/User/:id",
    component: User
},
 // 重定向
 {
    path: '/', 
    redirect: '/AddBlog' 
}
];
export default new Router({
    routes:routes,
    //去除#号
    mode: "history"
})