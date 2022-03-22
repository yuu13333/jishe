<template>
	<scroll-view scroll-x="false" scroll-y="true">
	<!-- 	<view style="height:100rpx;"></view> -->
		<view v-for="(item,index) in cards" :key="index">
			<uni-card style="height: 320rpx;" title="项目名称" extra="额外信息">
				<view class="cardview">
				<image @click="preview(index)" style="width:150rpx;height: 150rpx;" :src="item.url"></image>
				<view style="width:50rpx"></view>
			    <view style="display: flex;flex-direction:column;justify-content: space-around;align-items: flex-start;width:60%;">
			    <view>- 垃圾种类：{{item.title}}</view>
			    <view>- 分属于：{{item.description}}</view>
			    <view>- 创建于：<br/> <text style="font-size: 25rpx;">{{String(item.createTime).slice(0,-14)}}</text></view>
			    </view>
				</view>
			</uni-card>
		</view>	
	<!-- 	<view style="height:100rpx;"></view> -->
	</scroll-view>
</template>

<script>
	export default {
		name:"responseInfo",
		data() {
			return {
				cards:[
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
						createTime:new Date(),
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
						createTime:new Date(),
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
						createTime:new Date(),
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
						createTime:new Date(),
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
						createTime:new Date(),
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
						createTime:new Date(),
					},
				],
			};
		},
		methods:{
			preview(index){
				console.log(index);
				//base64
				let that = this;
							// base64ToPath(this.imgurls[this.index]) //logoul为base64为图片流
							// 	  .then(path => {
							// 		let imgsArray = [];
							// 		uni.hideLoading()
							// 		imgsArray[0] = path;
							// 		uni.previewImage({
							// 			current: 0, 
							// 			urls: imgsArray
							// 		});
							// 	  })
							// 	  .catch(error => {
							// 			that.$refs.uToast.show({
							// 				title: '图片加载失败',
							// 				type: 'warning'
							// 			})
			}
		}
	}
</script>

<style>
	.cardview{
		height: 200rpx;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	scroll-view{
		background-color: #F0F0F0;
	}
</style>
