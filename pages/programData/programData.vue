<template>
	<view class="content">
		<view class="header" :class="ismanage?'ismanage':'nomanage'">
			<view style="width:35rpx;"></view><image class="programAvatar" src="../../static/logo.png"></image><view style="width:35rpx;"></view><view style="display: flex;flex-direction: column;justify-content: space-around;height:80%;"><view>Collection 1</view><view>Description</view></view>
			<view style="width:200rpx;"></view>
			<view @click="tomanage()" :class="ismanage?'ismanage':'nomanage'" class="iconfont icon-shujujiguanli" style="font-size: 80rpx;"></view>
		</view>		
		<view class="info">
			<echarts v-if="!ismanage"></echarts>
			<programImgManage v-if="ismanage"></programImgManage>
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
				ismanage:false,
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
			tomanage(){
				this.ismanage=!this.ismanage;
			}
			
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
		height:210rpx;
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
		width:150rpx;
		height:150rpx;
		border-radius: 150rpx;
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
	
	.ismanage{
		color:#ffffff;
		background-color: #000000;
	}
	.nomanage{
		color:#000000;
	}
	

</style>
