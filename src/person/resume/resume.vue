<template>
    <div id="resume" class="container-fluid resume-main">
        <div class="row">
            <div class="col-md-8 resume-container" >
                <router-view></router-view>
            </div>
            <div class="right-bar col-md-3">
                <div class="resume-tool">
                    <!--<router-link :to="{ name : 'person-resume-edit' }">编辑简历</router-link>-->
                    <div class="col-md-3">
                        <router-link :to="{ name : 'person-resume-status'}" class="resume-status">
                            <span class="count">1</span>
                            <i class="iconfont">&#xe61b;</i>
                            <p>投递箱</p>
                        </router-link>
                    </div>
                    <div class="col-md-3">
                        <router-link :to="{ name : 'person-resume-follow'}" class="resume-follow">
                            <span class="count">251</span>
                            <i class="iconfont">&#xe691;</i>
                            <p>关注盒</p>
                        </router-link>
                    </div>
                    <div class="col-md-3">
                        <router-link :to="{ name : 'person-resume-collection'}" class="resume-collection">
                            <span class="count">3</span>
                            <i class="iconfont">&#xe646;</i>
                            <p>收藏夹</p>
                        </router-link>
                    </div>
                    <div class="col-md-3">
                        <router-link :to="{ name : 'person-resume-subscribe'}" class="resume-subscribe">
                            <i class="iconfont">&#xe626;</i>
                            <p>订阅栏</p>
                        </router-link>
                    </div>
                </div>
                <div class="right-container">
                    <router-view name="right-container">
                        
                    </router-view>
                </div>
            </div> 
        </div>       
    </div>
</template>

<script>

export default {
    name: 'resume'
}

</script>

<style>
.resume-main{
    margin-top: 30px;
}
.resume-container{
    background-color: #fff;
    margin-right: 40px;
    box-sizing: border-box;
    padding: 15px;
}
.right-bar{
    background-color: #fff; 
    width: 360px;
    padding: 15px;
}
.resume-tool > div{
    text-align: center;
    line-height: 1.5;
}
.resume-tool > div p {
    margin-bottom: 0;
}
.resume-tool .iconfont{
    font-size: 20px;
}
.resume-tool a:hover{
    text-decoration: none;
}
.resume-tool .count{
    text-align: center;
    min-width: 18px;
    position: absolute;
    background-color: red;
    color: #fff;
    border-radius: 9px;
    font-size: 12px;
    line-height: 14px;
    padding: 2px;
    top: 0;
    right: 15px;
}
</style>
