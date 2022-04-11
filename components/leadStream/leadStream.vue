<template>
	<view style="height:100vh;width:100%;display: flex;flex-direction: column;justify-content: space-around;align-items: center;">
		<!-- <uni-transition style="width:100%;width:100%;" mode-class="fade" :duration="500" :show="isTrue"> -->
		
	<!-- 	</uni-transition> -->
		<view style="height:10rpx;"></view>
		<view class="bg-white padding" style="width:100%;">
			<view class="cu-steps">
				<view class="cu-item" :class="index>num?'':'text-blue'" v-for="(item,index) in numList" :key="index">
					<text class="num" :data-index="index + 1"></text> {{item.name}}
				</view>
			</view>
		</view>
		<view style="height:600rpx;width:100%;">
		<uni-transition style="width:100%;" mode-class="fade" :duration="500" :show="index===0">
		<view style="width:100%;display: flex;justify-content: center;align-items: center;flex-direction: column;" v-if="index===0">
			<image style="width:80%;" mode="widthFix" src="../../static/instruction/login.png"></image>
			<view style="font-size: 30rpx;color:#666666;">登录个人账号</view>
		</view>
		</uni-transition>
		<uni-transition style="width:100%;" mode-class="fade" :duration="500" :show="index===1">
		<view style="width:100%;display: flex;justify-content: center;align-items: center;flex-direction: column;" v-if="index===1">
			<image style="width:80%;" mode="widthFix" src="../../static/instruction/createproject.png"></image>
			<view style="font-size: 30rpx;color:#666666;">创建和管理属于自己的数据集</view>
		</view>
		</uni-transition>
		<uni-transition style="width:100%;" mode-class="fade" :duration="500" :show="index===2">
		<view style="width:100%;display: flex;justify-content: center;align-items: center;flex-direction: column;" v-if="index===2">
			<image style="width:80%;" mode="widthFix" src="../../static/instruction/addphoto.png"></image>
			<view style="font-size: 30rpx;color:#666666;">向数据集中添加图片并识别对应的垃圾种类</view>
		</view>
		</uni-transition>
		<uni-transition style="width:100%;" mode-class="fade" :duration="500" :show="index===3">
		<view style="width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;" v-if="index===3">
			<image style="width:80%;" mode="widthFix" src="../../static/instruction/data.png"></image>
			<view style="font-size: 30rpx;color:#666666;">对已有数据进行统计分析</view>
		</view>
		</uni-transition>
		<uni-transition style="width:100%;" mode-class="fade" :duration="500" :show="index===4">
		<view style="width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;" v-if="index===4">
			<image style="width:80%;" mode="widthFix" src="../../static/instruction/teamwork.png"></image>
			<view style="font-size: 30rpx;color:#666666;">团队协作共同管理数据集</view>
		</view>
		</uni-transition>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top" style="width:100%;">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>流程示意
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow" @tap="NumSteps">下一步</button>
			</view>
		</view>
		<view style="height:20rpx;"></view>
	</view>
</template>

<script>
	export default {
		name:"leadStream",
		data() {
			return {
				numList: [{
					name: '登录'
				}, {
					name: '创建'
				}, {
					name: '识别'
				}, {
					name: '统计'
				},{
					name:'协作'
				} ],
				num:0,
				index:0,
			};
		},
		created() {
		},
		methods:{
			next(){
				
			},
			NumSteps() {
				this.num= this.num == this.numList.length - 1 ? 0 : this.num + 1;
				if(this.index<4)
				this.index++;
				else
				this.index=0;
			},
		}
	}
</script>

<style>
	@import url("../../colorui/main.css");
	@import url("../../colorui/icon.css");

</style>
