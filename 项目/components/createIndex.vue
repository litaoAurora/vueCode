<template>
    <div>
        <slot></slot>
        <div>
            <el-row>
                <img src="@/assets/tx.png" alt="">
            </el-row>
            <el-row>
                <el-button type='success'  @click='toOptions'>设置封面</el-button>
            </el-row>
        </div>
        <el-row>
            <p>DAMN-AMAZING</p>
        </el-row>
    </div>
</template>

<script>
export default {
    methods:{
        toOptions(){
            this.$router.push({name:'options',params:{hash:'name'}});
        }
    }
}
</script>

<style>

</style>
