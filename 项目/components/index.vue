<template>
<div id='index'>
    <slot></slot>
    <div class='main img'>
        <img :src="userData.owner" alt="">
    </div>
    <div class='main'>
        <ul>
            <li v-for='(item,key,i) in userData' :key='i' v-show='key!="owner"'>{{title[i]+item}}</li>
        </ul>
    </div>
    <el-row class='main'>
        <el-button type='success' @click='reset'>重设封面</el-button>
    </el-row>
</div>
    
</template>

<script>
export default {
    data(){
        return {
            title:['项目名：','项目描述:','项目时间:','','备注信息:']
        }
    },
    methods:{
        reset(){
            this.$router.push({name:'options',params:{hash:'name'}})
        }
    },
    computed:{
        userData:{
            get(){
                //如果本地存储有首页数据，则直接取出渲染。
                let userData = localStorage.getItem('userData')
                return userData ? JSON.parse(userData) : {}
            }
        }
    }
}
</script>

<style scoped>

    li{
        font-size:0.7rem;
    }

    .el-row{
        padding:1.5rem 15%;
        box-sizing:border-box;
    }

    .img{
        text-align: center
    }

</style>
