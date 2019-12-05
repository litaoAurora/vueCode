<template>
<div class="login_container">
<div class="login_box">
	<div class="avatar_box">
		<img src="../assets/logo.png" alt="logo">
	</div>
	<el-form ref="loginFormRef" :rules="LoginFormRules" :model="loginForm" label-width="0px" class="login_form">
		<el-form-item prop="username" >
			<el-input v-model="loginForm.username"  prefix-icon="el-icon-s-custom" ></el-input>
		</el-form-item>
		<el-form-item prop="password" >
			<el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-search" ></el-input>
		</el-form-item>
		<el-form-item>
			<el-button @click="login" type="success" >成功按钮</el-button>
  			<el-button  @click="resetLoginForm" type="info" >信息按钮</el-button>
		</el-form-item>
	</el-form>
</div>
</div>
</template>

<script>
import { log } from 'util'
export default {
	data(){
		// From 绑定类， input 绑定 类属性。 
		return {
			loginForm: {
				username: "",
				password: ""
			},
			LoginFormRules: {
				username: [
					{requeired: true, message: "请出入登录名称", trigger: "blur"},
					{max: 15, min: 5, message: "6-15个字符", trigger: "blur"}
				],
				password: [
					{requeired: true, message: "请出入登录密码", trigger: "blur"},
					{max: 15, min: 5, message: "6-15个字符", trigger: "blur"}
				]
			},

		}
	},
	methods : {
		resetLoginForm(){
			// 点击重置按钮 Form 有一个 resetFields 的属性。 可以重置表单
			this.$refs.loginFormRef.resetFields() 
		},
		login(){
			this.$refs.loginFormRef.validate(async (valid)=>{
				if(!valid) return;
				// 预验证则 valid 为 true;
				let data = await this.$axios.post('login', this.loginForm);
				
				if(data.status == 200 && data.data.meta.status == 200){
					// 登录成功保留状态， 跳转页面。 弹框
					// 如何加密
					
					// sessionStore  持久化

					sessionStorage.setItem('token', data.data.data.token);
					// 页面跳转 路由跳转
					this.$router.replace('home');
					// console.log(data.data.data.token)
				}else {
					this.$message({
							showClose: true,
							message: '密码或账号错了',
							type: 'error'
						});
				}
				
			})
		},
		open4(){
			
		}
	}
}

/* 
vue 
1. 中的表单的输入认证  
	1.From 中定义 rules="loginFormRules"  
	2. 在 From.Item 中 prop="username"  定义 prop = loginFormRules中的属性
	2.data 中 loginFormRules : {  username: [{required:true, }] }...
2. 重置表单。  Form实例对象中的 resetFields 
3. 登录验证    validate 对整个表单验证, 不好。 

 */

</script>

<style lang="less" scoped >

.login_container {
background-color: #2b4b6b;
height: 100%;
}

.login_box {
width: 450px;
height: 300px;
border-radius: 3px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background-color: #fff;
position: relative;
}

.avatar_box {
	height: 130px;
	width: 130px;
	border-radius: 50%;
	padding: 10px;
	box-shadow: 0 0 10px #ddd;
	position: absolute;
	left: 50%;
	top: 0;
	transform: translate(-50%, -50%);
	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: #eee;
	}

}

.login_form {
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
}

</style>



