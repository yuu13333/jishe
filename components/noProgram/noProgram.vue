<template>
	<view style="height:1000rpx;"  class="content">
		<view style="height:600rpx;color:#CCCCCC" class="content">
			<view class="iconfont icon-delete1" style="font-size:200rpx;"></view>
			<view style="height: 60rpx;"></view>
			<view style="font-size: 35rpx;display: flex;flex-direction: column;justify-content: center;align-items: center;"><text>当前处于未登录状态，</text><text>查看数据集列表请先登录！</text></vieW>
			<view style="height: 30rpx;"></view>
			<view style="font-size: 35rpx;display: flex;flex-direction: column;justify-content: center;align-items: center;"><view>Is currently not signed in,</view>
				<view>To view the list of datasets, </view>
<view>please log in first!</view></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"noProgram",
		data() {
			return {
				
			};
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

</style>
