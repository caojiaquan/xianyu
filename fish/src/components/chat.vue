<template>
  <div class="chat">
     <div class="chat-top">username</div>
     <div class="product">
     	<img src="../assets/product.jpg" alt="">
     	<div class="product-info">
        <h4><strong>￥100</strong></h4>
     		<p>交易前聊一聊</p>
     	</div>
     </div>
     <div class="chat-window clearfix"  @click="hidePreview">
     	<div class="user-other">
     		<img src="../assets/logo.png" alt="" class="avatar">
     		<span>{{info}}</span>
     	</div>
     	<div class="user-self">
     		<span>{{info}}</span>
     		<img src="../assets/logo.png" alt="" class="avatar">
     	</div>
     	<div class="user-other">
     		<img src="../assets/logo.png" alt="" class="avatar">
     		<span>{{info}}</span>
     	</div>
     	<div class="user-self">
     		<span>{{info}}</span>
     		<img src="../assets/logo.png" alt="" class="avatar">
     	</div>
     	<div class="user-other">
     		<img src="../assets/logo.png" alt="" class="avatar">
     		<span>{{info}}</span>
     	</div>
     	<div class="user-self">
     		<span>{{info}}</span>
     		<img src="../assets/logo.png" alt="" class="avatar">
     	</div>
     </div>
     <div class="chat-bottom">
     	<input type="text" placeholder=" 想对他说点什么" class="chart-input" v-model="sendContent" @keyup.enter="sendMsg" >
			<img src="static/img/plus.png" class="img-btn" :class="{rotate:isRotate}" @click="previewBoxShow" v-show="imgBtnShow" alt="">
			<img src="static/img/send.png" class="send-btn" alt="" @click="sendMsg" v-show="sendBtnShow">
     	<input id="img_input" type="file" accept="image/*" class="add-img" style="display:none">
     	<div class="preview_box" v-show="previewShow">
     		<label for="img_input">
     			<img src="../assets/preview.png" alt="">
     		</label>
     	</div>
     </div>

  </div>
</template>

<script>
//import io from '../../lib/socket.io';
export default {
  name: 'chat',
//   data () {
//    return {
//    	isRotate:false,
//    	state:true,
//    	previewShow:false,
//    	info:"hhhjkadfhvvvvvvndfajlkufncdjfhsjarywecjhbc8a7wfbcjh SCy",
//    	sendContent:"",
//    	sendBtnShow:false,
//    	imgBtnShow:true
//
//    }
//  },
//  watch:{
//  	sendContent:function(){
//  		if(this.sendContent){
//  			this.imgBtnShow = false;
//  			this.sendBtnShow = true;
//  		}else{
//  			this.imgBtnShow = true;
//  			this.sendBtnShow = false;
//  		}
//
//  	}
//  },
//  methods: {
//  	previewBoxShow:function(){
//  		if(this.state){
//  			this.isRotate = true;
//  			this.previewShow = true;
//  			$('.chat-bottom').height('200');
//  		}else{
//  			this.isRotate = false;
//  			this.previewShow = false;
//  			$('.chat-bottom').height('60');
//  		}
//  		this.state = !this.state;
//  	},
//  	hidePreview:function(){
//  		this.isRotate = false;
//		this.previewShow = false;
//		$('.chat-bottom').height('60');
//  	},
//  	uploadImage:function(){
//  			$('.add-img').on('change',function(e){
//	  				var file = e.target.files[0]; //获取图片资源
//			  		// 只选择图片文件
//					if (!file.type.match('image.*')) {
//					    return false;
//					}
//					var reader = new FileReader();
//					reader.readAsDataURL(file); // 读取文件
//					// 渲染文件
//					reader.onload = function(arg) {
//					var $imgInfo =$(`<div class="user-self">
//			     					    <span></span>
//				     					<img src="static/img/logo.png" alt="" class="avatar">
//		     						</div>`);
//					var $image = $('<img src="'+arg.target.result+'" alt="">');
//						$image.addClass('upload-image');
//					$imgInfo.children("span").append($image);
//				    $(".chat-window").append($imgInfo);
//				}
//			})
//  		},
//  		sendMsg:function(){
//			var $imgInfo =$(`<div class="user-self">
//		     					    <span></span>
//			     					<img src="static/img/logo.png" alt="" class="avatar">
//	     					</div>`);
//			$imgInfo.children("span").html(this.sendContent);
//			$(".chat-window").append($imgInfo);
//  		},
//  		connectEvent () {
//                var me = this;
//                var randomNum = Math.floor(Math.random() * 10);
//                // this.userInfo = {
//                //     userId: this.getUserId(),
//                //     userName: this.userNameList[randomNum],
//                //     userImg: randomNum + 1
//                // };
//                this.httpServer = io.connect('ws://121.40.165.18:8088');
//                this.httpServer.on('loginSuccess', function (obj) { // 1 成功
//
//                        console.log('连接好了');
//
//                });
//                this.httpServer.on('message', function (obj) {
//                    console.log(obj);
//
//                });
//                console.log("啊呀呀呀");
//            }
//  	},
//
//  	mounted:function(){
//  		this.uploadImage();
//  		//this.connectEvent();
//  	}
  }


</script>

<style>
.mint-loadmore{
	overflow: visible;
}
.chat{
	background: #eee;
}
.chat-top{
  width: 100%;
  height: 50px;
  background: #F5F5F5;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  position: fixed;
  top:0;
  z-index: 10;
}
.product{
	height: 80px;
	background: #fff;
	position: relative;
	top:50px;
}
.product img{
	width: 50px;
	height: 50px;
	position: absolute;
	left:20px;
	margin-top: 15px;
}
.product-info{
	position: absolute;
	left:100px;
}
.product-info h4{
	margin:10px;
}
.product-info p{
	color:#888;
	margin:10px;
	font-size: 14px;
}
.chat-bottom{
	width: 100%;
	height: 60px;
	position: fixed;
	bottom: 0;
	background: #fff;
	transition: all ease .3s;
}
.chart-input{
	border:none;
	width: 75%;
	height: 36px;
	margin: 12px 0 12px 12px;
	float:left;
	z-index: 10;
}
.chat-bottom img{
	margin: 14px 20px 0 0;
	float: right;
}
.preview_box{
	width: 100%;
	height: 200px;
}
.rotate{
	transform: rotate(45deg);
}
.preview_box img{
	width: 40px;
	position: absolute;
	left:10%;
	top:40%;
}
.chat-window{
	position: relative;
	top:50px;
	padding-bottom: 80px;
}
.clearfix:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
.avatar{
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
.user-other,.user-self{
	display: block;
	width: 80%;
	padding: 20px;
	word-wrap:break-word;
	overflow:hidden
}
.user-other span,.user-self span{
	display: inline-block;
	width: 70%;
	margin-left: 10px;
	padding: 5px;
	background: #fff;
	border-radius: 10%;
}
.user-self{
	float:right;
}
.user-self img{
	float:right;
}
.upload-image{
	width:100%;
	border-radius: 10%;
}

</style>
