<template>
    <div id='app'>
        <router-view>
            <topBar />
        </router-view>
    </div>
</template>

<script>
import topBar from '@/components/topBar.vue'
import './css/style.css'

let oImg = require('./assets/chaoyuemeimei.png')

export default {
    components:{topBar}
}
</script>

<style>
    
</style>
