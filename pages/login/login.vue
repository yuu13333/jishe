<template>
	<view class="content">
		<view style="height: 5%;"></view>
		<view class="title">
			{{islogin?'欢迎来到垃圾分类app.':'请创建一个新账号.'}}
		</view>
		<login v-if="islogin" @send="getLoginValue"></login>
		<signIn v-if="issign" @send="getSignValue"></signIn>
		<view style="height: 30rpx;"></view>
		<view class="sign">
			<view class="column" @click="tologin()">
				<view class="iconfont icon-shouji" style="font-size: 40rpx;">
				</view>
				<view style="height: 15rpx;"></view>
				<view class="t">登录</view>
			</view>
			<view style="width: 5%;color:#000000;">|</view>
			<view class="column" @click="sign()">
				<view class="iconfont icon-zhuce" style="font-size: 40rpx;">
				</view>
				<view style="height: 15rpx;"></view>
				<view class="t">注册</view>
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
				lname:"",
				lpwd:"",
				sname:"",
				spwd:"",
				backButtonPress:0,
			}
		},
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
		methods: {
			sign(){
				//注册
				this.issign=true;
				this.islogin=false;
			},
			tologin(){
				//验证
				this.islogin=true;
				this.issign=false;
			},
			async getLoginValue(res){
				this.lname=res.lname;
				this.lpwd=res.lpwd;
				try{
					const r = await this.request({
						url: 'http://192.168.43.3:8080/login',
						method:"GET",
						sslVerify:false,
						data: {
							username:this.lname,
							password:this.lpwd,
					     }, })
					if(r&&r.status!==500){
						console.log(r.status);
						this.$store.commit("login",{userName:this.lname,token:r});
						uni.navigateTo({
							url:"../welcome/welcome?from=login",
						})	
					}
					else{
						uni.showToast({
							image:"../../static/jinggao.png",
							title:"用户名/密码错误",
							duration:800,
						})
					}
				}catch(e){
					console.log(e);
				}
			},
			async getSignValue(res){
				this.sname=res.sname;
				this.spwd=res.spwd;
				//测试注册请求
				try{
					const r = await this.request({
						url: 'http://192.168.43.3:8080/register',
						method:"GET",
						data: {
							username:this.sname,
							password:this.spwd,
					     }, })
					if(r&&r.status!=="405"){
						//注册并登录
						console.log(r);
						this.$store.commit("login",{userName:this.sname,token:r});
						uni.navigateTo({
							url:"../welcome/welcome?from=register",
						})	
					}
					else{
						uni.showToast({
							image:"../../static/jinggao.png",
							title:"用户名已存在！",
							duration:800,
						})
					}
				}catch(e){
					console.log(e);
				}
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
/* 		color:#007AFF; */
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
