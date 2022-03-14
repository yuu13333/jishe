<template>
	<view style="height:100vh" class="content">
		<view style="height:100rpx">
			
		</view>
		<view>
			<image @click="camera()" src="../../static/camera.png"></image>	
		</view>
		<view style="height:50rpx">
			
		</view>
		<view>
			<image @click="album()" src="../../static/library.png"></image>
		</view>
		<view style="height:100rpx">
			
		</view>
		
	</view>
</template>

<script>
	import { pathToBase64, base64ToPath } from '../../js_sdk/mmmm-image-tools/index.js'
	import helper from '../../common/common/common.js'
	export default {
		name:"classfication",
		data() {
			return {
				
			};
		},
		methods:{
			camera(){
					uni.chooseImage({
					    count: 1, //默认9
					    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					    sourceType: ['camera'], //从相册选择
					    success: function (res) {
							//console.log('img',res);
							pathToBase64(res.tempFilePaths[0])
							  .then(base64 => {
								//base64 = encodeURIComponent(base64);
								helper.addial(base64);
								uni.navigateTo({
									url:"../../pages/addLabel/addLabel"+"?iscamera=true&base64="+base64
								})
							  })
							  .catch(error => {
							    console.error(error)
							  })
						}
					})
			},
			album(){
					uni.chooseImage({
						    count: 9, //默认9
						    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
						    sourceType: ['album'], //从相册选择
						    success: function (res) {
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
											uni.navigateTo({
												url:"../../pages/addLabel/addLabel?iscamera=false&base64="+items})
											.catch(error => {
											  console.error(error)
											})
										}
								});	
							}
						},
					})
				}
		}
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	image{
		width:400rpx;
		height: 400rpx;
	}

</style>
