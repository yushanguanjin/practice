<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
       <li><router-link to="/helloworld">helloworld</router-link></li>
    </ul>
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
