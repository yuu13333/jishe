<template>
		<view class="form">
			<view class="grey">
				<view style="width:50rpx;"></view>
				<view class="iconfont icon-shouji" style="width: 10%;font-size: 45rpx;"></view>
				<view style="width:15rpx;"></view>
				<view style="width:5%;color:#000000;font-size:40rpx;display: flex;align-items: center;justify-content: center;">|</view>
				<view style="width:15rpx;"></view>
				<view><input type="text" @input="onInputName" placeholder="请输入用户名" placeholder-style="color:#000000;"/></view>
			</view>
			<view class="grey">
				<view style="width:50rpx;"></view>
				<view class="iconfont icon-mima" style="width: 10%;font-size: 45rpx;"></view>
				<view style="width:15rpx;"></view>
				<view style="width:5%;color:#000000;font-size:40rpx;display: flex;align-items: center;justify-content: center;">|</view>
				<view style="width:15rpx;"></view>
				<view>
					<input type="text" @input="onInputPwd" placeholder="请输入密码" placeholder-style="color:#000000;" />
				</view>
			</view>
			<view class="tip" >
				<text @click="toOffLine()">点击此处进入游客模式，支持离线识别。</text>
			</view>
			<view class="btn">
				<button class="login" @click="SendtoPage()">登录</button>
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
	.grey{
		height: 120rpx;
		width:500rpx;
		border-radius: 100rpx;
		background-color: #F8F8F8;
		display:flex;
		align-items: center;
		justify-content: center;
	}
	input{
		width:60%;	
	}
	.form{
		height:44%;
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
		color:#999999;
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
		background-color: #000000;
		height: 105rpx;
		width:500rpx;
		font-size:35rpx;
		border-radius: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
