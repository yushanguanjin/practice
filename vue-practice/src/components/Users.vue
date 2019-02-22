<template>
  <div class="users">
    <ul>
      <li v-for="(user,index) in users" :key="index" v-on:click="user.show = !user.show">
        <p>{{user.name}}</p>
        <p v-show="user.show">{{user.position}}</p>
      </li>
    </ul>
    <button v-on:click="deleteUser">删除</button>
  </div>
</template>

<script>
export default {
  name: "Users",
  //不太建议这样写：props:["users"],

  /*
  传值: String Number Boolean
  如果是传值，改变一个地方的数据，那么跟引用相关的地方都发生变化
  传引用: Array Object
  如果是传值，只改变当前的数据
  */

  //属性传值,父传子
  //子级props属性声明时，使用小驼峰或者中划线写法都可以,而子级模板使用从父级传来的变量时，需要使用对应的小驼峰写法
  props:{
    //声名users，引用父组件的数据:users
    users:{
      type:Array,
      required:true
    }
  },
  methods:{
    deleteUser:function() {
      //出栈
      this.users.pop();
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul,li{
  display: flex;
  list-style: none;
}
li{
 flex: 1;
}
p{
  margin: 0;
  height: 20px;
  color: #4c258b;
  text-align: center;
}
</style>
