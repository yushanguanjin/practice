<!-- App.vue -->
<template>
    <div id="app">
        <Count></Count>
        <hr>
        <EventBusC></EventBusC>
        <hr>
        <PleaseClickMe style="color:red"></PleaseClickMe>
        <GetClick style="color:blue"></GetClick>
        <hr>
        <div>全局事件总线示例</div>
        <ShowMessage></ShowMessage>
        <UpdateMessage></UpdateMessage>
    </div>
</template>

<script>
    // import router from './router'
    import Count from "./components/Count";
    import EventBusC from "./components/EventBusC";
 

   import  PleaseClickMe    from "./components/非全局事件总线/PleaseClickMe";
    import  GetClick    from "./components/非全局事件总线/GetClick";


    import  ShowMessage    from "./components/全局事件总线示例/ShowMessage";
    import  UpdateMessage    from "./components/全局事件总线示例/UpdateMessage";

    export default {
        name: "App",
        components: {
            Count,
            EventBusC,
            PleaseClickMe,
            GetClick,
            ShowMessage,
            UpdateMessage
        }
    }; 
</script>