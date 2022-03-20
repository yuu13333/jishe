<template>
	<view>
		<view class="header">
			<view style="width:2rpx"></view>
			<view style="display: flex;font-size:35rpx;align-items: center;justify-content: center;">
			验证结果<view style="font-size: 25rpx;display: flex;align-items: center;justify-content: center;">({{imgNum}})</view>
			</view>
			<view style="width:300rpx"></view>
			<view class="iconfont icon-shouyefill" style="font-size: 55rpx;color:#555555" @click="toHomePage()">
			</view>
			<view style="width:2rpx"></view>
		</view>
		<view class="content">
			<responseInfo></responseInfo>
		</view>
		<view class="footer" style="background-color: #FFFFFF;width: 100%;">这是注脚</view>
	</view>
</template>

<script>
	import helper from '../../common/common/common.js'
	export default {
		onLoad(){
			helper.clearial();
			helper.cleariwl();
		},
		onBackPress(options) {	    
		    return true
		},
		data() {
			return {
				imgNum:6,
				
				
			}
		},
		methods: {
			toHomePage(){
				helper.setProject('');
				uni.navigateTo({
					url:"../welcome/welcome"
				})
			}
			
		}
	}
</script>

<style>
	@import url("../../common/requestInfo/iconfont.css");
	.header{
		width:100%;
		height:8%;
		position: fixed;
		top:0;
		color:#000000;
		background-color: #FFFFFF;
		display:flex;
		align-items: center;
		justify-content: space-between;
		font-size: 30rpx;
		border-bottom: solid 1rpx #C0C0C0;
		z-index: 19999;
	}
	.content{
		background-color: #F8F8F8;
		height:83%;
	}
	.footer{
		height:7%;
		position:fixed;
		bottom: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

</style>
