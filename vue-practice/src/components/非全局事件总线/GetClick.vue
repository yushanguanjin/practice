<template>
  <div>获得点击</div>
</template>

<script>
import { EventBus } from '../../event-bus';
export default {
    name:'GetClick',
    mounted(){


      EventBus.$on('i-got-clicked', clickCount => {
        console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
      });
      
      /*
      const clickHandler = function(clickCount) {
        console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
      }

      // Listen to the event.
      EventBus.$on('i-got-clicked', clickHandler);
      
      // Stop listening.
      EventBus.$off('i-got-clicked', clickHandler);
      */

      // 你可以通过不给EventBus.$off(‘i-got-clicked’)传回调参数来移除特定事件（i-got-clicked）上的所有Listeners（clickHandler）
      // 你也可以通过不带任何参数EventBus.$off()来移除事件总线上的所有Listeners。
    }
}
</script>

