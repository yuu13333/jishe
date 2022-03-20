<template>
	<view class="content">
		<view class="header">
		<view style="width: 80%;height:100%;display: flex;flex-direction: column;">
				<view style="height:100rpx;"></view>
				<view style="color:#FFFFFF;height:30%;"><text class="flex flex-direction"style="font-size: 50rpx;">{{projectName}}</text></view>
				<view style="border:1rpx solid #FFFFFF;width:100%;"></view>
				<view style="height:30rpx;"></view>
				<view style="color:#FFFFFF;height:10%;"><text style="font-size: 30rpx;">{{String(new Date()).slice(0,-14)}}</text></view>
				<view style="height:30rpx;"></view>
				<view style="color:#ffffff;height:50%;font-size: 30rpx;"><text class="flex flex-direction">{{projectDescription}}</text></view>
		</view>
		</view>
		<view class="btns">
			<view style="height: 100rpx;"></view>
		<view class="layer">
			<view class="btn" @click="toOverview()">
				<view class="iconfont icon-zonglan" style="color:#FFFFFF;font-size:90rpx;">
				</view>
				<view style="height:40rpx;">
				</view>
				<view style="width:100%;height:10%;color: #FFFFFF;display: flex;align-items: center;justify-content: center;">
					Overview
				</view>
			</view>
			<view class="btn" @click="chooseImage()">
				<view class="iconfont icon-xiangji2" style="color:#FFFFFF;font-size:100rpx;">
				</view>
				<view style="height:40rpx;">
				</view>
				<view style="width:100%;height:10%;color: #FFFFFF;display: flex;align-items: center;justify-content: center;">
					Add photos
				</view>
			</view>
		</view>
		<view style="height:50rpx;"></view>
		<view class="layer">
			<view class="btn" @click="toAddLabel()">
				<view class="iconfont icon-biaoqian" style="color:#FFFFFF;font-size:95rpx;">
				</view>
				<view style="height:30rpx;">
				</view>
				<view style="width:100%;height:10%;color: #FFFFFF;display: flex;align-items: center;justify-content: center;">
					Add Label
				</view>
			</view>
			<view class="btn" @click="toImgInfo()">
				<view class="iconfont icon-xinxi" style="color:#FFFFFF;font-size:100rpx;">
				</view>
				<view style="height:30rpx;">
				</view>
				<view style="width:100%;height:10%;color: #FFFFFF;display: flex;align-items: center;justify-content: center;">
					Data Info
				</view>
			</view>
		</view>
		<view style="height: 200rpx;"></view>
		</view>
	</view>
</template>

<script>
	import { pathToBase64, base64ToPath } from '../../js_sdk/mmmm-image-tools/index.js'
	import helper from '../../common/common/common.js'
	export default {
		onBackPress(options) {
		    helper.clearProject();
		    return false;
		},
		onLoad(name){
			console.log(name);
			this.projectName=name.val;
			this.projectDescription=name.des;
		},
		
		data() {
			return {
				projectName:'',
				projectDescription:'',
			}
		},
		methods: {
			
			chooseImage() {
					var _this = this
					uni.chooseImage({
						count: 9, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], //从相册选择、摄像头
						success: function(res) {
							let base64s = [];
								let count = 0;
								for( const r of res.tempFilePaths){
								pathToBase64(r)
									  .then(base64 => {
										base64s.push(base64);
										helper.addial(base64);
										count++;
										let items = JSON.stringify(base64s);
										if(count == res.tempFilePaths.length){
											uni.showModal({
												title: 'Tips',
												content: '是否立即前往添加标签？',
												success: function (res) {
													if (res.confirm) {
														uni.navigateTo({
															url:'../addLabel/addLabel'
														})
													} else if (res.cancel) {
														console.log('用户点击取消');
													}
												}
											});
										}
								});	
							}
						}
					});
				},
				toAddLabel(){
					if(!helper.getial().length){
						uni.showModal({
							title:"Tip",
							content:"没有需要添加标签的图片，是否立即导入？",
							success: function (res) {
									if (res.confirm) {
										var _this = this
										uni.chooseImage({
											count: 9, //默认9
											sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
											sourceType: ['album', 'camera'], //从相册选择、摄像头
											success: function(res) {
												let base64s = [];
													let count = 0;
													for( const r of res.tempFilePaths){
													pathToBase64(r)
														  .then(base64 => {
															base64s.push(base64);
															helper.addial(base64);
															count++;
															let items = JSON.stringify(base64s);
															if(count == res.tempFilePaths.length){
																uni.showModal({
																	title: 'Tips',
																	content: '是否立即前往添加标签？',
																	success: function (res) {
																		if (res.confirm) {
																			uni.navigateTo({
																				url:'../addLabel/addLabel'
																			})
																		} else if (res.cancel) {
																			console.log('用户点击取消');
																		}
																	}
																});
															}
													});	
												}
											}
										});
									} else if (res.cancel) {
										
									}
								}
						})
					}
					else{
						uni.navigateTo({
							url:'../addLabel/addLabel'
						})
						
					}
					
				},
				toOverview(){
					uni.navigateTo({
						url:"../programData/programData",
					})		
				},
				toImgInfo(){
					uni.navigateTo({
						url:"../programImgs/programImgs",
					})
				}
			
		}
	}
</script>

<style>
	@import url("../../common/ProjectInfo/iconfont.css");
	.content{
		height:100vh;
		width:100%;
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		background-image: url(../../static/background.jpg);
	}
	.header{
		height:28%;
		width:100%;
		height:100%;
		display: flex;
		justify-content: center;
		align-items:center;
		flex-direction: column;
	}
	.text{
		width:50%;
		height:100%;
		display: flex;
		flex-direction: column;
		align-items:flex-start;
		justify-content: space-around;
	}
	.btns{
		background-color: rgba(255,255,255,0.2);
		flex:1 1 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: space-around;
	}
	image{
		width:350rpx;
		height:350rpx;
	}
	.btn{
		width:320rpx;
		height:320rpx;
		border-radius: 50rpx;
		border:3px solid #FFFFFF;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		background-color: rgba(255,255,255,0.4);
	}
	button{
		width:450rpx;
		height:110rpx;
		background-color: #000000;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20rpx;
	}
	.layer{
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

</style>
