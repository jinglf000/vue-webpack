<template>
	<div id="app">
		<div class="nav container">
			<div class="color-liner"></div>
			<ul >
				<li><router-link to="/">主页</router-link></li>
				<li><router-link to="/about">关于我们</router-link></li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name : 'app'
}
</script>

<style>

@import "./assets/main.css";
body,html{
	margin: 0;
	padding: 0;	
}
@keyframes bgSize{
	0% {
		background-size : 300% 100%;
	}
	100% {
		background-size : 100% 100%;
	}
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#app .nav{
	margin-top : 10px;
	display : flex;
}
.color-liner{
	height : 3px;
	width : 100%;
	background : linear-gradient(45deg,#ffc700 0%,#e91e1e 33%,#6f27b0 66%,#00ff88 100%);
	background-position : 100% 0;
	animation: bgSize 5s infinite ease-in-out alternate;
}
</style>
