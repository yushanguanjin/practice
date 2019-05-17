<template>
  <div>
    <!-- 插槽内容，基础用法 -->
    <Child style="color:#ff0000;">插槽基本用法</Child>
    <!-- 具名插槽 -->
     <Child slot="boy" style="color:#00ff00;">具名插槽</Child>
      <Child slot="girl" style="color:#00ff00;"></Child>
  </div>
</template>

<script>
import Child from "./Child";

export default {
  name: "ParentChacao",
  components: {
    Child
  }
};
</script>

