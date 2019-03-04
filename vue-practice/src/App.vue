<template>
  <div id="app">
    <ul>
       <!-- router-link 定义点击后导航到哪个路径下 -->
      <li><router-link to="/">Home</router-link></li>
       <li><router-link to="/helloworld">helloworld</router-link></li>
       <li><router-link to="/element">element</router-link></li>
    </ul>
     <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
 
  data() {
    return {

    }
  },
  methods:{
   
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
