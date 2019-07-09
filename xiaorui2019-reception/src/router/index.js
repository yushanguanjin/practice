import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


const index = resolve => {
    require.ensure(['../page/index.vue'], () => {
        resolve(require('../page/index.vue'));
    });
}

const car = resolve => {
    require.ensure(['../page/car.vue'], () => {
        resolve(require('../page/car.vue'));
    });
}
const sort = resolve => {
    require.ensure(['../page/sort.vue'], () => {
        resolve(require('../page/sort.vue'));
    });
}
const user = resolve => {
    require.ensure(['../page/user.vue'], () => {
        resolve(require('../page/user.vue'));
    });
}
const list = resolve => {
    require.ensure(['../page/list.vue'], () => {
        resolve(require('../page/list.vue'));
    });
}
const detail = resolve => {
    require.ensure(['../page/detail.vue'], () => {
        resolve(require('../page/detail.vue'));
    });
}
const order = resolve => {
    require.ensure(['../page/order.vue'], () => {
        resolve(require('../page/order.vue'));
    });
}
const order_list = resolve => {
    require.ensure(['../page/order_list.vue'], () => {
        resolve(require('../page/order_list.vue'));
    });
}
const login = resolve => {
    require.ensure(['../page/login.vue'], () => {
        resolve(require('../page/login.vue'));
    });
}
const regist = resolve => {
    require.ensure(['../page/regist.vue'], () => {
        resolve(require('../page/regist.vue'));
    });
}
const adress = resolve => {
    require.ensure(['../page/adress.vue'], () => {
        resolve(require('../page/adress.vue'));
    });
}
const new_adress = resolve => {
    require.ensure(['../page/new_adress.vue'], () => {
        resolve(require('../page/new_adress.vue'));
    });
}
const weixin = resolve => {
    require.ensure(['../page/weixin.vue'], () => {
        resolve(require('../page/weixin.vue'));
    });
}
const care = resolve => {
    require.ensure(['../page/care.vue'], () => {
        resolve(require('../page/care.vue'));
    });
}
const projectTask = resolve => {
    require.ensure(['../page/projectTask/projectTask.vue'], () => {
        resolve(require('../page/projectTask/projectTask.vue'));
    });
}


const assetsLists = resolve => {
    require.ensure(['../page/assetsLists/assetsLists.vue'], () => {
        resolve(require('../page/assetsLists/assetsLists.vue'));
    });
}
const routes = [{
    path: '/index',
    name: 'index',
    component: index
}, {
    path: '/',
    name: 'index',
    component: index
}, {
    path: '/car',
    name: 'car',
    component: car
}, {
    path: '/sort',
    name: 'sort',
    component: sort
}, {
    path: '/user',
    name: 'user',
    component: user
}, {
    path: '/list',
    name: 'list',
    component: list
}, {
    path: '/index/goods',
    name: 'detail',
    component: detail
}, {
    path: '/order',
    name: 'order',
    component: order
}, {
    path: '/order_list',
    name: 'order_list',
    component: order_list
}, {
    path: '/login',
    name: 'login',
    component: login
}, {
    path: '/regist',
    name: 'regist',
    component: regist
}, {
    path: '/adress',
    name: 'adress',
    component: adress
}, {
    path: '/new_adress',
    name: 'new_adress',
    component: new_adress
}, {
    path: '/pay/weixin',
    name: 'weixin',
    component: weixin
}, {
    path: '/care',
    name: 'care',
    component: care
}, {
    path: '/projectTask/projectTask',
    name: 'projectTask',
    component: projectTask
}, {
    path: '/assetsLists/assetsLists',
    name: 'assetsLists',
    component: assetsLists
}];

export default new Router({
    mode: 'history',
    routes
});