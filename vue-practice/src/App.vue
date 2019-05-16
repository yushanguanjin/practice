<!-- App.vue -->
<template>
    <div id="app">
        <Count></Count>
    </div>
</template>

<script>
    //  import router from './router'
    import Count from "./components/Count";
 
    export default {
        name: "App",
        components: {
            Count
        }
    }; 
</script>