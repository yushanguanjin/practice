<template>
    <div>
        <p>接受信息：<span style="color:#ff0000">{{getMsgA}}</span></p>
        <ChildA></ChildA>
        <ChildB></ChildB>
    </div>
</template>

<script>
import ChildA from './ChildA';
import ChildB from './ChildB';
import { EventBus } from '../../event-bus';

export default {
    name:'Parent',
    components:{
        ChildA:ChildA,
        ChildB:ChildB
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

