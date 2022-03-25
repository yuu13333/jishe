<template>
		<scroll-view class="content" @scroll="scroll()">
		<view class="cards" v-for="(item,index) in programinfo" @click="clickCard(item)" :key="index">
			<uni-card style="height: 400rpx;" :title="item.title" extra="删除数据集">
				<view class="cardview">
				<image style="width:150rpx;height: 150rpx;border-radius: 400rpx;" :src="item.url"></image>
				<view style="width:50rpx"></view>
			    <text>{{item.description}}</text>
				</view>
			</uni-card>
		</view>
		<view>
			<view style="height: 300rpx;display: flex;align-items: center;justify-content: center;">
				<button class="button" type="primary" @click="openDialog()"><view class="iconfont icon-tianjiaxiangmu1" style="font-size: 60rpx;"></view><view style="width:30rpx;" ></view>创建新项目</button>
			</view>
				<uni-popup ref="dialogInput" type="dialog">
				<view style="width:580rpx;height: 600rpx;background-color: #FFFFFF;border-radius: 10rpx;text-align: center;line-height: 100rpx;display:flex;flex-direction: column; justify-content: space-between;align-items: center;overflow: hidden;">
				<view style="display: flex;"><view class="iconfont icon-xinjian" style="font-size: 50rpx;"></view><view style="width:15rpx;"></view>创建新项目</view>
				<view style="width:100%;flex:1 1 auto;display: flex;flex-direction: column;align-items: center;justify-content: space-around;">
				<view style="width:100%;display: flex;justify-content: center;">
					<input type="text" @input="onInputName" style="width: 80%;height:100rpx;border:1rpx solid #D8D8D8;border-radius: 10rpx;" placeholder="项目名称"/></view>
				<view style="width:100%;display: flex;justify-content: center;">
					<view style="width:80%;border:1rpx solid #D8D8D8;height:200rpx;border-radius: 10rpx;display: flex;justify-content: center;align-items: center;">
					<textarea @input="onInputDescription" style="width:80%;height:80%;"  type="text" placeholder="项目描述"/></view></view>
				</view>
				<view style="display: flex;width:100%;justify-content: space-between;border-top:1rpx solid #D8D8D8;"><button style="background-color: #007AFF;color:#FFFFFF;border-top:1rpx solid #007AFF;" @click="closeDialog()">取消</button><button style="background-color: #FFFFFF;color:#007AFF" @click="dialogInputConfirm()">确认</button></view>
				</view>
				</uni-popup>
				
		</view>
		</scroll-view>
</template>

<script>
	import helper from '../../common/common/common.js'
	export default {
		name:"createProgram",
		props:["programinfo"],
		onLoad(){
			this.$refs.dialogInput.close();
			console.log(this.programs);
		},
		onShow(){
			this.value="";
			this.description="";
		},
		data() {
			return {
				msgType: 'success',
				value: '',
				description:'',
			};
		},
		
		methods:{
			scroll(e){
			console.log("scroll");	
			},
			onInputName(e){
				this.value = e.detail.value;
			},
			onInputDescription(e){
				this.description = e.detail.value;
			},
			openDialog() {
							this.$refs['dialogInput'].open()
						},
			closeDialog(){
				console.log("close");
				this.$refs.dialogInput.close();
			},
			dialogConfirm(done) {
							this.$refs['popupMessage'].open()
			},
			async dialogInputConfirm(val) {
							if(this.value===""||this.description===""){
								this.$refs.dialogInput.close();
								uni.showToast({
									icon:"none",
									image:"../../static/jinggao.png",
									title:'输入为空',
									duration:800
								})
							}
							else{
								this.$refs.dialogInput.close();
								//服务器请求新建
								try{
									const r = await this.request({
										url: 'http://192.168.43.3:8080/createProgram',
										method:"GET",
										data: {
											token:this.$store.state.token,
											name:this.value,
											des:this.description
										 },
									})
									this.$store.commit("setProject",{val:r});
									helper.clearial();
									helper.cleariwl();
									console.log(r);
									
									//会将之前的图片与标签清空
									setTimeout(() => {
										uni.hideLoading();
										uni.navigateTo({
											url:"../../pages/ProgramInfo/ProgramInfo?val="+this.value+"&des="+this.description
										})
									}, 1000)
								}catch(e){
									console.log(e);
								}
							}
						},
			clickCard(item){
				//设置当前项目id
				this.$store.commit("setProject",{val:item.id});
				helper.clearial();
				helper.cleariwl();
				console.log(item.id);
				uni.navigateTo({
					url:"../../pages/ProgramInfo/ProgramInfo?val="+item.title+"&des="+item.description,
				})
			}
			},
		}
</script>

<style>
	@import url("../../common/welcome/iconfont.css");
	.content{
		min-height: 1150rpx;
		height: 100%;
		background-color: #F8F8F8;
		margin-top: 100rpx;
		margin-bottom: 100rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
	}
	text{
		display: flex;
		width:400rpx;
		justify-content: center;
		align-items: ;
	}
	.cardview{
		height: 300rpx;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.btn{
		width:100%;
		height:500rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.button{
		border-radius: 300rpx;
		height:110rpx;
		width:600rpx;
		background-color: #007AFF;
		color:#FFFFFF;
		font-size: 35rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button{
		width:50%;
		height:100rpx;
		color:#303133;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0;
	}

</style>
