<template>
	<view style="width:200rpx;height:60rpx;display:flex;border-radius: 10rpx;background-color: #FFFFFF;border:1rpx solid #D8D8D8;border-left:none;justify-content: space-between;">
		<view style="width:15rpx;height:100%;border-radius: 10rpx;" :class="colorInfo"></view>
		<view style="flex:1 1 auto;color:#555555;display: flex;align-items: center;justify-content: center;font-size: 30rpx;">{{typeText}}</view>
	</view>
</template>

<script>
	export default {
		props:["colorInfo","typeText"],
		name:"labelItem",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.otherGabage{
		background-color: #5F9EA0;
		color:#FFFFFF;
		border-radius:20rpx;
	}
	
	.chiefGabage{
		background-color:#8FBC8B;
		color:#ffffff;
		border-radius:20rpx;
	}
	
	.recycleGabage{
		background-color: #708090;
		color:#FFFFFF;
		border-radius:20rpx;
	}
	
	.poisonGabage{
		background-color: #4682B4;
		color:#ffffff;
	}
	

</style>
