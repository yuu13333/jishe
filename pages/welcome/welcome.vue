<template>
	<view style="background-color: #F8F8F8;">
		<view class="welcome">
			<view style="width:30%;"></view>
			<view style="width:40%;display: flex;align-items: center;justify-content: center;">Welcome</view>
			<view style="width:30%;height:100%;display: flex;align-items: center;justify-content: center;">
			<dt-dropdown :list="list" :current="dropCurrent" @onClick="dropDownChange"></dt-dropdown>
			</view>
		</view>
		<view class="content">
			<classfication v-if="!isCreate"></classfication>
			<createProgram :programinfo="programInfo" v-if="isCreate&&islog"></createProgram>
			<noProgram v-if="isCreate&&!islog"></noProgram>
			<view style="flex:1 1 auto;background-color: #F8F8F8;"></view>
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
		onLoad(e) {
			console.log("welcome!");
			this.islog=this.$store.state.islog;
			this.token=this.$store.state.token;
			console.log(this.$store.state.userName)			
			if(e.from==="login"&&this.islog){
				uni.showToast({
					image:"../../static/chenggong_1.png",
					title:"登录成功！",
					duration:700,
				})
			};
			if(e.from==="register"&&this.islog){
				uni.showToast({
					image:"../../static/chenggong_1.png",
					title:"注册成功！",
					duration:700,
				})
			};
		},
		async onShow() {
		//回退时已经清除过了
		// this.$store.commit("clearProject");
		//请求项目信息(放在onShow中)
		console.log("!");
		if(this.islog){
			try{
				const r=await this.request({
					url: 'http://192.168.43.3:8080/getProgramInfo',
					method:"GET",
					data: {
						token:this.token,
					 }, })
				console.log(r);
				this.programInfo=r;
				this.$nextTick(()=>{
						this.isCreate=this.isCreate;
					});
				// uni.showToast({
				// 	title:"数据集已更新",
				// 	icon:"../../static/chenggong_1.png",
				// })
			}catch(error){
				console.log(error);
			}
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
		data() {
			return {
				isCreate:true,
				backButtonPress:0,
				islog:true,
				token:"",
				programInfo:[],
				list:[
					"切换账号",
					"退出登录",
				],
				dropCurrent:0,
			}
		},
		methods: {
			create(){
				this.isCreate = true;
			},
			classify(){
				this.isCreate = false;
			},
			dropDownChange(index){
				console.log(this.list[index]);
				this.dropCurrent = index;
				if(index===0){
					//关于账号的清空操作
					//首先确定没有未识别照片的残留
					if(helper.getial().length){
						uni.showModal({
							content:"还有未识别的照片，是否要继续切换账号？",
							title:"Tip",
							success: function (res) {
									if (res.confirm) {
										helper.clearial();
										helper.cleariwl();
										uni.navigateTo({
											url:"../login/login"
										})
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
						});
						//提示一下
					}
					else{
						uni.navigateTo({
							url:"../login/login"
						});
					}
				}
				else if(index===1){
					if(!this.$store.state.islog){
						uni.showToast({
							image:"../../static/jinggao.png",
							title:"当前未登录",
							duration:800,
						});
						return;
					}
					if(helper.getial().length){
						uni.showModal({
							content:"还有未识别的照片，是否丢弃？",
							title:"Tip",
							success: function (res) {
									if (res.confirm) {
										helper.clearial();
										helper.cleariwl();
										this.$store.commit("logout",{});
										uni.showToast({
											image:"../../static/chenggong_1.png",
											title:"成功退出登录",
											duration:800
										})
										this.islog=this.$store.state.islog;
										this.token=this.$store.state.token;
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
						});
						//提示一下
					}
					else{
						helper.clearial();
						helper.cleariwl();
						this.$store.commit("logout",{});
						uni.showToast({
							image:"../../static/chenggong_1.png",
							title:"成功退出登录",
							duration:800
						})
						this.islog=this.$store.state.islog;
						this.token=this.$store.state.token;
					}
					
				}
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
		display: flex;
		flex-direction: column;
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
