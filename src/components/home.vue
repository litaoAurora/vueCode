<template>

<el-container class="home-container">
    <!-- 头部 -->
    <el-header>
        <div>
            <img src="../assets/heima.png" alt="">
            <span>电商管理管理系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 主体 -->
    <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="isCollapse? '65px' : '200px'">
            <div class="contorlCollapse" @click="switchCollapse">|||</div>
            <!-- background-color: 背景颜色， text-color 文字颜色  active-text-color 激活颜色 -->
            <!-- router 路由模式  点击 el-menu--item 是可以跳转到 他的index 路径中。  unpique-opened  唯一展开 -->
            <!-- default-active 是默认激活的状态，  对应当前的路由路劲。 -->
            <el-menu
                :collapse-transition="false"
                :collapse="isCollapse"
                background-color="#333744"
                text-color="#fff"
                active-text-color="#409eff"
                :unique-opened="true"
                :router="true"
                :default-active="activePath"
            >
                <!-- 一级菜单 -->
                <!-- index 是  elsubmenu 的唯一表示 -->
                <el-submenu v-for="item in menuList" :key="item.id" :index="item.id + ''">
                    <template slot="title">
                        <i :class="iconList[item.id]"></i>
                        <span> {{item.authName}} </span>
                    </template>
                    <!-- 二级菜单 -->
                    <el-menu-item
                        background-color="#409eff"
                        v-for="subItem in item.children"
                        :key="subItem.id"
                        :index="'/'+subItem.path"
                        @click="saveNavState( '/'+subItem.path )"
                    >
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span> {{subItem.authName}} </span>
                        </template>
                    </el-menu-item>
                </el-submenu >
            </el-menu>
        </el-aside>
        <!-- 主内容 -->
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>

<script>
export default {
    data(){
        return {
            menuList: [],
            iconList:{
                "125": "el-icon-s-custom",
                "103": "el-icon-edit-outline",
                "101": "el-icon-s-goods",
                "102": "el-icon-circle-plus",
                "145": "el-icon-sort"
            },
            isCollapse: false,
            // 被激活的链接地址
            activePath : ''
        }
    },
    methods: {
        logout(){
            sessionStorage.removeItem('token');
            this.$router.replace('/login')
        },
        async getMEnuList(){
            let {data: res} = await this.$axios.get('menus');
            if(res.meta.status !== 200) return this.$message.error(res.meta.msg);
            this.menuList = res.data;
            console.log(res);
        },
        switchCollapse(){
            this.isCollapse = !this.isCollapse;
        },
        saveNavState(value){
            sessionStorage.setItem('activePath', value);
            this.activePath = value;
        }
    },
    created(){
        this.getMEnuList();

        // 保存当前的额 路径
        this.activePath = sessionStorage.getItem('activePath')
    }
}

/*
    1. el-container
    2. el-header
    3. el-container
    4. el-aside
    5. el-main

 */
</script>

<style lang="less" scoped>

.home-container {
    height: 100%;
}

.el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: #fff;
    padding-left: 0;
    > div {
        display: flex;
        align-items: center;
    }
}

.el-container {

}

.el-aside {
    cursor: pointer;
    background-color: #333744;
    .contorlCollapse {
        height: 30px;
        background-color: #333744;
        color: #fff;
        letter-spacing: 8px;
        line-height: 30px;
        font-size: 14px;
        text-align: center;
    }
    .el-menu {
        border: none;
    }
}

.el-main {
    background-color: #eaedf1;
}


</style>
