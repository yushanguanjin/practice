import Vue from 'vue'
//全局事件总线
var EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
})