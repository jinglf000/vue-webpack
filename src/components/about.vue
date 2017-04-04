<template>
    <div id="about">
        <h2>关于我们</h2>
        <div>
            <span class>{{title}}</span>
        </div>
    </div>
</template>
<script>

export default {
    name : 'about',
    data () {
        return {
            title : '关于我们'
        }
    }
}
</script>

<style>
    h2{
        font-size : 24px;
        font-weight : 200;
        color : red; 
    }
</style>
