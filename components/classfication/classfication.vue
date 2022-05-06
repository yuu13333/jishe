<template>
	<view style="height:100vh" class="content template-login2">
		<canvas canvas-id="star_canvas" class="mycanvas" style="width:750rpx;height:100vh;pointer-events: none;"></canvas>
		<view class="sq" @click="camera()">
			<view class="iconfont icon-cameraaddfill" style="font-size: 100rpx;"></view>
			<view style="height:20rpx;"></view>
			<view class="text">Camera</view>
		</view>
		<view style="height:100rpx;"></view>
		<view class="sq" @click="album()">
			<view class="iconfont icon-image-add-fill" style="font-size: 100rpx;"></view>
			<view style="height:20rpx;"></view>
			<view class="text">Album</view>
		</view>
		<view style="height:100rpx;"></view>
		<view class="sq" @click="album()">
			<view class="iconfont icon-image-add-fill" style="font-size: 100rpx;"></view>
			<view style="height:20rpx;"></view>
			<view class="text">Label</view>
		</view>
		<view style="height:100rpx;"></view>
		<view class="sq" @click="album()">
			<view class="iconfont icon-image-add-fill" style="font-size: 100rpx;"></view>
			<view style="height:20rpx;"></view>
			<view class="text">Text</view>
		</view>
<!-- 		<view style="height:100rpx">
			
		</view>
		<view>
			<image @click="camera()" src="../../static/camera.png"></image>	
		</view>
		<view style="height:50rpx">
			
		</view>
		<view>
			<image @click="album()" src="../../static/library.png"></image>
		</view>
		<view style="height:100rpx">
			
		</view> -->
	</view>
</template>

<script>
	import { pathToBase64, base64ToPath } from '../../js_sdk/mmmm-image-tools/index.js'
	import helper from '../../common/common/common.js'
	const Point = class {
	  constructor(x, y) {
	    this.x = x
	    this.y = y
	    this.r = 1 + Math.random() * 2
	    this.sx = Math.random() * 2 - 1
	    this.sy = Math.random() * 2 - 1
	  }
	
	  draw(ctx) {
	    ctx.beginPath()
	    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
	    ctx.closePath()
	    ctx.fillStyle = '#fff'
	    ctx.fill()
	  }
	
	  move(w, h) {
	    this.x += this.sx
	    this.y += this.sy
	    if (this.x > w || this.x < 0) this.sx = -this.sx
	    if (this.y > h || this.y < 0) this.sy = -this.sy
	  }
	  
	
	  drawLine(ctx, p) {
	    const dx = this.x - p.x
	    const dy = this.y - p.y
	    const d = Math.sqrt(dx * dx + dy * dy)
	    if (d < 100) {
	      var alpha = (100 - d) / 300 * 1
	      ctx.beginPath()
	      ctx.moveTo(this.x, this.y)
	      ctx.lineTo(p.x, p.y)
	      ctx.closePath()
	      ctx.strokeStyle = 'rgba(255, 255, 255, ' + alpha + ')'
	      ctx.strokeWidth = 1
	      ctx.stroke()
	    }
	  }
	}
	
	// const sysinfo = uni.getSystemInfoSync()
	// console.log(uni.getSystemInfoSync())
	const w = 400
	const h = 1000
	
	export default {
		name:"classfication",
		data() {
			return {
				points: [],
				ctx: null,
				timer: null,
			};
		},
		created(){
			console.log("create!");
			for (let i = 0; i < 80; i++) {
			  this.points.push(new Point(Math.random() * w, Math.random() * h))
			}
			this.ctx = uni.createCanvasContext('star_canvas')
			// var context = uni.createCanvasContext('star_canvas')
			this.gameloop() //进行
		},
		mounted() {
		},
		beforeDestroy() {
			console.log("destroy!");
			clearTimeout(this.timer);
			this.paint();
		},
		methods:{
			/**粒子进行*/
			gameloop() {
			  this.timer = setTimeout(this.gameloop, 100);
			  // console.log('gameloop')
			  this.paint();
			},
			/**清空画布*/
			paint() {
			  this.ctx.clearRect(0, 0, w, h)
			  for (var i = 0; i < this.points.length; i++) {
			    this.points[i].move(w, h)
			    this.points[i].draw(this.ctx)
			    for (var j = i + 1; j < this.points.length; j++) {
			      this.points[i].drawLine(this.ctx, this.points[j])
			    }
			  }
			  this.ctx.draw();
			},
			camera(){
					uni.chooseImage({
					    count: 1, //默认9
					    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					    sourceType: ['camera'], //从相册选择
					    success: function (res) {
							//console.log('img',res);
							pathToBase64(res.tempFilePaths[0])
							  .then(base64 => {
								//base64 = encodeURIComponent(base64);
								let o={};
								o.img=base64;
								// this.$store.commit("logout",{});
								// this.$store.commit("addial",o);
								helper.addial(base64);
								console.log("！");
								// uni.navigateTo({
								// 	url:"../../pages/addLabel/addLabel"+"?iscamera=true&base64="+base64
								// })
								//直接请求得到结果
								uni.navigateTo({
									url:"../loading/loading?type=identify&way=camera"											
								})
							  })
							  .catch(error => {
							    console.error(error)
							  })
						}
					})
			},
			album(){
					uni.chooseImage({
						    count: 9, //默认9
						    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
						    sourceType: ['album'], //从相册选择
						    success: function (res) {
								let base64s = [];
								let count = 0;
								for( const r of res.tempFilePaths){
								pathToBase64(r)
									  .then(base64 => {
										base64s.push(base64);
										//helper已经添加完毕了
										helper.addial(base64);
										count++;
										let items = JSON.stringify(base64s);
										if(count == res.tempFilePaths.length){
											uni.navigateTo({
												url:"../loading/loading?type=identify&way=album"											
											})
											// uni.navigateTo({
											// 	url:"../../pages/addLabel/addLabel?iscamera=false&base64="+items})
											// .catch(error => {
											//   console.error(error)
											// })
											//直接跳转到识别页面
										}
								});	
							}
						},
					})
				}
		}
	}
</script>


<style>
	@import url("../../common/remark/iconfont.css");
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	image{
		width:400rpx;
		height: 400rpx;
	}

	/* 粒子背景 start*/
	.template-login2 {
	  background: linear-gradient(90deg,#8444d6,#041656);
	/*  background: linear-gradient(90deg,#C5EFFD,#233067,#28247B); */
	  min-height: 100vh
	}
	
	.mycanvas {
	  position: absolute;
	  background-size: cover;
	  width: 100vw;
	  height: 100vh;
	  justify-content: center;
	  flex-direction: column;
	  color: #fff;
	}
	
	.sq{
		width:250rpx;
		height:250rpx;
		border:1rpx solid #FFFFFF;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color:#FFFFFF;
		background-color: rgba(255,255,255,0.2);
		font-size: 30rpx;
	}
	
	
</style>
