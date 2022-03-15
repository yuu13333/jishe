<template>
	<view class="content">
		<view class="header">
			<view style="display: flex;font-size:35rpx;align-items: center;justify-content: center;">
			验证结果<view style="font-size: 25rpx;display: flex;align-items: center;justify-content: center;">({{imgNum}})</view>
			</view>
			<view class="iconfont ">
			</view>
		</view>
		<view class="scroll">
		<view style="height:100rpx;"></view>
		<responseInfo></responseInfo>
		<view style="height:200rpx;"></view>
		</view>
		<view class="footer">这是一个注脚</view>
	</view>
</template>

<script>
	export default {
		onBackPress(options) {
		    
		    return true
		},
		data() {
			return {
				imgNum:0,
				
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{
		width:100%;
		height:100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: #F0F0F0;
	}
	.header{
		height:8%;
		width:100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		position:fixed;
		top:0;
		z-index: 199;
		color:#000000;
		font-size: 40rpx;
		background-color: #FFFFFF;
	}
	.scroll{
		position:absolute;
		top:10%;
		bottom: 10%;
		width:95%;
		background-color: #F0F0F0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.footer{
		height:8%;
		width:100%;
		color:#D8D8D8;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 199;
		background-color: #FFFFFF;
	}
	.cardview{
		height: 200rpx;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	text{
		display: flex;
		width:400rpx;
		justify-content: center;
		align-items: ;
	}
	
	
	

</style>
