<template>
  <footer class="footer">
    <p>{{ copyright }} {{title}}</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
   props:{
      type:String,
      required:true
  },
  data () {
    return {
      copyright: 'vue copyright'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
    background: #270942;
    padding: 10px;
}
</style>
