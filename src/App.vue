<template>
	<div id="app">
		<div class="top-color-liner"></div>
		<div class="container-fluid site-topbar-container">	
			<div class="site-topbar main-width">
				<div class="topbar-nav-left clear_float">
					<router-link to="/home" class="top-home icon">贵阳人力资源网</router-link>
					<router-link to="/enterprise" class="top-enterprise icon">进入企业版</router-link>
				</div>
				<div class="topbar-card-right clear_float">
					<!-- exact 路由匹配的类的样式 精确模式，只匹配当前路由 -->
					<router-link to="/person" class="top-person icon" exact>Mrs Zhang</router-link>
					<i class="iconfont">&#xe94b;</i>
					<router-link to="/mobile" class="top-mobile icon">手机贵阳</router-link>
				</div>
			</div>
		</div> 
		<transition name="slide">
			<router-view></router-view>
		</transition>
		<footer class="container-fluid foot-container">
			<h4>beta</h4>
			<p>Copyright ©2016-2017 jinglf</p>
		</footer>
	</div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style >
	@import "./assets/main.css";
	.site-topbar-container{
		background-color: #333;
	}
	.site-topbar{
		height: 40px;
		line-height: 40px;
		color: #ccc;
	}
	.site-topbar a{
		color: #ccc;
		padding: 5px 20px;
	}
	.site-topbar a:hover{
		color: #ccc;
		text-decoration: none;
	}
	.topbar-nav-left{
		float: left;
	}
	.topbar-card-right{
		float: right;
	}
	.top-home:before{
		content: '\e608';
	}
	.top-enterprise:before{
		content: '\e724';
	}
	.top-person:before{
		content: '\e7c1';
	}
	.top-mobile:before{
		content: '\e601';
	}
	.foot-container{
		text-align: center;
		font-size: 12px;
		background-color: rgb(51, 51, 51);
		color: #fff;
	}
</style>
