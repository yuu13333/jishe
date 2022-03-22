<template>
	<view class="content">
		<view class="center">
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
					Go
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

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
