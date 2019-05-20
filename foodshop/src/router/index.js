/*
  路由模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/*import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'*/

// 路由组件懒加载
const Msite = () => import('../pages/Msite/Msite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

// 全局注册Vue-router组件
Vue.use(VueRouter)

//全局路由改变前钩子
router.beforeEach((to,from,next)=>{
  window.document.title = to.meta.title
})
// 配置路由表并导出
export default new VueRouter({
  //  去掉地址中的哈希#
  mode: 'history',
  //  所有路由
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      // 此时的Msite等都是返回路由组件的函数，只有请求对应的路由路径时(第一次)才会执行此函数并加载路由组件
      // 标识此路由是否显示FooterGuide
      meta: {
        showFooter: true,
        title:'首页'
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true,
        title:'搜索'
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true,
        title:'订单'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true,
        title:'个人'
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title:'登录'
      }
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
