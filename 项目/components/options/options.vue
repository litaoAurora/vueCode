<template>
    <div>
        <slot></slot>
        <ul class='main' v-if='hash!="info"'>
            <li v-for='(d,i) in content' :key='i'>
                <img :src="d" alt="" v-if='hash=="owner"'>
                <el-radio v-model="choosed" name='os' :label="d" border>
                    <span v-if='hash=="owner"'>
                        {{data[i].name}}
                    </span>
                    <span v-else>{{d}}</span>
                </el-radio>               
            </li>
        </ul>
        <div class='main' v-else>
            <el-input type='textarea' v-model="choosed" show-word-limit></el-input>
        </div>
        <el-row>
            <el-button type='success' @click='goBack'>上一步</el-button>
            <el-button type='success' @click='forWard'>{{btnValue}}</el-button>
        </el-row>
    </div>
</template>

<script>

import {data,options,content,hash,btnValue} from './computed'
import {changeHash,saveOptions,beforeRouteEnter,beforeRouteUpdate} from './methods'

export default {
    //第一次进入或者刷新页面都会触发created,这时候请求用户数据.
    created(){
        this.axios.get('/user/repos').then((res)=>{
            this.$store.commit('saveData',res.data)
        })
    },
    data(){
        //选择的单选框的内容或者文本输入内容
        return {choosed:''}
    },
    methods:{
        //上一步
        goBack(){
            this.$router.back();
        },
        //下一步或者完成
        forWard(){
            //保存所选数据
            this.saveOptions();
            //跳转动态路由
            this.changeHash();                  
        },
        changeHash,
        //每次点击下一步,把当前用户选择的数据存入options共享数据内.
        saveOptions
    },
    computed:{
        //用户数据.
        data,
        //用户选择的数据.
        options,
        //根据用户数据筛选的显示内容
        content,
        //当前路由哈希值
        hash,
        //按钮value切换
        btnValue
    },
    beforeRouteUpdate,
    beforeRouteEnter
}
</script>

<style scoped>

    .el-radio.is-bordered{
        border:#b6cfa6 1px solid;
    }

    .el-row{
        padding:1.5rem 15%;
        box-sizing:border-box;
    }

    label{
        background: #fff;
        width: 100%;
    }

    label .el-radio__label{
        display: flex;
        justify-content: space-between;
        flex-grow:1
    }

    li{
        position: relative;
        padding:0.3rem 0;
    }

</style>
