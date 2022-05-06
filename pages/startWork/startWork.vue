<template>
	<view style="height:100vh" class="content template-login2">
		<canvas canvas-id="star_canvas" class="mycanvas" style="width:750rpx;height:100vh;pointer-events: none;"></canvas>
		<view style="width:100%;display: flex;justify-content: center;">
			<view class="sq" @click="photo()">
				<view class="iconfont icon-cameraaddfill" style="font-size: 100rpx;"></view>
				<view style="height:20rpx;"></view>
				<view class="text">图片裁剪</view>
			</view>
			<view style="width:50rpx;"></view>
			<view class="sq" @click="addLabel()">
				<view class="iconfont icon-image-add-fill" style="font-size: 100rpx;"></view>
				<view style="height:20rpx;"></view>
				<view class="text">添加标签</view>
			</view>
		</view>
		<view style="height:50rpx;"></view>
		<view style="width:100%;display: flex;justify-content: center;">
			<view class="sq" @click="identify()">
				<uni-icons type="scan" size="50" color="#fff"></uni-icons>
				<view style="height:20rpx;"></view>
				<view class="text">目标检测</view>
			</view>
			<view style="width:50rpx;"></view>
			<view class="sq" @click="check()">
				<uni-icons type="map" size="50" color="#fff"></uni-icons>
				<view style="height:20rpx;"></view>
				<view class="text">当前进度</view>
			</view>
		</view>
		
	
		
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
			photo(){
					uni.navigateTo({
					        //url: "../../uni_modules/buuug7-img-cropper/pages/cropper",
							url:"../../uni_modules/buuug7-img-cropper/pages/cropper",
					        events: {
					          imgCropped(event) {
					            // 监听裁剪完成
					            // 返回的 event 中包含了已经裁剪好图片的base64编码字符串
					            // 你可以使用 <image :src="imgDataUrl" mode="aspectFit"></image> 组件来展示裁剪后的图片
					            // 或者你可以将该字符串通过接口上传给服务器用来保存
					            console.log(event);
					            base64 = event.data;
					            // do whatever you want
					            // upload to server
					          },
					        },
					      });
			},
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
		width:280rpx;
		height:280rpx;
		border:1rpx solid #FFFFFF;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color:#FFFFFF;
		background-color: rgba(255,255,255,0.2);
		font-size: 28rpx;
	}
	
	
</style>
