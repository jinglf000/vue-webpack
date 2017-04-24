<template>
    <div id="resume">
        <h1>resume</h1>
        <div class="resume-main">
            <router-view></router-view>
        </div>
        <div class="right-bar">
            <router-link :to="{ name : 'person-resume-edit' }">编辑简历</router-link>
            <router-link :to="{ name : 'person-resume-follow'}">关注</router-link>
            <router-link :to="{ name : 'person-resume-subscribe'}">订阅</router-link>
            <router-link :to="{ name : 'person-resume-status'}">状态</router-link>
            <router-link :to="{ name : 'person-resume-collection'}">收藏</router-link>
        </div>        
    </div>
</template>

<script>

export default {
    name: 'resume'
}

</script>

<style>

</style>
