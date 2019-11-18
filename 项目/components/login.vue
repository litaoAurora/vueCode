<template>
    <div id='login'>
        <slot></slot>
        <div>
            <el-row>
                <img src="@/assets/tx.png" alt="">
            </el-row>
            <el-row>
                <el-input placeholder="token" v-model='token'></el-input>
            </el-row>
            <el-row>
                <el-button type='success'  @click='toIndex'>登录</el-button>
            </el-row>
            <el-row>
                <el-alert title="登录失败，可能token错误" type="error" v-if='isFail'></el-alert>
            </el-row>
        </div>
        <el-row>
            <p>DAMN-AMAZING</p>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {token:''}
    },
    methods:{
        toIndex(){
            //保存token
            this.$store.commit('saveToken',this.token);
            //请求数据
            this.axios.get('/user/repos').then((res)=>{
                this.$store.commit('saveData',res.data);
                //跳转路由.
                this.$router.replace({name:'index'})
            })        
        }
    },
    computed:{
        isFail(){
            return this.$store.state.fail;
        }
    }
}
</script>

<style>

    .el-row,.el-input{
        display: flex;
        justify-content: center;
        padding:.5rem 0;
    }

    #login input,.el-row button,.el-alert{
        width:70%;
        height:2rem;
        font-size:0.5rem;
    }

    .el-row .el-button--success{
        background-color: #8ccf5e;
        border-color: #8ccf5e;
    }

</style>
