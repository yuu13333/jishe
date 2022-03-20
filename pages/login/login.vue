<template>
	<view class="content">
		<view style="height: 5%;"></view>
		<view class="title">
			欢迎来到垃圾分类app
		</view>
		//加个动画
		<login v-if="islogin"></login>
		<signIn v-if="issign"></signIn>
		<verify v-if="isverify"></verify>
<!-- 		<view class="form">
			<view class="grey">
				<view style="width:50rpx;"></view>
				<view class="iconfont icon-youxiang2" style="width: 10%;font-size: 45rpx;"></view>
				<view style="width:15rpx;"></view>
				<view style="width:5%;color:#000000;font-size:40rpx;display: flex;align-items: center;justify-content: center;">|</view>
				<view style="width:15rpx;"></view>
				<view><input type="text" placeholder="请输入邮箱" placeholder-style="color:#000000;"/></view>
			</view>
			<view class="grey">
				<view style="width:50rpx;"></view>
				<view class="iconfont icon-mima" style="width: 10%;font-size: 45rpx;"></view>
				<view style="width:15rpx;"></view>
				<view style="width:5%;color:#000000;font-size:40rpx;display: flex;align-items: center;justify-content: center;">|</view>
				<view style="width:15rpx;"></view>
				<view>
					<input type="text" placeholder="请输入密码" placeholder-style="color:#000000;" />
				</view>
			</view>
		</view> -->
		<view class="tip">
			未注册的邮箱验证后自动创建app账号。
		</view>
		<view class="btn">
			<button class="login" @click="login()">{{islogin?"登录":!hasgain?"获取验证码":issign?"注册":"登录"}}</button>
		</view>
		<view style="height: 30rpx;"></view>
		<view class="sign">
			<view class="column" @click="sign()">
				<view class="iconfont icon-zhuce" style="font-size: 40rpx;">
				</view>
				<view style="height: 15rpx;"></view>
				<view class="t">注册</view>
			</view>
			<view style="width: 5%;color:#000000;">|</view>
			<view class="column" @click="verify()">
				<view class="iconfont icon-yanzheng" style="font-size: 40rpx;">
				</view>
				<view style="height: 15rpx;"></view>
				<view class="t">验证</view>
			</view>
			<view style="width: 5%;color:#000000;">|</view>
			<view class="column" @click="tologin()">
				<view class="iconfont icon-shouji" style="font-size: 40rpx;">
				</view>
				<view style="height: 15rpx;"></view>
				<view class="t">登录</view>
			</view>
			
		</view>
		<view class="blank"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				islogin:true,
				issign:false,
				isverify:false,
				hasgain:false,
			}
		},
		methods: {
			login(){
				//登录工作成功了再跳转
				uni.navigateTo({
					url:"../welcome/welcome",
				})
			},
			sign(){
				//注册
				this.issign=true;
				this.islogin=false;
				this.isverify=false;
			},
			verify(){
				//验证
				this.islogin=false;
				this.isverify=true;
				this.issign=false;
				
			},
			tologin(){
				//验证
				this.islogin=true;
				this.isverify=false;
				this.issign=false;
			}
		}
	}
</script>

<style>
	@import url("../../common/login/iconfont.css");
	.t{
		display:flex;
		width:150rpx;
		align-items: center;
		justify-content: center;
	}
	.column{
		display: flex;
		flex-direction: column;
		height:150rpx;
		justify-content: center;
		align-items: center;
	}
	.sign{
		height:10%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.blank{
		height:15%;
	}
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
	.content{
		width:100%;
		height:100vh;
		display:flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.title{
		height:20%;
		display:flex;
		align-items: center;
		justify-content: center;
		color:#000000;
		font-size:40rpx;
	}
	.form{
		height:24%;
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
