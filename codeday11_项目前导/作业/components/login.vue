<template>
   <div id='login'> 
        <input type="text" v-model='msg'>
        <input type="button" value='login' @click="sendData">
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:''
        }
    },
    methods:{
        sendData(){
            this.$store.dispatch('sendData',this.msg);
        }
    }
}
</script>

<style>

</style>