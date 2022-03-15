<template>
	<view class="content">
		<view class="header">
			<view style="width:35rpx;"></view><image class="programAvatar" src="../../static/logo.png"></image><view style="width:15rpx;"></view><view>Collection 1</view>
		</view>		
		<view class="info">
				<scroll-view style="width:100%;display: flex;flex-direction: column;align-items: center;justify-content: center;" scroll-y="true">
				<view style="height: 40rpx;"></view>
				<view style="width:100%;display: flex;flex-direction: column;align-items: center;justify-content: center;">
				<view class="imageNum">
					<view style="color: #000000;font-size: 70rpx;font-weight: 500;">
						{{imgNum}}
					</view>
					<view style="height:5rpx;"></view>
					<view style="color:#000000;font-size: 30rpx;font-weight: 500;">
						IMAGES
					</view>
					<view style="height: 30rpx;"></view>
					<view style="color:#007AFF;font-size: 25rpx;">
						click here to check more.
					</view>
				</view>
				</view>
				<view style="height: 40rpx;"></view>
				<view style="width:100%;display: flex;flex-direction: column;align-items: center;justify-content: center;">
				<view class="categories">
					<view style="color: #000000;font-size: 70rpx;font-weight: 500;">
						{{typeNum}}
					</view>
					<view style="height:5rpx;"></view>
					<view style="color:#000000;font-size: 30rpx;font-weight: 500;">
						CATEGORIES
					</view>
					<view style="height:30rpx;"></view>
					<view style="color:#007AFF;font-size: 25rpx;">
						click here to check more.
					</view>
				</view>
				</view>
				<view style="height: 40rpx;"></view>
				<view class="echarts">
					<view class="charts-box">
					  <qiun-data-charts type="column" :chartData="chartData" />
					</view>
					<view style="height:30rpx;"></view>
					<view class="charts-box">
					  <qiun-data-charts type="pie" :chartData="chartData1" />
					</view>
				</view>
				<view style="height: 50rpx;"></view>
				<view style="width:100%;"><button type="default" style="width:80%;height:100rpx;background-color: #007AFF;color:#FFFFFF">Start Labeling</button></view>
				<view style="height: 60rpx;"></view>
				<view class="lastTime" style="color:#A5A5A5;width:100%;display: flex;align-items: center;justify-content: center;font-size: 25rpx;">
					最后修改时间：{{String(new Date()).slice(0,-14)}}
				</view>
				</scroll-view>
		</view>
	</view>
</template>

<script>
	import helper from '../../common/common/common.js'
	export default {
		onLoad(){
			//通过id请求得到项目的一些信息
		},
		data() {
			return {
				projectName:'',
				imgNum:100,
				typeNum:26,
				chartData:{
				  categories:['其他垃圾','有害垃圾','厨余垃圾','可回收垃圾'],
				  series:[
				    {
				      name:'导入值',
				      data:[35,33, 13, 34]
				    },
				    {
				      name:'预测值',
				      data:[18,24, 6, 28]
				    }
				  ]
				},
				chartData1:{
				  series: [{
				    data: [
				      {
				        name: "一类",
				        value: 50
				      }, {
				        name: "二类",
				        value: 30
				      }, {
				        name: "三类",
				        value: 20
				      }, {
				        name: "四类",
				        value: 18
				      }, {
				        name: "五类",
				        value: 8
				      }
				    ]
				  }]
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("../../common/index/iconfont.css");
	.content{
		width:100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.header{
		height:110rpx;
		width:100%;
		color:#000000;
		border-bottom: 1rpx solid #F5F5F5;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.info{
		width:100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.programAvatar{
		width:80rpx;
		height:80rpx;
		border-radius: 80rpx;
	}
	
	.imageNum{
		height:280rpx;
		width:80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #F5F5F5;
		border-radius: 20rpx;
	}
	.categories{
		height:280rpx;
		width:80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #F5F5F5;
		border-radius: 20rpx;
	}
	.lastTime{
		height:110rpx;
		width:100%;
	}
	.echarts{
		width:100%;
		height:auto;
		display: flex;
		flex-direction: column;
	
	}
	

</style>
