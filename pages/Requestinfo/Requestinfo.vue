<template>
	<view>
		<view class="header">
			<view style="width:2rpx"></view>
			<view style="display: flex;font-size:35rpx;align-items: center;justify-content: center;">
			{{text}}<view style="font-size: 25rpx;display: flex;align-items: center;justify-content: center;">({{imgNum}})</view>
			</view>
			<view style="width:300rpx"></view>
			<view class="iconfont icon-shouyefill" style="font-size: 55rpx;color:#555555" @click="toHomePage()">
			</view>
			<view style="width:2rpx"></view>
		</view>
		<view style="position:fixed;top:100rpx;height: 83%;width:100%;">
			<responseInfo :cards="cards"></responseInfo>
		</view>
		<view class="footer" style="background-color: #FFFFFF;width: 100%;">
		<view style="width:10%;"></view>
		<view style="width:80%;">
		<button v-if="!islog" @click="toAccount()">点击立即登录/创建新账户</button>
		<button v-if="islog" @click="checkData()">查看所有数据集信息</button>
		</view>
		<view style="width:10%;display: flex;justify-content: center;justify-content: center;">
			<!-- <view class="iconfont icon-deletefill" style="color:#007AFF;">></view> -->
		</view>
		</view>
	</view>
</template>

<script>
	import helper from '../../common/common/common.js'
	export default {
		onLoad(val){
			console.log(val);
			if(val.type==="identify"){
				//说明是classification来的
				let oj={label:"有害垃圾",sublabel:"电池"};
				let jo = {label:"厨余垃圾",sublabel:"果皮"};
				if(val.way=="camera"){
					this.requestoutcome(oj);
				}
				else
				{this.requestoutcome(jo);}
				this.text="识别结果 ";
			}
			else{
				this.ids=val.ids.split(',');
				this.requestinfo();
				this.text="上传结果 ";
			}
			this.islog=this.$store.state.islog;
			helper.clearial();
			helper.cleariwl();
		},
		onBackPress(options) {	
			uni.showModal({
				title: 'Tip',
				content: '是否前往首页？',
				success: function (res) {
					if (res.confirm) {
						uni.navigateTo({
							url:"../welcome/welcome",
						})
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		    return true
		},
		data() {
			return {
				imgNum:0,
				islog:true,
				cards:[],
				ids:[],
				text:"",
			}
		},
		methods: {
			async requestoutcome(val){
				let imgarr = helper.getial();
				let arr=[];
				for(let i=0;i<imgarr.length;i++){
				let obj={
						id:i,
						photo:imgarr[i],
						label:val.label,
						sub_label:val.sublabel,
						created_time:String(new Date()),
					}
					arr.push(obj);
					// console.log(arr);
					if(i===imgarr.length-1){
						this.cards=arr;
					}
					this.imgNum = imgarr.length;
					// try{
					// 	const r = await this.request({
					// 		url: 'http://8.130.100.210:80/predict',
					// 		method:"POST",
					// 		data: {
					// 			image:imgarr[i]
					// 		},
					// 	})
					// 	if(r.code===200){
					// 		let obj={
					// 			id:i,
					// 			photo:imgarr[i],
					// 			label:r.label,
					// 			created_time:new Date(),
					// 		}
					// 		arr.push(obj);
					// 		console.log(arr);
					// 		if(i===this.ids.length-1){
					// 			this.cards=arr;
					// 		}
					// 	}
					// }catch(e){
					// 	console.log("predict error!");
					// }
				}
			},
			async requestinfo(){
				let arr=[];
				for(let i=0;i<this.ids.length;i++){
					try{
						const r = await this.request({
							url: 'http://8.130.100.210:80/photo',
							method:"GET",
							data: {
								photo_id:this.ids[i]
							},
						})
						// console.log(r.slice(1,10));
						if(r.code===200){
							// console.log(r);
							let obj={
								id:this.ids[i],
								photo:r.photo,
								label:r.label,
								sub_label:r.sub_label,
								created_time:r.created_time
							}
							arr.push(obj);
							console.log(arr);
							if(i===this.ids.length-1){
								this.cards=arr;
								this.imgNum = this.ids.length;
							}
						}
					}catch(e){
						console.log(e);
					}
				}
			},
			toHomePage(){
				this.$store.commit("clearProject");
				uni.navigateTo({
					url:"../welcome/welcome"
				})
			},
			checkData(){
				this.$store.commit("clearProject");
				uni.navigateTo({
					url:"../welcome/welcome"
				})
			},
			toAccount(){
				uni.navigateTo({
					url:"../login/login"
				})	
			}
		}
	}
</script>

<style>
	@import url("../../common/requestInfo/iconfont.css");
	.header{
		width:100%;
		height:8%;
		position: fixed;
		top:0;
		color:#000000;
		background-color: #FFFFFF;
		display:flex;
		align-items: center;
		justify-content: space-between;
		font-size: 30rpx;
		border-bottom: solid 1rpx #C0C0C0;
		z-index: 19999;
	}
	.content{
		background-color: #F8F8F8;
		height:83%;
	}
	.footer{
		height:7%;
		position:fixed;
		bottom: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		z-index: 19999;
	}
	button{
		color:#555555;
		background-color: #ffffff;
		font-size: 30rpx;
	}
	button::after{
		border:none;
	}

</style>
