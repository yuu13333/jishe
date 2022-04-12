<template>
	<view class="content">
		<view class="header" :class="ismanage?'ismanage':'nomanage'">
			<view style="width:35rpx;"></view><image class="programAvatar" :src="avatar"></image><view style="width:35rpx;"></view><view style="display: flex;flex-direction: column;justify-content: space-around;height:80%;flex:1 1 auto"><view>{{projectName}}</view><view>{{projectDescription}}</view></view>
			<view style="width:30rpx;"></view>
			<view @click="tomanage()" :class="ismanage?'ismanage':'nomanage'" class="iconfont icon-shujujiguanli" style="font-size: 80rpx;"></view>
			<view style="width:60rpx;"></view>
		</view>		
		<view class="info">
			<echarts v-if="!ismanage" :classDetailsadd="classDetails1" :classDetails="classDetails" :photoNumber="photoNumber" :classNumber="classNumber" :createTime="projectTime"></echarts>
			<uni-transition style="width:100%;width:100%;" mode-class="fade" :duration="100" :show="ismanage">
				<programImgManage style="width:100%;width:100%;"></programImgManage>
			</uni-transition>
		</view>
	</view>
</template>

<script>
	import helper from '../../common/common/common.js'
	export default {
		onLoad(){
			//通过id请求得到项目的一些信息
			this.currentProject=this.$store.state.currentProject;
			this.getCollectionInfo();
			this.getCollectionImg("其他垃圾");
		},
		onShow() {
			
		},
		data() {
			return {
				avatar:"",
				classDetails:{},
				classDetails1:{},
				currentProject:'',
				projectName:'',
				projectDescription:'',
				projectTime:'',
				ismanage:false,
				photoNumber:0,
				classNumber:0,
				imgNum:100,
				typeNum:26,
			}
		},
		methods: {
			tomanage(){
				this.ismanage=!this.ismanage;
			},
			async getCollectionImg(val){
				try{
					console.log("collectionImg");
					const re = await this.request({
						url: 'http://8.130.100.210:80/label',
						method:"GET",
						data: {
							token:this.$store.state.token,
							collection_id:this.$store.state.currentProject,
							label_name:"其他垃圾",
						 },
					})
					console.log(re.slice(1,200));
					if(re.code===200){
						console.log(re.photo_list);
					}
					else{
						uni.showToast({
							image:"../../static/jinggao.png",
							title:"资源请求异常"
						})	
					}
				}catch(e){
					// console.log(e);//TODO handle the exception
				}
			},
			async getCollectionInfo(){
				console.log(this.$store.state.currentProject);
				try{
					const r = await this.request({
						url: 'http://8.130.100.210:80/collection',
						method:"GET",
						data: {
							collection_id:this.$store.state.currentProject,
							image_code:0
						 }, })
					if(r.code===200){
						this.projectName=r.name;
						this.projectDescription=r.description;
						this.projectTime=r.created_time;
						this.photoNumber=r.photo_number;
						this.classNumber=r.class_number;
						console.log(r.class_detail.length);
						let chartData={
						    categories:[],
							series:[
								    {
								      name:'数量',
								      data:[]
								    },
								  ]
							};
						let chartData1={
							  series: [{
							    data: []
							  }]
						};
						let obj={name:'',value:''};
						this.avatar = r.class_detail[0].image;
						for(let i=0;i<r.class_detail.length;i++){
							console.log("循环！");
							chartData.categories.push(r.class_detail[i].class_name);
							chartData.series[0].data.push(r.class_detail[i].photo_number);
							let obj={name:'',value:''};
							obj.name=r.class_detail[i].class_name;
							obj.value=r.class_detail[i].photo_number;
							chartData1.series[0].data.push(obj);
						}
						this.classDetails=chartData;
						this.classDetails1=chartData1;
						// console.log(r.class_detail);
					}
					else{
						uni.showToast({
							image:"../../static/jinggao.png",
							title:"资源请求异常"
						})
						
					}
				}catch(e){
					// console.log(e);//TODO handle the exception
				}
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
		background-image: url(../../static/bottom.png);
		background-size: contain;
	}
	

</style>
