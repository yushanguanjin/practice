<template>
  <div v-theme:column="'wide'" id="show-blogs">
      <h1>博客总览</h1>
      <div v-for="blog in blogs" :key="blog" class="single-blog">
          <h2 v-rainbow>{{blog.title}}</h2>
          <article>
              {{blog.body}}
          </article>
      </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data:function() {
      return {
          blogs:[]
      }
  },
  created:function() {
      this.$http.get("http://jsonplaceholder.typicode.com/posts").then(function(data) {
          //console.log(data);
          this.blogs = data.body.slice(0,10);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    /* background: #ff0000; */
}
</style>
