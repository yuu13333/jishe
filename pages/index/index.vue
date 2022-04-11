<template>
	<view class="content">
		<view class="center" :animation="animationData">
			<view class="icons">
				<view class="iconfont icon-instagramxiangji"></view>
				<view class="iconfont icon-wrong-b"></view>
				<view class="iconfont icon-xiangmu" style="font-size: 85rpx;"></view>
			</view>
			<view class="text">
				您的私人数据集管家
			</view>
			<view class="btn">
				<button class="goBtn" @click="navto()">
					<text :animation="animationData1">Go</text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				animationData: {},
				animationData1:{}
			}
		},
		onLoad() {
			var animation = uni.createAnimation({
			　　　　duration: 800,
			　　　　timingFunction: 'ease',
			　　})
			 
			　　// 这里就完成第一组动画
			　　this.animation = animation
			　　animation.translateY(40).step()
			　　this.animationData = animation.export()
			 
			　　// 这里是接在第一组动画后面的
			　　setTimeout(function() {
					var animation1 = uni.createAnimation({
					　　　　duration: 3000,
					　　　　timingFunction: 'ease',
					　　})
					this.animation = animation1
					animation1.scale(1.2).step({
						duration:1000
					})
					animation1.scale(0.8).step({
						duration:1000
					})
					animation1.scale(1).step({
						duration:1000
					})
					this.animationData1=animation1.export()
			　　}.bind(this), 800)

		},
		methods: {
			navto(){
				uni.navigateTo({
					url: '../login/login'});
			}
		}
	}
</script>

<style>
	@import url("../../common/index/iconfont.css");
	.content {
		background-image: url("../../static/background.jpg");
		background-size: cover;
		width:100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button{
		color:#ffffff;
		font-size:40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.center{
		width:40%;
		height:28%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transform: translateY(-40);
	}
	.text{
		color:#FFFFFF;
		font-size: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.goBtn{
		width:120rpx;
		height: 120rpx;
		border-radius: 100rpx;
		background-color: #DD524D;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.icons{
		display:flex;
		align-items: center;
		justify-content: center;
	}
	
</style>
