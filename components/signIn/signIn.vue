<template>
	<view class="form">
		<view style="height:30rpx;"></view>
		<view class="grey">
			<view style="width:50rpx;"></view>
			<view class="iconfont icon-zhuce" style="width: 10%;font-size: 35rpx;color:#999999;"></view>
			<view style="width:15rpx;"></view>
			<view style="width:5%;color:#999999;font-size:40rpx;display: flex;align-items: center;justify-content: center;">|</view>
			<view style="width:15rpx;"></view>
			<view><input type="text" @input="onInputName" placeholder="请设置用户名" placeholder-style="color:#999999;font-size:30rpx;"/></view>
		</view>
		<view style="height:30rpx;"></view>
		<view class="grey">
			<view style="width:50rpx;"></view>
			<view class="iconfont icon-mima1" style="width: 10%;font-size: 40rpx;color:#999999;"></view>
			<view style="width:15rpx;"></view>
			<view style="width:5%;color:#999999;font-size:40rpx;display: flex;align-items: center;justify-content: center;">|</view>
			<view style="width:15rpx;"></view>
			<view>
				<input :class="isvalid?'true':'false'" type="text" @input="onInputPwd" placeholder="请设置密码" placeholder-style="color:#999999;font-size:30rpx;" />
			</view>
		</view>
		<view style="height:15rpx;"></view>
		<view style="color: #E43D33;font-size: ;" v-if="!isvalid&&!(spwd===''&&repwd==='')">两次输入密码不一致</view>
		<view style="height:15rpx;"></view>
		<view class="grey">
			<view style="width:50rpx;"></view>
			<view class="iconfont icon-yanzheng" style="width: 10%;font-size: 35rpx;color:#999999;"></view>
			<view style="width:15rpx;"></view>
			<view style="width:5%;color:#999999;font-size:40rpx;display: flex;align-items: center;justify-content: center;">|</view>
			<view style="width:15rpx;"></view>
			<view>
				<input :class="isvalid?'true':'false'" type="text" @input="verifyName" placeholder="确认密码" placeholder-style="color:#999999;font-size:30rpx;" />
			</view>
		</view>
		<view style="height:30rpx;"></view>
		<view class="tip" @click="toOffLine()">
			点击此处进入游客模式体验服务。
		</view>
		<view style="height:30rpx;"></view>
		<view class="btn">
			<button class="bg-gradual-blue padding radius text-center shadow-blur" style="border-radius: 100rpx;" @click="sendToPage()">注册</button>
		</view>
		</view>	
	</view>
</template>

<script>
	export default {
		name:"signIn",
		data() {
			return {
				sname:"",
				spwd:"",
				repwd:"",
				isvalid:false,
			};
		},
		methods:{
			toOffLine(){
				this.$store.commit("offline");
				uni.navigateTo({
					url:"../welcome/welcome",
				})
			},
			onInputName(e){
				this.sname=e.detail.value;
			},
			onInputPwd(e){
				this.spwd=e.detail.value;
				if(this.spwd!==""&&this.repwd===this.spwd){
						this.isvalid=true;
				}
				else
					this.isvalid=false;
			},
			verifyName(e){
				this.repwd=e.detail.value;
				if(this.spwd!==""&&this.repwd===this.spwd){
					this.isvalid=true;
				}
				else
				this.isvalid=false;
			},
			sendToPage(){
				if(this.sname!==""&&this.isvalid){
					this.$emit("send",{sname:this.sname,spwd:this.spwd});
				}
				else if(this.sname===""){
					uni.showToast({
						title:"用户名为空!",
						image:"../../static/jinggao.png",
					})
				}
				else{
					uni.showToast({
						title:"密码非法输入!",
						image:"../../static/jinggao.png",
					});
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
		/* background-color: #F8F8F8; */
		border:1px solid #F8F8F8;
		display:flex;
		align-items: center;
		justify-content: center;
	}
	.upgrey{
		height: 120rpx;
		width:100%;
		display:flex;
		align-items: center;
		justify-content: center;	
	}
	input{
		width:60%;	
	}
	.form{
		height:54%;
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
	.true{
		color:#000000;
	}
	.false{
		color:#E43D33;
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
