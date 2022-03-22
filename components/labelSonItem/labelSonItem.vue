<template>
	<view>
		<view style="width:200rpx;height:40rpx;display:flex;border-radius: 10rpx;background-color: #FFFFFF;justify-content: space-between;">
			<view style="flex:1 1 auto;color:#555555;display: flex;align-items: center;justify-content: center;font-size: 30rpx;">+ {{typeText}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["typeText"],
		name:"labelSonItem",
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
