<template>
<div id="person">
    <header class="container-fluid top-nav">
        <nav class="main-width">
            <router-link to="/person">个人中心</router-link>
            <router-link to="/person/resume">我的简历</router-link>
            <router-link to="/person/profile">账户管理</router-link>
        </nav>
    </header>
    <transition name="fade">
        <router-view></router-view>
    </transition>
</div>

</template>

<script>
export default {
    name: 'person'
}

</script>

<style>
.top-nav{
    height: 80px;
    background-color: #fff;
    font-size: 20px;
    font-weight: 200;
}
.top-nav a{
    padding: 26px 20px;
    display: inline-block;
}

</style>
