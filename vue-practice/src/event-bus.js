//非全局事件总线
//创建事件总线并将其导出，以便其它模块可以使用或者监听它
import Vue from 'vue'
export const EventBus = new Vue()

