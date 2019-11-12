let App = {
	template:`
		<div id='app'>			
			<router-link to='/home'>首页</router-link>
			<router-link to='/huodong'>活动</router-link>
			<router-link to='/news'>新闻</router-link>
			<router-view />					
		</div>
	`
}