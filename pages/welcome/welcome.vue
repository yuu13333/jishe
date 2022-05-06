<template>
	<view style="background-color: #ffffff;">
		
		<view class="top" v-if="isCreate">
			<!-- <uni-transition style="width:100%;width:100%;" mode-class="fade" :duration="300" :show="isCreate"> -->
			<image src="../../static/homebg_top.png" mode="widthFix" style="width:100%;"></image>
	<!-- 		</uni-transition> -->
		</view>
		<view class="top" v-if="isteam">
			<image src="../../static/teambg.png" mode="widthFix" style="width:100%;"></image>
		</view>
		
		<view class="welcome" v-if="!islead">
			<view style="width:30%;"></view>
			<view style="width:40%;display: flex;align-items: center;justify-content: center;">Welcome {{username}} !</view>
			<view style="width:30%;height:100%;display: flex;align-items: center;justify-content: center;">
			<dt-dropdown :list="list" :current="dropCurrent" @onClick="dropDownChange"></dt-dropdown>
			</view>
		</view>
		<view class="content">
			<!-- <uni-transition mode-class='fade' :duration="500"> -->
			<uni-transition style="width:100%;width:100%;" mode-class="fade" :duration="500" :show="!isCreate&&!islead&&!isteam">
			<!--修改-->
			<!-- <classfication v-if="!isCreate&&!islead&&!isteam"></classfication> -->
			<taskCommunity v-if="!isCreate&&!islead&&!isteam"></taskCommunity>
			</uni-transition>
			<!-- <uni-transition style="width:100%;" mode-class="fade" :duration="500" :show="isCreate&&islog"> -->
			<createProgram :programinfo="programInfo" v-if="isCreate&&islog&&!islead&&!isteam"></createProgram>
<!-- 			</uni-transition> -->
			<uni-transition style="width:100%;width:100%;" mode-class="fade" :duration="500" :show="isCreate&&!islog&&!islead">
			<noProgram v-if="!islog&&!islead&&isCreate"></noProgram>
			</uni-transition>
			<uni-transition style="width:100%;width:100%;" mode-class="fade" :duration="500" :show="isteam&&!islog&&!islead">
			<noProgram v-if="!islog&&!islead&&isteam"></noProgram>
			</uni-transition>
			<uni-transition style="width:100%;width:100%;" mode-class="fade" :duration="500" :show="islead">
			<dataCommunity v-if="islead"></dataCommunity>
			</uni-transition>
			<uni-transition style="width:100%;width:100%;" mode-class="fade" :duration="500" :show="isteam&&islog">
			<groupWork v-if="isteam&&islog"></groupWork>
			</uni-transition>
			<!-- <view style="flex:1 1 auto;background-color: #FFFFFF;"></view> -->
			<!-- </uni-transition> -->
		</view>
		<view class="tabbar footerfixed">
		  <view class="action navbar__item -green" @click="create()">
		    <view class="bar-icon">
		      <view class="iconfont icon-fuzhiyemianxinjian navbar__icon">
		      </view>
		    </view>
		    <view class="-green bar-text">
		      <text style="margin-bottom:-100rpx;font-size:20rpx;color:#303030;">创建项目</text>
		    </view>
		  </view>
		  <view class="action navbar__item -yellow" @click="teamwork()">
		     <view class="bar-icon">
		       <view class="iconfont icon-shouye navbar__icon" style="font-size:40rpx;">
		       </view>
		     </view>
		     <view class="-yellow bar-text">
		       <text style="margin-bottom:-100rpx;font-size:20rpx;color:#303030;">团队协作</text>
		     </view>
		   </view>
		  <view class="action navbar__item -blue" @click="classify()">
		    <view class="bar-icon">
		      <view class="iconfont icon-iconfontyouxihudong navbar__icon">
		      </view>
		    </view>
		    <view class="-blue bar-text">
		      <text style="margin-bottom:-100rpx;font-size:20rpx;color:#303030;">任务社区</text>
		    </view>
		  </view>
		 
		  <view class="action navbar__item -purple" @click="instruct()">
		    <view class="bar-icon">
		      <view class="iconfont icon-bangzhu navbar__icon" style="font-size:40rpx;">
		       
		      </view>
		    </view>
		    <view class="-purple bar-text">
		      <text style="margin-bottom:-100rpx;font-size:20rpx;color:#303030;">数据社区</text>
		    </view>
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
				// console.log("token: "+this.token);
				const r=await this.request({
					url: 'http://8.130.100.210:80/user_info',
					method:"GET",
					data: {
						token:this.token,
					 }, })
				// console.log(r.slice(1,500));
				if(r.code===200){
					this.$store.commit("setlist",{id:r.collection_list});
					this.programInfo=r.collection_list;
					this.username=r.username;
					// console.log(r.collection_list);
				}
				else{
					console.log(r.slice(1,500));
					uni.showToast({
						title:"请求失败！",
						image:"../../static/jinggao.png",
						duration:800,
					})
				}
				this.$nextTick(()=>{
						this.isCreate=this.isCreate;
				});
				// uni.showToast({
				// 	title:"数据集已更新",
				// 	icon:"../../static/chenggong_1.png",
				// })
			}catch(error){
				console.log(error.slice(1,10));
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
				islead:false,
				isteam:false,
				backButtonPress:0,
				islog:true,
				token:"",
				programInfo:[],
				list:[
					"切换账号",
					"退出登录",
				],
				dropCurrent:0,
				username:'',
				streamindex:0,
			}
		},
		methods: {
			create(){
				this.isCreate = true;
				this.islead = false;
				this.isteam = false;
			},
			classify(){
				this.isCreate = false;
				this.islead = false;
				this.isteam = false;
			},
			instruct(){
				this.isCreate = false;
				this.islead = true;
				this.isteam = false;
			},
			teamwork(){
				this.isCreate = false;
				this.islead = false;
				this.isteam = true;
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
										this.isCreate=this.isCreate;
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
						this.isCreate=this.isCreate;
					}
					
				}
			}
		}
	}
</script>

<style>
	@import url("../../common/requestInfo/iconfont.css");
	@import url("../../common/welcome/iconfont.css");
	
	.top{
		width:100%;
		height:300rpx;
	}
	.welcome{
		width:100%;
		height:8%;
		position: fixed;
		top:0;
		color:#ffffff;
		display:flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		/* border-bottom: solid 1rpx #C0C0C0; */
		z-index: 19999;
	}
	.content{
		height:63%;
		display: flex;
		flex-direction: column;
	}
	.btn{
		height:8%;
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
		color:#555555;
		display: flex;
		font-size: 35rpx;
		align-items: center;
		justify-content: center;
		border:none;
	}
	button::after{
		border: none;
	}
	
	/* 底部tabbar start*/
	.footerfixed{
	 position: fixed;
	 width: 100%;
	 bottom: 0;
	 z-index: 999;
	 background-color: #FFFFFF;
	 box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	}
	
	.tabbar {
	  display: flex;
	  align-items: center;
	  min-height: 110rpx;
	  justify-content: space-between;
		padding: 0;
		height: calc(110rpx + env(safe-area-inset-bottom) / 2);
		padding-bottom: calc(env(safe-area-inset-bottom) / 2);
	}
	
	.tabbar .action {
		font-size: 22rpx;
		position: relative;
		flex: 1;
		text-align: center;
		padding: 0;
		display: block;
		height: auto;
		line-height: 1;
		margin: 0;
		overflow: initial;
	}
	
	.tabbar .action .bar-icon {
		width: 100rpx;
		position: relative;
		display: block;
		height: auto;
		margin: 0 auto 10rpx;
		text-align: center;
		font-size: 42rpx;
	}
	
	.tabbar .action .bar-icon image {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
	}
	
	/* 底部标签栏动画 */
	.navbar__item .bar-text {
	  font-variant: small-caps;
	  margin: 0;
	  padding: 0;
	  display: inline-flex;
	  text-align: center;
	  justify-content: center;
	  align-items: center;
	  white-space: nowrap;
	  position: relative;
	  width: 50rpx;
	  height: 50rpx;
	  background-size: cover;
	  background-position: center;
	  vertical-align: middle;
	  background-color: currentColor;
	  border-radius: 50%;
	  transform: scale(0.8);
	  opacity: 0;
	  transition: all 0.25s cubic-bezier(0.71, 0.03, 0.23, 0.95);
	}
	
	.navbar__item.-blue {
	  color: #06b8ff;
	}
	
	.navbar__item.-green {
	  color: #91CB74;
	}
	
	.navbar__item.-yellow {
	  color: #f8cd4b;
	}
	
	.navbar__item.-purple {
	  color: #8444d6;
	}
	
	.bar-text.-blue {
	  color: #06b8ff;
	}
	
	.bar-text.-green {
	  color: #91CB74;
	}
	
	.bar-text.-yellow {
	  color: #f8cd4b;
	}
	
	.bar-text.-purple {
	  color: #8444d6;
	}
	
	.navbar__item:hover .bar-text {
	  transform: translateY(-70rpx) scale(1.4);
	  opacity: 1;
	  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1),
	    -1px -1px 5px rgba(255, 255, 255, 1);
	}
	
	.navbar__item:hover::before {
	  opacity: 1;
	}
	
	.navbar__item:hover::after {
	  opacity: 0.4;
	}
	
	.navbar__item:hover .navbar__icon {
	  transform: translateY(-42rpx) scale(1);
	  color: #fff;
	  transition-delay: 0.02s, 0.02s;
	}
	
	.navbar__icon {
	  bottom: -26rpx;
	  transition: all 0.25s cubic-bezier(0.71, 0.03, 0.23, 0.95);
	  transition-delay: 0.02s;
	  display: inline-block;
	  position: relative;
	  z-index: 2;
	  
	}
	
	.color{
		color:#007AFF;
	}

</style>
