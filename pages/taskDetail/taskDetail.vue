<template>
	<view style="height:100vh;width:100%;">
		<view class="activity-detail-image">
			<image src="../../static/mock/1.jpg" class="activity-detail-image"></image>
		</view>
		<view class="activity-info">
			<view class="top-container">
				<view class="title">
					XXXXXXX任务名称
					<view style="width:10rpx;"></view>
					<uni-tag style="font-weight: 300;" :text="taskState" :type="labeltype" />
				</view>
				<view class="time">2020-01-01 ——2020-03-20（任务周期）</view>
				<view class="position-response">XXXXXXXX任务发送单位</view>
				<view style="color:#E54D42;font-size: 14px;margin-top: 11px;">剩余任务量:{{num}}</view>
			</view>
		</view>
		<view class="activity-detail">
			<view class="detail-box">
				任务具体要求......任务具体要求......任务具体要求......任务具体要求......任务具体要求......任务具体要求......
			
			</view>
		</view>
		<view class="consult" @click="start()">
			<view class="consult-text" >
				<view style="width:20rpx;"></view>
				<uni-icons type="plus-filled" size="30" color="#007AFF"></uni-icons>
				<view class="consult-btn-text" >快速开始</view>
			</view>
		</view>
		<view style="height:10rpx;">
			
		</view>
		<view class="participate" @click="check()">
			<view class="consult-text" >
				<view style="width:20rpx;"></view>
				<uni-icons type="link" size="30" color="#F0AD4E"></uni-icons>
				<view class="consult-btn-text">任务队友</view>
			</view>
		</view>
		<view class="bottom-btn-area">
			<button :class="state==0?'bottom-btn':state==1?'work-btn':'last-btn'" @click="tofinishWork()">{{btn}}</button>
		</view>
		<uni-popup ref="popup" type="bottom" background-color="#fff">
			<view class="popup-content">
				<uni-list :border="true">
					<uni-list-chat :avatar-circle="true" title="uni-app" avatar="../../static/logo.png" note="队友进度XXXXX" time="2020-02-02 20:20" ></uni-list-chat>
					<uni-list-chat :avatar-circle="true" title="uni-app" avatar="../../static/logo.png" note="队友进度XXXXX" time="2020-02-02 20:20" ></uni-list-chat>
					<uni-list-chat :avatar-circle="true" title="uni-app" avatar="../../static/logo.png" note="队友进度XXXXX" time="2020-02-02 20:20" ></uni-list-chat>
				</uni-list>
			</view>
		</uni-popup>
		<uni-popup ref="submitPop" type="dialog">
		<view style="overflow:hidden;width:580rpx;height: 500rpx;background-color: #FFFFFF;border-radius: 20rpx;text-align: center;line-height: 100rpx;display:flex;flex-direction: column; justify-content: space-between;align-items: center;">
		<view style="width:100%;border-bottom:1rpx solid #C0C0C0;">选择上传数据集</view>
		<scroll-view scroll-y="true" show-scrollbar="true" style="height:300rpx;width:80%;display: flex;align-items: center;justify-content: center;">
		<radio-group @change="radioChange" style="width: 100%;">
			<label style="display: flex;align-items: center;justify-content: center;flex-direction: column;width:100%;"  v-for="(item, index) in items" :key="item.id">
				<view style="display: flex;flex-direction: row;">
				<radio :value="item.id" :checked="index === current" />
				<view style="width:20rpx;"></view>{{item.name}}-xxxxxx
				</view>
			</label>
		</radio-group>
		</scroll-view>
		<view style="display: flex;width:100%;justify-content: space-between;"><button style="width:50%;border-radius:0;border:none; background-color:#007AFF;color:#FFFFFF;" @click="closeSubmit()">取消</button><button style="width:50%;border:none;border-radius:0;background-color: #FFFFFF;color:#007AFF" @click="confirmSubmit()">确认</button></view>
		</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				state:0,
				btn:"确认参加",
				taskState:"未开始",
				num:500,
				labeltype:"primary",
				current:0,
				items:[{
					id:1,
					name:"数据集1"
				},{
					id:2,
					name:"数据集2"
				},
				{
					id:3,
					name:"数据集3"
				},
				{
					id:4,
					name:"数据集4"
				},
				{
					id:5,
					name:"数据集5"
				}]
			}
		},
		methods: {
			start(){
				console.log("!!!");
				uni.navigateTo({
					url:"../startWork/startWork",
				})
				
			},
			check(){
				console.log("查看队友");
				this.$refs.popup.open('bottom');
			},
			tofinishWork(){
				if(this.state==0){
					uni.showToast({
						icon:"../../static/chenggong_1.png",
						title:"参与成功",
					})
					this.taskState="已参与",
					this.state = 1;
					this.btn="上传数据集";
					this.labeltype="warning";
				}
				else{
					if(this.state==1){
						console.log("上传数据集！");
						this.$refs.submitPop.open();
					}
					else if(this.state==2){
						uni.showModal({
							content:"当前正在审核中，请耐心等待...",
							title:"Tip"
						});
					}
				}
			},
			closeSubmit(){
				this.$refs.submitPop.close();
			},
			confirmSubmit(){
				this.$refs.submitPop.close();
				uni.showToast({
					icon:"../../static/chenggong_1.png",
					title:"上传成功！",
				})
				this.taskState="已提交",
				this.btn="等待审核中...";
				this.labeltype="success";
				this.state = 2;
			},
			radioChange(e){
				console.log(e);
			}
		}
	}
</script>
<style>
	.activity-detail-image{
		height: 217px;
		width: 100%;
/* 		//border-radius: 26px; */
		box-shadow: 0px 2px 6px 0px rgba(230, 230, 230, 40);
	}
	.activity-info{
		margin-top: 10px;
		height: 125px;
		border: 1px solid #DCDCDC;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.top-container{
		width: 90%;
		height: 90%;
	}
	.title{
		color: rgba(16, 16, 16, 100);
		font-size: 18px;
		text-align: left;
		font-family: PingFangSC-regular;
		display: flex;
	}
	.time{
		margin-top: 11px;
		color: rgba(159, 159, 159, 100);
		font-size: 14px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.position-response{
		margin-top: 8px;
		color: rgba(159, 159, 159, 100);
		font-size: 14px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.activity-detail{
		margin-top: 10px;
		height: 105px;
		border: 1px solid #DCDCDC;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: PingFangSC-bold;
	}
	.detail-box{
		width: 90%;
		height: 90%;
		font-size: 15px;
		color:#999999;
	}
	.consult{
		margin-top: 15px;
		width: 414px;
		height: 50px;
		line-height: 20px;
		text-align: center;
		border: 1px solid #DCDCDC;
		display: flex;
		align-items: center;
	}
	.consult-text{
		height: 24px;
		display: flex;
	}
	.consult-btn-text{
		margin-left: 16px;
		font-size: 14px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.participate{
		width: 414px;
		height: 50px;
		line-height: 20px;
		text-align: center;
		border: 1px solid #DCDCDC;
		display: flex;
		align-items: center;
	}
	.bottom-btn-area{
		margin-top: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.work-btn{
		width: 350px;
		height: 40px;
		border-radius: 100px;
		background-color: #F0AD4E;
		color: rgba(255, 255, 255, 100);
		font-size: 15px;
		line-height: 40px;
		text-align: center;
		font-family: PingFang SC;
	}
	.last-btn{
		width: 350px;
		height: 40px;
		border-radius: 100px;
		background-color: #009900;
		color: rgba(255, 255, 255, 100);
		font-size: 15px;
		line-height: 40px;
		text-align: center;
		font-family: PingFang SC;
	}
	.bottom-btn{
		width: 350px;
		height: 40px;
		border-radius: 100px;
		background-color: #007AFF;
		color: rgba(255, 255, 255, 100);
		font-size: 15px;
		line-height: 40px;
		text-align: center;
		font-family: PingFang SC;
	}
	
	.popup-content {
			@include flex;
			align-items: center;
			justify-content: center;
			padding: 15px;
			/* height: 150px; */
			background-color: #fff;
		}
</style>