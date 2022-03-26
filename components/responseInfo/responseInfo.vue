<template>
	<scroll-view class="sickBody" scroll-x="false" scroll-y="true" @scroll="scroll">
		<view class="parentDom">
		<view :style="{ height: screenHeight + 'px' }"></view>
		<view class="positionRelative" :style="{ transform: getTransform }">
		<view v-for="(item,index) in visibleData" :key="index">
			<uni-card style="height: 320rpx;" title="项目名称" extra="额外信息">
				<view class="cardview">
				<image mode="aspectFill" @click="preview(index)" style="width:150rpx;height: 150rpx;" :src="item.url"></image>
				<view style="width:50rpx"></view>
			    <view style="display: flex;flex-direction:column;justify-content: space-around;align-items: flex-start;width:60%;">
			    <view>- 垃圾种类：{{item.title}}</view>
			    <view>- 分属于：{{item.description}}</view>
			    <view>- 创建于：<br/> <text style="font-size: 25rpx;">{{String(item.createTime).slice(0,-14)}}</text></view>
			    </view>
				</view>
			</uni-card>
		</view>	
		</view>
		</view>
	</scroll-view>
</template>

<script>
	import throttle from "../../utils/optimize/throttle.js"
	
	export default {
		name:"responseInfo",
		props:{
			listData:{
			    type: Array,
			    default: () => []},
		},
		mounted() {
			this.sickAllData=this.cards;
		},
		computed:{
			screenHeight() {
			      return this.cards.length*Number(this.itemsize);
		    },
			// 前面预留几个
			prevCount() {
			      return Math.min(this.start, this.remain);
			},
			// 后面预留几个
			nextCount() {
			      return Math.min(this.remain, this.end);
			},
			visibleData() {
		      return this.cards.slice(this.start, Math.min(this.end, this.cards.length));
			 },
			getTransform() {
			      return `translate3d(0,${this.startOffset}px,0)`;
		    },
		},
		data() {
			return {
				//当数量比较多时会出现白屏现象
				cards:new Array(100).fill({
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/background.jpg",
						createTime:new Date(),
					}),
				scrollTData:0,
				startOffset: 0,
				start: 0,
				end: 5,
				itemsize:180,
				remain:8,
				count:5,
			};
		},
		methods:{
			preview(index){
				console.log(index+this.start);
				//base64
				let that = this;
				//点击预览
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
				  // console.log(this.scrollTData);
			      this.scrollThrottle();
		    },
			scrollThrottle:throttle(function () {
				let scrollTop = this.scrollTData; // e.target.scrollTop;
				// 此时的开始索引
				// console.log(Math.floor(scrollTop/this.itemsize));
				this.start =
					Math.floor(scrollTop/this.itemsize)>=0
					? Math.floor(scrollTop/this.itemsize)
					: 0;
				// 此时的结束索引
				this.end = Number(this.start) + Number(this.count) + Number(this.nextCount);
				// 此时的偏移量
				// console.log('位置', this.start, this.end);
				this.startOffset = Number(this.start) * Number(this.itemsize);
				}, 10)
			}
	}
</script>

<style>
	.sickBody{
		position: fixed;
		  left: 0;
		  top: 0;
		  width: 100%;
		  height: 100%;
		  background: #f4f4f4;
		  z-index: 99;
	}
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
	.positionRelative {
	  width: 92%;
	  margin: 0 3%;
	  position: absolute;
	  left: 0;
	  top: 0;
	  font-size: 32rpx;
	  padding-bottom: 300rpx;
	}
	.parentDom{
		position:relative;
	}
</style>
