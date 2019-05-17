<template>
  <div class="child">
    <!-- 将 close 方法作为一个插槽的 prop 传入 -->
    <slot :close='close'></slot>
  </div>
</template>
<script>
export default {
  methods: {
      close() {
        console.log('close')
      }
  }
}
</script>