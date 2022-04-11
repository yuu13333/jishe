<template>
	<view style="height:1000rpx;width:100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
		<view style="height:80rpx;"></view>
		<view class="card cu-avatar">
		<view style="width:30%;height:100%;display: flex;justify-content: center;align-items: center;">
			<image style="width:100rpx;height:100rpx;" src="../../static/teamwork/team1.png" mode="widthFix"></image>
		</view>
		<view style="flex:1 1 auto;height:100%;width:40%;display: flex;flex-direction: column;justify-content:center;align-items: flex-start;">
			<view style="font-size: 32rpx;color:#000000;" >协作中数据集
			</view>
			<view style="height:10rpx;"></view>
			<view style="font-size:25rpx;color:#A5A5A5;">与团队成员共同管理</view>
			</view>
		<view style="width:30%;height:100%;">
		</view>
		<view class="cu-tag badge">99+</view>
		</view>
		
		<view style="height:40rpx"></view>
		<view class="card cu-avatar">
		<view style="width:30%;height:100%;display: flex;justify-content: center;align-items: center;">
			<image style="width:100rpx;height:100rpx;" src="../../static/teamwork/team2.png" mode="widthFix"></image>
		</view>
		<view style="flex:1 1 auto;height:100%;width:40%;display: flex;flex-direction: column;justify-content:center;align-items: flex-start;">
			<view style="font-size: 32rpx;color:#000000;">未处理数据集
			</view>
			<view style="height:10rpx;"></view>
			<view style="font-size:25rpx;color:#A5A5A5;">他人发来的协作请求</view>
			</view>
		<view style="width:30%;height:100%;">
		</view>
		<view class="cu-tag badge">99+</view>
		</view>
		<view style="height:40rpx"></view>
		<view class="card cu-avatar">
		<view style="width:30%;height:100%;display: flex;justify-content: center;align-items: center;">
			<image style="width:100rpx;height:100rpx;" src="../../static/teamwork/team3.png" mode="widthFix"></image>
		</view>
		<view style="flex:1 1 auto;height:100%;width:40%;display: flex;flex-direction: column;justify-content:center;align-items: flex-start;">
			<view style="font-size: 32rpx;color:#000000;">待接收数据集</view>
			<view style="height:10rpx;"></view>
			<view style="font-size:25rpx;color:#A5A5A5;">已发送的协作请求</view>
			</view>
		<view style="width:30%;height:100%;">
		</view>
		<view class="cu-tag badge">99+</view>
		</view>
		<view style="height:80rpx"></view>
		<button class="bg-gradual-purple padding text-center shadow-blur"><view class="iconfont icon-tianjiaxiangmu1" style="font-size: 60rpx;"></view><view style="width:30rpx;"></view>创建团队协作项目</button>
	</view>
</template>

<script>
	export default {
		name:"groupWork",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	@import url("../../colorui/main.css");
	@import url("../../colorui/icon.css");
	button{
		width:80%;
		height:100rpx;
		color:#303133;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 100rpx;
	}
	.card{
		display: flex;
		height:180rpx;
		width:80%;
		border-radius: 20rpx;
		border:1rpx solid #D8D8D8;
	}
</style>
