<template>
<div id="person">
    <header class="container-fluid top-nav">
        <nav>
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


</style>
