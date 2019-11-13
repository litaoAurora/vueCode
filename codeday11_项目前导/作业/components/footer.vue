<template>
  <div id='footer'>
        <ul v-for='d in 3' :key='d'>
            <li v-for='d in 5' :key='d'>{{fl}}</li>
        </ul>
        <input type="text" :value='msg'>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fl:''
        }
    },
    computed:{
        msg(){
            return this.$store.state.msg
        }
    },
    watch:{
        '$store.state.data'(){
            let path = this.$route.params.path;
            this.fl = this.$store.state.data[path].friendLink;
        },
        '$route':{
            handler(){
                let path = this.$route.params.path;
                this.fl = this.$store.state.data[path].friendLink;
            }            
        }
    }
    
}
</script>

<style>

</style>