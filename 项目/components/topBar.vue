<template>
    <div id='topBar'>
        <h3 :class='{center:$route.path =="/login"}'>{{titles[$route.path.slice(1)]}}</h3>
        <div v-if='$route.path !="/login"'>
            <el-button size='medium' @click='exit'>退出</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            titles:{
                login:'登录',
                index:'首页',
                createIndex:'设置封面',
                name:'请选择项目名',
                description:'请选择项目描述',
                updated_at:'请选择项目时间',
                owner:'请选择头像',
                info:'请填写备注信息'
            }
        }
    },
    methods:{
        exit(){
            localStorage.removeItem('token');
            this.$router.push({name:'login'});
        }
    }
}
</script>

<style scoped>
    
    .center{
        flex-grow:1;
        text-align: center;
    }

    #topBar button{
        line-height: 0.8rem;
        /* width:1.5rem; */
        font-size:0.5rem;
    }

    #topBar{
        height: 3rem;
        width:16rem;
        box-sizing:border-box;
        background: #8ccf5e;
        line-height: 3rem;
        display: flex;
        justify-content: space-between;
        padding:0 1rem;
        color:#fff
    }

</style>
