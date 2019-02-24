<template>
  <div id="home">
    <app-headers v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-headers>
    <!-- users是标签，组件名字 -->
     <users v-bind:users="users"></users>
      <div>子组件传过来的内容：{{msg}}</div>
      <emit :count="count" :list="list" v-on:headCallBack="headCall"></emit> <!--通过v-on绑定方法，headCallBack为子组件中$emit()中第一个参数，headCall为回调方法，参数就传入这个方法中，看下面的方法-->
     <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
//局部注册组件
import Users from './Users'
import emit from './emit';

var data = {
  list: ['java', 'html', 'css', 'js']
};

export default {
  name: 'home',
  //注册组件                                                                                                                                                     
  components: {
    "users":Users,
    "emit":emit,
    //不能用header,否则与header标签冲突
    "app-headers":Header,
    "app-footer":Footer
  },
  data() {
    return {
      //数据：users
      users: [
      
      ],
      title:"传递的是一个值,(Number String Boolean)",
      count: 0,
      list: data.list,
      msg: ''
    };
  },
  methods:{
    addCount:function() {
      let _this = this;
      setInterval(function () { _this.count++; }, 1000);
    },
     headCall: function (msg) { //回调方法，接收子组件传的参数
      this.msg = msg;
    },
    updateTitle(title) {
      this.title = title;
    }

  },
  
  created:function() {
      this.$http.get("http://jsonplaceholder.typicode.com/users").then((data) =>{
          this.users = data.body;
      })
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
