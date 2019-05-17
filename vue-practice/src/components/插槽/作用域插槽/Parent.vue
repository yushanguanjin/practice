<template>
  <div id="app">
    <Child>
      
      <template slot-scope="{close}">
        <!-- 插槽获得了组件的 close 方法 -->
        <button @click="close">点击</button>
      </template>
    </Child>
  </div>
</template>
<script>
import Child from './Child';
export default {
  name: 'Parent',
  components: {
    Child
  }
}
</script>