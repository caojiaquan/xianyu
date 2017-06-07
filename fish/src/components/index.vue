<template>
  <div id="body">
    <header id="index_header">
      <div class="search">
        <form class="form-inline">
          <input id="search" type="text" placeholder="搜索">
        </form>
      </div>
      <router-link to="classes">
        <img id="more_img" src="../assets/img/more.png" alt="">
      </router-link>
    </header>
    <mt-swipe :auto="4000">
      <mt-swipe-item class="slide1"><img src="../assets/img/3.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item class="slide2"><img src="../assets/img/6.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item class="slide3"><img src="../assets/img/9.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
    <div id="some_class">
      <ul id="select">
        <li class="tab">
          <div class="left_tab">
            <a class="character_left character" href="">手机专区</a>
            <p class="content_classes contnet_left">122个新宝贝</p>
            <img src="../assets/img/timg.jpg" alt="">
          </div>
          <div class="right_tab">
            <a class="character_right character" href="">电子产品</a>
            <p class="content_classes contnet_right">122个新宝贝</p>
            <img src="../assets/img/phone.jpg" alt="">
          </div>
        </li>
        <li class="tab">
          <div class="left_tab">
            <a class="character_left character" href="">女装专区</a>
            <p class="content_classes contnet_left">122个新宝贝</p>
            <img src="../assets/img/gair.jpg" alt="">
          </div>
          <div class="right_tab">
            <a class="character_right character" href="">男装专区</a>
            <p class="content_classes contnet_right">122个新宝贝</p>
            <img src="../assets/img/man.jpg" alt="">
          </div>
        </li>
        <li class="tab">
          <div class="left_tab">
            <a class="character_left character" href="">生活用品</a>
            <p class="content_classes contnet_left">122个新宝贝</p>
            <img src="../assets/img/life.jpg" alt="">
          </div>
          <div class="right_tab">
            <a class="character_right character" href="">鞋类专区</a>
            <p class="content_classes contnet_right">122个新宝贝</p>
            <img src="../assets/img/shop.jpg" alt="">
          </div>
        </li>
      </ul>
    </div>
    <mt-swipe class="smile_swip" :show-indicators="false" :auto="3000">
      <mt-swipe-item class="slide1"><img src="../assets/img/smile1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item class="slide2"><img src="../assets/img/smile2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item class="slide3"><img src="../assets/img/smile3.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
    <ul class="all_commodity">
      <a class="li_content" href="#">
        <li class="commodity_show">
          <div class="commodity_row">
            <div class="user_row">
              <img class="img" src="../assets/img/cat.jpg" alt="">
              <div class="user">
                <p class="user_name">套马的汉子</p>
                <p class="user_time">45分钟前来过</p>
              </div>
              <div class="commodity_money">
                <p class="money">￥8000</p>
              </div>
            </div>
            <div class="img_show">
              <div class="many_show">
                <img class="show_img" src="../assets/img/gair.jpg" alt="">
                <img class="show_img" src="../assets/img/man.jpg" alt="">
                <img class="show_img" src="../assets/img/phone.jpg" alt="">
              </div>
            </div>
            <div class="commodity_content">
              <div class="font_content">
                限量版 彩虹熊丝绸面料小拎包 【长宽30X22】仅欣赏！无瑕，已刀不包邮
              </div>
            </div>
          </div>
        </li>
      </a>
      <a class="li_content" href="#">
        <li class="commodity_show">
          <div class="commodity_row">
            <div class="user_row">
              <img class="img" src="../assets/img/cat.jpg" alt="">
              <div class="user">
                <p class="user_name">套马的汉子</p>
                <p class="user_time">45分钟前来过</p>
              </div>
              <div class="commodity_money">
                <p class="money">￥1600</p>
              </div>
            </div>
            <div class="img_show">
              <div class="many_show">
                <img class="show_img" src="../assets/img/gair.jpg" alt="">
                <img class="show_img" src="../assets/img/man.jpg" alt="">
                <img class="show_img" src="../assets/img/phone.jpg" alt="">
              </div>
            </div>
            <div class="commodity_content">
              <div class="font_content">
                限量版 彩虹熊丝绸面料小拎包 【长宽30X22】仅欣赏！无瑕，已刀不包邮
              </div>
            </div>
          </div>
        </li>
      </a>
    </ul>
    <navlan></navlan>
  </div>
</template>

<script>
//  import {
//    Swipe,
//    SwipeItem
//  } from 'mint-ui';
  import Nav from './Nav.vue'
  export default {
    name: 'app',
    data() {
      return {
  
      }
    },
    methods: {
  
    },
    mounted: function() {
     
    },
      components:{
          navlan:Nav
      }
  }
</script>


<style scoped>
  @import '../assets/css/index.css';
</style>
