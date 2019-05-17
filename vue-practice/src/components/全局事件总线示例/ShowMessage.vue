<!-- ShowMessage.vue -->
<template>
    <div class="message">
        <h1>{{ message }}</h1>
    </div>
</template>

<script> 
export default {
        name: "ShowMessage",
        data() {
            return {
                message: "我是一条消息"
            };
        },
        created() {
            var self = this
            this.$bus.$on('updateMessage', function(value) {
                self.updateMessage(value);
            })
        },
        methods: {
            updateMessage(value) {
                this.message = value
            }
        }
    }; 
</script>