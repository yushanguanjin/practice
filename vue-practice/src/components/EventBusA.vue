<template>
    <div>
    <p @click="post()">a</p>
    </div>
</template>
<script>
import { EventBus } from '../event-bus';
export default {
    name:'EventBusA.vue',
    data(){
        return{
            msg:'发送信息'
        }
    },
    methods:{
        post(){
            EventBus.$emit('send',{
                msg:this.msg
            })
        }
    }
}
</script>

