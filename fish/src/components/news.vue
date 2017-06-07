<template>
  <div class="news">
   <div class="news-top">消息</div>
     <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange">
      <ul class="news-list">
          <li v-for="news in list">
            <router-link to="chat"> 
            <div>
              <div class="list-avatar">
                <img src="../assets/logo.png" alt="">
              </div>
              <div class="list-info">
              <img src="../assets/product.jpg" alt="">
                <h4>
                  <strong>title</strong>
                </h4>
                <p>{{news}}</p>
              </div>
              </div>
            </router-link> 
          </li>
      </ul>
    </mt-loadmore>
      <navlan></navlan>
   </div>
</template>

<script>
import { Loadmore } from 'mint-ui';
import Nav from './Nav.vue'
export default {
  name: 'news',
  data () {
    return {
      list:[
        "以列表顶部的下拉刷新为例：按住列表，下拉一定距离（通过 topDistance 配置）后释放，被指定为 top-method 的方法就会执行",
        "以列表顶部的下拉刷新为例：按住列表，下拉一定距离（通过 topDistance 配置）后释放，被指定为 top-method 的方法就会执行",
        "以列表顶部的下拉刷新为例：按住列表，下拉一定距离（通过 topDistance 配置）后释放，被指定为 top-method 的方法就会执行",
      ],
      topStatus: '',

    }
  },
  methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },
      loadTop() {
       
        this.onTopLoaded();
      },
      onTopLoaded(){
       

      }

     
  },
    components:{
        navlan: Nav
    }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news{
  height: 100%;
  width: 100%;
}
.news-top{
  height: 50px;
  background: #F5F5F5;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.news-list li{
   border-bottom: 1px solid #ccc;
   height: 90px;
   position: relative;
}
.list-avatar{
  width: 25%;p 
  height: 100%;
}
.list-avatar img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position:absolute;
  left:20px;
  margin-top: 15px;
}
.list-info{
  width: 70%;
  height: 100%;
  position: absolute;
  left:100px;
}
.list-info h4{
  margin:20px 10px;
}
.list-info p{
  width: 70%;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px 0 10px 10px ;
}
.list-info img{
  width: 40px;
  height: 40px;
  position: absolute;
  right:0;
 bottom:15px;
}

</style>
