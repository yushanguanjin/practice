<template>
  <div id="app">
    <app-headers v-bind:title="title"></app-headers>
    <!-- users是标签，组件名字 -->
     <users v-bind:users="users"></users>
      <users v-bind:users="users"></users>
     <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
//局部注册组件
import Users from './components/Users'

export default {
  name: 'App',
  components: {
    "users":Users,
    //不能用header,否则与header标签冲突
    "app-headers":Header,
    "app-footer":Footer
  },
  data() {
    return {
      users: [
        { name: "a", position: "web开发", show: false },
        { name: "b", position: "web开发", show: false },
        { name: "c", position: "web开发", show: false },
        { name: "d", position: "web开发", show: false }
      ],
      title:"传递的是一个值,(Number String Boolean)"
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
