<template>
	<view class="content">
		<view class="icon" style="background-image: url(../../static/disconnect.png);">
		</view>
		<view class="text">
			<view style="font-size: 40rpx; color:#555555;">网络竟然崩溃了</view>
			<view style="font-size: 30rpx;color:#808080;">是否要切换至离线模式？</view>
		</view>
		<view class="btn">
			<button style="width:200rpx;height:100rpx;border-radius: 10rpx;" >切换</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.icon{
		height:300rpx;
		width:300rpx;
	}
	.content{
		height:100vh;
		width:100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

</style>
