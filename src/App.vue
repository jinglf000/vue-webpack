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
	
</style>
