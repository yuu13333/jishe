<template>
	<view class="content">
		<view class="login">
		  <view class="login__bg login__bg--top">
		    <image class="bg" src="../../static/login_top2.jpg" mode="widthFix"></image>
		  </view>
		  <view class="login__bg login__bg--top">
		    <image class="rocket rocket-sussuspension" src="../../static/login_top3.png" mode="widthFix"></image>
		  </view>
		  <view class="login__wrapper"> 
		  <view class="title">
		  </view>
			<view class="login__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
				
		 		<login v-if="islogin" @send="getLoginValue"></login>
				<signIn v-if="issign" @send="getSignValue"></signIn>
				<view style="height: 30rpx;"></view>
				<view class="sign" style="color:#555555;">
					<view class="column" @click="tologin()">
						<view class="iconfont icon-shouji" style="font-size: 40rpx;">
						</view>
						<view style="height: 15rpx;"></view>
						<view class="t">登录</view>
					</view>
					<view style="width: 5%;color:#CCCCCC;">|</view>
					<view class="column" @click="sign()">
						<view class="iconfont icon-zhuce" style="font-size: 40rpx;">
						</view>
						<view style="height: 15rpx;"></view>
						<view class="t">注册</view>
					</view>
				</view>
				<view class="blank"></view>
		    </view>
		  </view>
		  <view class="login__bg login__bg--bottom">
		    <image src="../../static/login_bottom_bg.jpg" mode="widthFix"></image>
		  </view>
		</view>
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
				// 当前选中的模式
				currentModeIndex: 0,
				// 模式选中滑块
				modeSliderStyle: {
				  left: 0
				},
			}
		},
		onLoad() {
		},
		watch: {
		  currentModeIndex(value) {
		    const sliderWidth = uni.upx2px(476 / 2)
		    this.modeSliderStyle.left = `${sliderWidth * value}px`
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
			// 切换模式
			modeSwitch(index) {
			  this.currentModeIndex = index
			  this.showPassword = false
			},
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
						url: 'http://8.130.100.210:80/login',
						method:"POST",
						header: {
							'content-type': 'application/x-www-form-urlencoded', 
						},
						sslVerify:false,
						data: {
							username:this.lname,
							password:this.lpwd,
					     }, })
					if(r.code===200){
						console.log(r.token);
						this.$store.commit("login",{userName:this.lname,token:r.token});
						uni.navigateTo({
							url:"../welcome/welcome?from=login",
						})	
					}
					else{
						console.log(r);
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
				console.log(this.sname,this.spwd);
				//测试注册请求
				try{
					const r = await this.request({
						url: 'http://8.130.100.210:80/register',
						method:"POST",
						header: {
							'content-type': 'application/x-www-form-urlencoded', 
						},
						data: {
							username:this.sname,
							password:this.spwd,
					     }, })
					// console.log(r);
					if(r.code===200){
						//注册并登录
						console.log(r.token);
						this.$store.commit("login",{userName:this.sname,token:r.token});
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
					// uni.showToast({
					// 	image:"../../static/jinggao.png",
					// 	title:"请求失败",
					// 	duration:800,
					// })
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../common/login/iconfont.css");
	@import '@/static/css/templatePage/custom_nav_bar.scss';
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
	
	/* 悬浮 */
	.rocket-sussuspension{
	  animation: suspension 3s ease-in-out infinite;
	}
	
	@keyframes suspension {
	  0%, 100% {
	    transform: translate(0 , 0);
	  }
	  50% {
	    transform: translate(-0.8rem , 1rem);
	  }
	}
	
	.login {
	  position: relative;
	  height: 100%;
	  z-index: 1;
	  
	  /* 背景图片 start */
	  &__bg {
	    z-index: -1;
	    position: fixed;
	    
	    &--top {
	      top: 0;
	      left: 0;
	      right: 0;
	      width: 100%;
	      
	      .bg {
	        width: 750rpx;
	        will-change: transform;
	      }
	      .rocket {
	        margin: 50rpx 28%;
	        width: 400rpx;
	        will-change: transform;
	      }
	    }
	    
	    &--bottom {
	      bottom: -10rpx;
	      left: 0;
	      right: 0;
	      width: 100%;
	      // height: 144px;
	      margin-bottom: env(safe-area-inset-bottom);
	      
	      image {
	        width: 750rpx;
	        will-change: transform;
	      }
	    }
	  }
	  /* 背景图片 end */
	  
	  /* 内容 start */
	  &__wrapper {
	    margin-top: 403rpx;
	    width: 100%;
	  }
	  
	  /* 切换 start */
	  &__mode {
	    position: relative;
	    margin: 0 auto;
	    width: 476rpx;
	    height: 77rpx;
	    background-color: #FFFFFF;
	    box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0, 3, 72, 0.1);
	    border-radius: 39rpx;
	    
	    &__item {
	      height: 77rpx;
	      width: 100%;
	      line-height: 77rpx;
	      text-align: center;
	      font-size: 31rpx;
	      color: #908f8f;
	      letter-spacing: 1em;
	      text-indent: 1em;
	      z-index: 2;
	      transition: all 0.4s;
	      
	      &--active {
	        font-weight: bold;
	        color: #FFFFFF;
	      }
	    }
	    
	    &__slider {
	      position: absolute;
	      height: inherit;
	      width: calc(476rpx / 2);
	      border-radius: inherit;
	      box-shadow: 0rpx 18rpx 72rpx 18rpx rgba(0, 195, 255, 0.1);
	      z-index: 1;
	      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	    }
	  }
	  /* 切换 end */
	  
	  /* 登录注册信息 start */
	  &__info {
	    margin: 0 30rpx;
	    margin-top: 105rpx;
	    padding: 30rpx 51rpx;
	    padding-bottom: 0;
	    border-radius: 20rpx;
	    background-color: #ffff;
	    box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0, 3, 72, 0.1);
	    
	    &__item {
	      
	      &__input {
	        margin-top: 59rpx;
	        width: 100%;
	        height: 77rpx;
	        border: 1rpx solid #E6E6E6;
	        border-radius: 39rpx;
	        
	        &__left-icon {
	          width: 10%;
	          font-size: 44rpx;
	          margin-left: 20rpx;
	          color: #AAAAAA;
	        }
	        
	        &__content {
	          width: 80%;
	          padding-left: 10rpx;
	          
	          &--verify-code {
	            width: 56%;
	          }
	          
	          input {
	            font-size: 24rpx;
	            // letter-spacing: 0.1em;
	          }
	        }
	        
	        &__right-icon {
	          width: 10%;
	          font-size: 44rpx;
	          margin-right: 20rpx;
	          color: #AAAAAA;
	        }
	        
	        &__right-verify-code {
	          width: 34%;
	          margin-right: 20rpx;
	        }
	      }
	      
	      &__button {
	        margin-top: 75rpx;
	        margin-bottom: 39rpx;
	        width: 100%;
	        height: 77rpx;
	        text-align: center;
	        font-size: 31rpx;
	        font-weight: bold;
	        line-height: 77rpx;
	        letter-spacing: 1em;
	        text-indent: 1em;
	        border-radius: 39rpx;
	        box-shadow: 1rpx 10rpx 24rpx 0rpx rgba(60, 129, 254, 0.35);
	      }
	      
	      &__tips {
	        margin: 30rpx 0;
	        color: #AAAAAA;
	      }
	    }
	  }
	  /* 登录注册信息 end */
	  
	  /* 登录方式切换 start */
	  &__way {
	    margin: 0 auto;
	    margin-top: 110rpx;
	    
	    &__item {
	      &--icon {
	        width: 77rpx;
	        height: 77rpx;
	        font-size: 50rpx;
	        border-radius: 100rpx;
	        margin-bottom: 18rpx;
	        position: relative;
	        z-index: 1;
	        
	        &::after {
	          content: " ";
	          position: absolute;
	          z-index: -1;
	          width: 100%;
	          height: 100%;
	          left: 0;
	          bottom: 0;
	          border-radius: inherit;
	          opacity: 1;
	          transform: scale(1, 1);
	          background-size: 100% 100%;
	          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
	        }
	      }
	    }
	  }
	  /* 登录方式切换 end */
	  /* 内容 end */
	  
	}

</style>
