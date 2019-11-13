<template>
  <div id='article'>
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
            immediate:true,
            handler(){
                let path = this.$route.params.path;
                this.fl = this.$store.state.data[path].article;
            }            
        }
    }
}
</script>

<style>

</style>