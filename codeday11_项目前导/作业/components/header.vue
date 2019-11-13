<template>
  <div id='div1'>
        <ul>
            <li v-for='(d,i) in data' :key='i'>
                <router-link :to='"/"+i'>{{d.title}}</router-link>
            </li>
            <input type="text" :value='msg'>
        </ul>
    </div>
</template>

<script>
export default {
    computed:{
        msg(){
            return this.$store.state.msg
        },
        data(){
            return this.$store.state.data
        }
    }
}
</script>

<style>

</style>