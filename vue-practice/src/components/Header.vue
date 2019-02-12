<template>
  <header class="header">
    <h1 v-on:click="changeTitle">{{ title1 }}:{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: "app-header",
  props: {
    type: String,
    required: true
  },
  data() {
    return {
      title1: "Vue Demo"
    };
  },
  methods: {
    changeTitle: function() {
        this.title = "changed";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #ff0000;
  padding: 20px;
}
</style>
