<!-- App.vue -->
<template>
    <div>
        <div class="container" :style="{transform: 'rotateY(' + degValue + 'deg)'}">
            <div class="front">
                <div class="increment">
                    <IncrementCount />
                </div>
                <div class="show-front"> {{fontCount}} </div>
                <div class="decrement">
                    <DecreaseCount />
                </div>
            </div>

            <div class="back">
                <div class="increment">
                    <IncrementCount />
                </div>
                <div class="show-back"> {{backCount}} </div>
                <div class="decrement">
                    <DecreaseCount />
                </div>
            </div> 
        </div>
        
    </div>
</template>

<script>
    //  import router from './router'
    import IncrementCount from "./IncrementCount";
    import DecreaseCount from "./DecreaseCount";
    
    import { EventBus } from "../event-bus";

     
    export default {
        name: "Count",
        components: {
            IncrementCount,
            DecreaseCount
        },
        data() {
            return {
                degValue:0,
                fontCount:0,
                backCount:0
            };
        },
        mounted() {
            EventBus.$on("incremented", ({num,deg}) => {
                this.fontCount += num
                this.$nextTick(()=>{
                    this.backCount += num
                    this.degValue += deg;
                })
            });
            EventBus.$on("decreased", ({num,deg}) => {
                console.log({num,deg});
                this.fontCount -= num
                this.$nextTick(()=>{
                    this.backCount -= num
                    this.degValue -= deg;
                })
            });
        }
    }; 
</script>