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
      title1: "Vue Demo",
      title: ""
    };
  },
  methods: {
    changeTitle: function() {
      //this.title = "changed";
      this.$emit("titleChanged", "子向父组件传值"); //第一个参数是父组件中v-on绑定的自定义回调方法，第二个参数为传递的参数
    }
  },
  //生命周期
  // beforeCreate: function() {
  //   alert("组件实例化之前执行的函数");
  // },
  // created: function() {
  //   alert("组件实例化完毕，但页面还未显示");
  // },
  // beforeMount: function() {
  //   alert("组件挂载前，页面仍未展示，但虚拟dom已配置");
  // },
  // mounted: function() {
  //   alert("组件挂载后，此方法执行后，页面展示");
  // },
  // beforeUpdate: function() {
  //   alert("组件更新前，页面仍未更新，但虚拟dom已配置");
  // },
  // updated: function() {
  //   alert("组件更新，此方法执行后，页面更新");
  // },
  // beforeDestroy: function() {
  //   alert("组件销毁前");
  // },
  // destroyed: function() {
  //   alert("组件销毁");
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #ff0000;
  padding: 20px;
}
</style>
