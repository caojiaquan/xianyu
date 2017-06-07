<template>
    <div id="nav-detail">
        <div class="nav-detail-header">
            <span><router-link to="/" class="iconfontyyy animated rotateIn">&#xe600;</router-link></span>
            <span id="pusid">发布</span>
            <span>发布秘籍</span>
        </div>
        <div class="nav-detail_wrapper">
            <div class="detail_wrapper-header">
                <input type="text" placeholder="#技能服务#">
            </div>
            <div class="detail_wrapper-body">
                <input type="text">
                <div class="detail_wrapper-body-middle">
                    <div><span><i class="iconfontyyy animated rotateIn">&#xe639;</i></span><span>添加图片</span></div>
                    <div><span><i class="iconfontyyy animated rotateIn">&#xe6d1;</i></span><span>添加视屏</span></div>
                </div>
                <div class="detail_wrapper-body-bottom">
                    <span><i class="iconfontyyy animated rotateIn">&#xe620;</i>黑龙江 哈尔滨 香坊区</span>
                </div>
            </div>
        </div>
        <div class="nav-detail-price-box">
            <div class="nav-detail-price-nav">
                <span>开个价</span>
                <span>拍卖</span>
                <span>不谈钱</span>
            </div>
            <div class="nav-detail-price">
                <span>￥0.00</span>
            </div>
            <div class="nav-detail-price-kind">
                <span>分类</span><span>手绘修图<i class="iconfontyyy animated rotateIn">&#xe606;</i></span>
            </div>
        </div>
        <div class="nav-detail-sync">
            <span>把宝贝同步到</span><span>鱼塘：加入鱼塘更多曝光</span>
        </div>
        <div class="nav-detail-footer">
            <span>确定发布</span>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'push',
        data(){
            return {
                msg:'123'
            }
        },
        methods : {

        }
    }
</script>

<style>
    @import "../assets/css/common2.css";
    @import "../assets/css/push.css";
    @import "../../node_modules/animate.css/animate.min.css";
</style>