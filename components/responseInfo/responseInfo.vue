<template>
	<scroll-view scroll-x="false" scroll-y="true" @scroll="scroll">
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
	import throttle from "../../utils/optimize/throttle.js"
	
	export default {
		name:"responseInfo",
		data() {
			return {
				//当数量比较多时会出现白屏现象
				cards:new Array(1).fill({
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
						createTime:new Date(),
					}),
				scrollTData:0,
				startOffset: 0,
				start: 0,
				end: 5,
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
			},
			scroll(e) {
			      this.scrollTData = e.target.scrollTop;
				  console.log("!"+this.scrollTData);
			      // this.scrollThrottle();
		    },
			scrollThrottle:()=>throttle(function () {
				let scrollTop = this.scrollTData; // e.target.scrollTop;
				// 此时的开始索引
				this.start =
					Math.floor(scrollTop / this.itemSize) - this.prevCount >= 0
					? Math.floor(scrollTop / this.itemSize) - this.prevCount
					: 0;
				// 此时的结束索引
				this.end = Number(this.start) + Number(this.count) + Number(this.nextCount);
				// 此时的偏移量
				// console.log('位置', this.start, this.end);
				this.startOffset = Number(this.start) * Number(this.itemSize);
				}, 0)

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
