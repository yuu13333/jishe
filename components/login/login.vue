<template>
		<view class="form">
			<view style="height:50rpx;"></view>
			<view class="grey">
				<view style="width:50rpx;"></view>
				<view class="iconfont icon-shouji" style="width: 10%;font-size: 40rpx;color:#999999;"></view>
				<view style="width:15rpx;"></view>
				<view style="width:5%;color:#999999;font-size:40rpx;display: flex;align-items: center;justify-content: center;">|</view>
				<view style="width:15rpx;"></view>
				<view><input type="text" @input="onInputName" placeholder="请输入用户名" placeholder-style="color:#999999;font-size:30rpx;"/></view>
			</view>
			<view style="height:30rpx;"></view>
			<view class="grey">
				<view style="width:50rpx;"></view>
				<view class="iconfont icon-mima" style="width: 10%;font-size: 40rpx;color:#999999;"></view>
				<view style="width:15rpx;"></view>
				<view style="width:5%;color:#999999;font-size:40rpx;display: flex;align-items: center;justify-content: center;">|</view>
				<view style="width:15rpx;"></view>
				<view>
					<input type="text" @input="onInputPwd" placeholder="请输入密码" placeholder-style="color:#999999;font-size:30rpx;" />
				</view>
			</view>
			<view style="height:50rpx;"></view>
			<view class="tip" >
				<text @click="toOffLine()">点击此处进入游客模式体验服务。</text>
			</view>
			<view style="height:50rpx;"></view>
			<view class="btn">
				<button class="bg-gradual-blue padding radius text-center shadow-blur" style="border-radius: 100rpx;" @click="SendtoPage()">登录</button>
			</view>
		</view>
</template>

<script>
	export default {
		name:"login",
		data() {
			return {
				lname:"",
				lpwd:"",
			};
		},
		methods:{
			onInputName(e){
				this.lname=e.detail.value;
			},
			onInputPwd(e){
				this.lpwd=e.detail.value;
			},
			toOffLine(){
				this.$store.commit("offline");
				uni.navigateTo({
					url:"../welcome/welcome",
				})
			},
			SendtoPage(){
				if(this.lname!==""&&this.lpwd!==""){
					this.$emit("send",{lname:this.lname,lpwd:this.lpwd});
				}
				else if(this.lname===""){
					uni.showToast({
						title:"用户名为空!",
						image:"../../static/jinggao.png",
					})
				}
				else{
					uni.showToast({
						title:"密码为空!",
						image:"../../static/jinggao.png",
					})
				}
			}
		}
	}
</script>

<style>
	@import url("../../common/login/iconfont.css");
	@import url("../../colorui/main.css");
	@import url("../../colorui/icon.css");
	.grey{
		height: 90rpx;
		width:500rpx;
		border-radius: 100rpx;
		border:1px solid #F8F8F8;
		display:flex;
		align-items: center;
		justify-content: center;
	}
	input{
		width:60%;	
	}
	.form{
		display:flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.tip{
		height:10%;
		display:flex;
		align-items: center;
		justify-content: center;
		color:#CCCCCC;
		font-size:30rpx;
	}
	.btn{
		height:10%;
		display:flex;
		align-items: center;
		justify-content: center;
	}
	button{
		color:#FFFFFF;
		height: 80rpx;
		width:500rpx;
		font-size:35rpx;
		border-radius: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	button:after{
		border:none;
	}
</style>
