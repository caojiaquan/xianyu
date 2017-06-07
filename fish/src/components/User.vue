<template>
    <div class="user">
        <div id="user-header">
            <div class="user-header-container wrapper clearfix">
                <ul class="user-header-left">
                    <li><a class="username" href="javascript:">lee970660954</a></li>
                    <li><a class="user-mood" href="javascript:">虽然没挣到钱，但在闲鱼开心就好</a></li>
                </ul>
                <div class="user-header-right">
                    <span class="portrait"><img src="../assets/img/portrait.jpg" alt=""/></span>
                    <span class="user-details iconfont0">&#xe600;</span>
                </div>
            </div>
        </div>
        <div id="user-census">
            <div class="user-census-container wrapper">

                <ul >
                    <li>0</li>
                    <li><a href="javascript：" class="user-census-like">被赞数</a></li>
                </ul>
                <ul >
                    <li>0</li>
                    <li><a href="javascript：" class="user-census-care">关注数</a></li>
                </ul>
                <ul >
                    <li>0</li>
                    <li> <a href="javascript：" class="user-census-fans">粉丝数</a></li>
                </ul>

            </div>
        </div>
        <div id="user-about">
            <div class="user-about-container wrapper">
                <div class="user-about-container-top">
                    <ul class="user-about-details">
                        <li class="iconfont1">&#xe604;</li>
                        <li><router-link to="/user_send" class="user-send">我发布的</router-link ></li>
                        <li><span>0</span><span class="iconfont0">&#xe600;</span></li>
                    </ul>
                    <ul class="user-about-details">
                        <li class="iconfont2">&#xe60a;</li>
                        <li><router-link to="/user_sell" class="user-sell">我卖出的</router-link></li>
                        <li><span>0</span><span class="iconfont0">&#xe600;</span></li>
                    </ul>
                    <ul class="user-about-details">
                        <li class="iconfont3">&#xe601;</li>
                        <li><router-link to="/user_buy" class="user-buy">我买到的</router-link></li>
                        <li><span>0</span><span class="iconfont0">&#xe600;</span></li>
                    </ul>
                    <ul class="user-about-details">
                        <li class="iconfont4">&#xe60f;</li>
                        <li><router-link to="/user_like" class="user-like">我赞过的</router-link></li>
                        <li><span>0</span><span class="iconfont0">&#xe600;</span></li>
                    </ul>
                    <ul class="user-about-details">
                        <li class="iconfont5">&#xe63c;</li>
                        <li><a href="javascript:" class="user-money">我的鱼贝</a></li>
                        <li><span>0</span><span class="iconfont0">&#xe600;</span></li>
                    </ul>
                </div>
                <div class="user-about-container-bottom">
                    <ul>
                        <li class="iconfont6">&#xe603;</li>
                        <li><a href="javascript:" class="user-about-details">我的公益</a></li>
                        <li class="iconfont0">&#xe600;</li>
                    </ul>
                    <ul>
                        <li class="iconfont7">&#xe91e;</li>
                        <li><a href="javascript:" class="user-about-details">闲鱼Family</a></li>
                        <li class="iconfont0">&#xe600;</li>
                    </ul>
                    <ul>
                        <li class="iconfont8">&#xe624;</li>
                        <li><a href="javascript:" class="user-about-details">帮助与反馈</a></li>
                        <li class="iconfont0">&#xe600;</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="user-settings" class="wrapper">
            <ul class="user-about-details">
                <li class="iconfont9">&#xe61a;</li>
                <li><router-link to="user_info" class="user-info">个人资料设置</router-link></li>
                <li class="iconfont0">&#xe600;</li>
            </ul>
        </div>
        <!--<router-view></router-view>-->
        <navlan></navlan>
    </div>
</template>

<script>
    import Nav from './Nav.vue'
    export default{
        name : 'user',
        components:{
            navlan : Nav
        }
    }
</script>

<style>
    @import "../assets/css/common.css";
    @import "../assets/css/User.css";
    @import "../assets/css/UserInfo.css";
</style>