<!-- App.vue -->
<template>
  <div id="app">
    <Parent></Parent>
    <hr>
    <div>全局事件总线示例</div>
    <ShowMessage></ShowMessage>
    <UpdateMessage></UpdateMessage>
    <!-- 插槽 -->
    <hr style="background-color:#ff0000;height:1px;border:none;margin-top: 100px;">
    <ParentSlot></ParentSlot>
     <hr style="background-color:#0000ff;height:1px;border:none;">
     <ParentChacao></ParentChacao>
  </div>
</template>

<script>


//事件总线
import Parent from "./components/非全局事件总线（父子组件）/Parent";

import ShowMessage from "./components/全局事件总线示例/ShowMessage";
import UpdateMessage from "./components/全局事件总线示例/UpdateMessage";


//插槽
import ParentSlot from "./components/插槽/作用域插槽/Parent";
import ParentChacao from "./components/插槽/插槽与具名插槽/Parent";

export default {
  name: "App",
  components: {
    //事件总线
    Parent,
    ShowMessage,
    UpdateMessage,
    //插槽
    ParentSlot,
    ParentChacao
  }
};
</script>