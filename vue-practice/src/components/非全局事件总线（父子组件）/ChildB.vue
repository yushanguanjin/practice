<template>
    <div>
        <p @click="put()">b</p>
    </div>
</template>
<script>
import { EventBus } from '../../event-bus';
export default {
    name:'ChildB',
    data(){
        return {
            info:'发送新闻'
        }
    },
    methods:{
        put(){
            EventBus.$emit('sendToo',{
                info:this.info
            })
        }
    },
    //全局事件总线
    mounted(){
        EventBus.$on('send',(send)=>{
            console.log("%c%%s","color:red",send);
        })
    }
}
</script>

