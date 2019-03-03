<template>
  <div id="app">
    <ul>
      <li>  <router-link to="/">首页</router-link></li>
      <li><router-link to="/AddBlog">添加博客</router-link></li>
      <li> <router-link to="/ShowBlogs">展示博客</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from '@/components/AddBlog'
import ShowBlogs from '@/components/ShowBlogs'

export default {
  name: 'App',
  components:{
    AddBlog,ShowBlogs
  }
}
</script>

<style>
ul:after{
  content:"";
  height: 0;
  clear: both;
}
li{
  float: left;
  list-style: none;
  margin-left: 20px;
}
</style>
