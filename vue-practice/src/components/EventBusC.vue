<template>
    <div>
        <p>接受信息：<span style="color:#ff0000">{{getMsgA}}</span></p>
        <EventBusA></EventBusA>
        <EventBusB></EventBusB>
    </div>
</template>

<script>
import EventBusA from './EventBusA';
import EventBusB from './EventBusB';
import { EventBus } from '../event-bus';

export default {
    name:'C',
    components:{
        EventBusA:EventBusA,
        EventBusB:EventBusB
    },
    data(){
        return {
            getMsgA:''
        }
    },
    mounted(){
        EventBus.$on('send',({msg})=>{
             console.group('%c%s','color:red',10);
              console.groupEnd('%c%s','color:red',10);
            this.getMsgA = msg+'是A'
        })
         EventBus.$on('sendToo',({info})=>{
            this.getMsgA = info+'是B'
        })
    },
    beforeDestroy () {
         console.log(10);
        EventBus.$off('send', this.myhandle)
    }
    
    
}

</script>

