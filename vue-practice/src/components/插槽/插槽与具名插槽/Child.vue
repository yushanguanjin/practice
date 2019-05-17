<template>
  <div>
    <!-- 插槽内容，基础用法 -->
    <slot></slot>:<!-- 占位符:父组件的内容 -->这是子组件（插槽基本用法）
    <!-- 具名插槽 -->
    <slot name="boy"></slot>这是子组件（具名插槽）
     <slot name="girl"></slot>
  </div>
</template>

<script>
export default {
  name: "Child"
};
</script>

