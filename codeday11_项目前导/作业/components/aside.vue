<template>
   <div id='aside'>
        <input type='text' />
        <p>{{fl}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fl:''
        }
    },
    watch:{
        '$store.state.data'(){
            let path = this.$route.params.path;
            this.fl = this.$store.state.data[path].aside;
        },
        '$route':{
            handler(){
                let path = this.$route.params.path;
                this.fl = this.$store.state.data[path].aside;
            }            
        }
    }
}
</script>

<style>

</style>