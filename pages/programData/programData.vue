<template>
	<view class="content">
		<view class="header">
			<image class="programAvatar" src="../../static/logo.png"></image><view style="width:15rpx;"></view><view>Collection 1</view>
		</view>
		<view class="info">
			<view class="imageNum">
				<view style="color: #000000;font-size: 70rpx;font-weight: 500;">
					{{imgNum}}
				</view>
				<view style="height:5rpx;"></view>
				<view style="color:#000000;font-size: 30rpx;font-weight: 500;">
					IMAGES
				</view>
				<view style="height: 30rpx;"></view>
				<view style="color:#007AFF;font-size: 25rpx;">
					click here to check more.
				</view>
			</view>
			<view class="categories">
				<view style="color: #000000;font-size: 70rpx;font-weight: 500;">
					{{typeNum}}
				</view>
				<view style="height:5rpx;"></view>
				<view style="color:#000000;font-size: 30rpx;font-weight: 500;">
					CATRGORIES
				</view>
				<view style="height:30rpx;"></view>
				<view style="color:#007AFF;font-size: 25rpx;">
					click here to check more.
				</view>
			</view>
			<view class="echarts">
				
			</view>
			<view class="lastTime">
				
			</view>
			
		</view>
	</view>
</template>

<script>
	import helper from '../../common/common/common.js'
	export default {
		onLoad(){
			//通过id请求得到项目的一些信息
		},
		data() {
			return {
				projectName:'',
				imgNum:100,
				typeNum:26
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("../../common/index/iconfont.css");
	.content{
		width:100%;
		height:100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.header{
		height:8%;
		width:100%;
		border-bottom: 1rpx solid #F5F5F5;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.info{
		width:100%;
		flex:1 1 auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: column;
	}
	
	.programAvatar{
		width:80rpx;
		height:80rpx;
		border-radius: 80rpx;
	}
	
	.imageNum{
		height:20%;
		width:80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #F5F5F5;
		border-radius: 20rpx;
	}
	.categories{
		height:20%;
		width:80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #F5F5F5;
		border-radius: 20rpx;
	}
	.lastTime{
		height:10%;
		width:100%;
	}
	.echarts{
		height:30%;
		width:100%;
	}
	

</style>
