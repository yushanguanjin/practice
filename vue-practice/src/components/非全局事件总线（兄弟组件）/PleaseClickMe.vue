<template>
  <div class="pleeease-click-me" @click="emitGlobalClickEvent()">请点我</div>
</template>
 
<script>
// Import the EventBus we just created.
import { EventBus } from '../../event-bus';
 
export default {
  name:'PleaseClickMe',
  data(){
    return{
      clickCount: 0
    }
  },
  methods: {
    emitGlobalClickEvent() {
      this.clickCount++;
      // Send the event on a channel (i-got-clicked) with a payload (the click count.)
      EventBus.$emit('i-got-clicked', this.clickCount);
    }
  }
}
</script>
