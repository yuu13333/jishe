<template>
	<view>
		<view class="welcome">
			<view style="width:30%;"></view>
			<view style="width:40%;display: flex;align-items: center;justify-content: center;">Welcome</view>
			<view style="width:30%;display: flex;align-items: center;"><view @click="toLogin()" class="iconfont icon-tianjiayonghu" style="position:absolute;right:30rpx;font-size: 55rpx;color:#555555"></view></view>
		</view>
		<view class="content">
			<classfication v-if="!isCreate"></classfication>
			<createProgram v-if="isCreate"></createProgram>
		</view>
		<view class="btn">
			<view class="btn1">
			<button :class="isCreate?'active':''" @click="create()">
			<view class="iconfont icon-fuzhiyemianxinjian" style="font-size: 50rpx;"></view>
			<view style="width:20rpx"></view>创建项目</button>
			</view>
			<view class="btn1">
			<button :class="!isCreate?'active':''" @click="classify()">
			<view class="iconfont icon-iconfontyouxihudong" style="font-size: 50rpx;"></view>
			<view style="width:20rpx"></view>图片识别</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import helper from '../../common/common/common.js'
	export default {
		onBackPress(options) {
			//返回两次退出应用
			this.backButtonPress++;
					if (this.backButtonPress > 1) { 
						plus.runtime.quit();
					} else {
						plus.nativeUI.toast('再按一次退出应用');
					} 
					setTimeout(()=> {
						this.backButtonPress = 0;
					}, 1000);
					return true;
		},
		data() {
			return {
				isCreate:true,
				backButtonPress:0,
			}
		},
		methods: {
			create(){
				this.isCreate = true;
			},
			classify(){
				this.isCreate = false;
			},
			toLogin(){
				//关于账号的清空操作
				//首先确定没有未识别照片的残留
				if(helper.getial().length){
					
					//提示一下
				}
				//先不清除缓存的照片和账号id信息
				//跳转
				uni.navigateTo({
					url:"../login/login"
				})
			}
		}
	}
</script>

<style>
	@import url("../../common/requestInfo/iconfont.css");
	@import url("../../common/welcome/iconfont.css");
	.welcome{
		width:100%;
		height:8%;
		position: fixed;
		top:0;
		color:#000000;
		background-color: #FFFFFF;
		display:flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		border-bottom: solid 1rpx #C0C0C0;
		z-index: 19999;
	}
	.content{
		background-color: #F8F8F8;
		height:83%;
	}
	.btn{
		height:9%;
		position:fixed;
		bottom: 0;
		display: flex;
		flex-direction: row;
	}
	.active{
		background-color: #007AFF;
		color:#ffffff;
	}
	.btn1{
		display: flex;
		width:375rpx;
		height: 100%;
	}
	
	button{
		background-color: #FFFFFF;
		width:375rpx;
		color:#000000;
		display: flex;
		font-size: 35rpx;
		align-items: center;
		justify-content: center;
		border:none;
	}
	button::after{
		border: none;
	}

</style>
