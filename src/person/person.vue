<template>
<div id="person">
    <header class="container-fluid top-nav">
        <nav class="main-width">
            <span >个人中心</span>
            <router-link to="/person/resume" exact >我的简历</router-link>
            <router-link to="/person/profile" exact >账户管理</router-link>
        </nav>
    </header>
    <main class="main main-width">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </main>
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
.top-nav a,
.top-nav span{
    padding: 26px 20px;
    display: inline-block;
}
.main{

}

</style>
