<template>
		<scroll-view class="content1" @scroll="scroll()">
		<view class="cu-card case" style="display:flex;flex-direction:column;align-items: center;" v-for="(item,index) in programinfo" @click="clickCard(item)" :key="index">
<!-- 			<uni-card  style="height: 380rpx;border-radius: 20rpx;" :title="item.title" extra="删除数据集">
				<view class="cardview">
				<image style="width:150rpx;height: 150rpx;border-radius: 400rpx;" :src="item.url"></image>
				<view style="width:50rpx"></view>
			    <text style="color:#FFFFFF;">{{item.description}}</text>
				</view>
			</uni-card> -->
			<view class="cu-item" style="width: 90%;border:1rpx solid #f8f8f8;border-radius: 30rpx;">
				<view class="image" style="height:350rpx;overflow: hidden;">
					<image :src="item.image?item.image:'../../static/noimg.png'" mode="widthFix" ></image>
					<view class="cu-tag bg-blue">个人</view>
					<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{item.description}}</text></view>
				</view>
				<view class="cu-list menu-avatar" style="border-bottom: none;">
					<view class="cu-item">
						<!-- <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view> -->
						<view class="content flex-sub" style="background-color: #FFFFFF;transform:translateX(-100rpx);width:90%;">
							<view class="text-grey">{{item.name}}</view>
							<view class="text-gray text-sm flex justify-between">
								{{item.created_time}}
								<view class="text-gray text-sm">
									<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view>
			<view style="height: 300rpx;display: flex;align-items: center;justify-content: center;">
				<button class="button bg-gradual-blue padding radius text-center shadow-blur" type="primary" @click="openDialog()"><view class="iconfont icon-tianjiaxiangmu1" style="font-size: 60rpx;"></view><view style="width:30rpx;"></view>创建个人项目</button>
			</view>
				<uni-popup ref="dialogInput" type="dialog">
				<view style="width:680rpx;height: 1000rpx;border-radius: 10rpx;text-align: center;line-height: 100rpx;display:flex;flex-direction: column; justify-content: space-between;align-items: center;overflow: hidden;background-color: #FFFFFF;">
				<view style="width:100%;flex:1 1 auto;display: flex;flex-direction: column;align-items: center;justify-content: space-around;">
				<view style="display: flex;color:#000000;"><view style="width:15rpx;"></view>创建项目</view>
				<view style="height:20rpx;"></view>
				<!--表单开始-->
				<uni-section title="基本用法" type="line" style="width:100%;display: flex;justify-content: center;align-items: center;height:90%;">
			<view class="example">
				<!-- 基础用法，不包含校验规则 -->
				<uni-forms ref="baseForm" :modelValue="baseFormData">
					<uni-forms-item label="项目名称" required>
						<uni-easyinput @input="onInputName" v-model="baseFormData.name" placeholder="请输入项目名称" />
					</uni-forms-item>
					<uni-forms-item label="项目权限" required>
						<uni-data-checkbox v-model="baseFormData.rights" multiple :localdata="rights" />
					</uni-forms-item>
					<uni-forms-item label="项目描述">
						<uni-easyinput @input="onInputDescription" type="textarea" v-model="baseFormData.description" placeholder="请输入项目描述" />
					</uni-forms-item>
					<uni-forms-item label="项目类型" required>
						<uni-data-checkbox v-model="baseFormData.types" multiple :localdata="types" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</uni-section>
				<!--表单结束-->
				</view>
				<view style="height:20rpx;"></view>
				<view style="display: flex;width:100%;justify-content: space-between;border-top:1rpx solid #D8D8D8;"><button style="background-color: #1890FF;color:#FFFFFF;border-top:1rpx solid #1890FF;" @click="closeDialog()">取消</button><button style="background-color: #FFFFFF;color:#1890FF" @click="dialogInputConfirm()">确认</button></view>
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
		watch:{
			programinfo: function(val, oldVal) {
					// console.log('new: %s, old: %s', val, oldVal);
					this.isShowArr = true;
			}
		},
		data() {
			return {
				msgType: 'success',
				value: '',
				description:'',
				isShowArr:false,
				baseFormData: {
					name: '',
					description: '',
					rights:[3],
					types:[4],
				},
				rights: [{"value": 0,"text": "私人"	},{"value": 1,"text": "团队"},{"value":2,"text":"公开"}],
				types: [{"value": 0,"text": "图片分类"	},{"value": 1,"text": "目标检测"},{"value":2,"text":"图像分割"},{"value":2,"text":"文本分类"}],
			};
		},
		
		methods:{
			checkboxChange1(e){
				this.right=this.range1[e.detail.value].text;
				console.log(this.right);
			},
			checkboxChange2(e){
				this.type=this.range2[e.detail.value].text;
				console.log(this.type);
			},
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
										url: 'http://8.130.100.210:80/collection',
										method:"POST",
										header: {
											'content-type': 'application/x-www-form-urlencoded', 
										},
										data: {
											token:this.$store.state.token,
											name:this.value,
											description:this.description
										 },
									})
									if(r.code===200){
										console.log(r.collection_id);
										this.$store.commit("setProject",{val:r.collection_id});
										helper.clearial();
										helper.cleariwl();
										uni.navigateTo({
												url:"../../pages/ProgramInfo/ProgramInfo?val="+this.value+"&des="+this.description+"&id="+r.collection_id
										});
									}
									else{
										uni.showToast({
											image:"../../static/jinggao.png",
											title:"创建失败！",
										})
									}
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
					url:"../../pages/ProgramInfo/ProgramInfo?val="+item.name+"&des="+item.description+"&time="+item.created_time,
				})
			}
			},
		}
</script>

<style>
	@import url("../../common/welcome/iconfont.css");
	@import url("../../colorui/main.css");
	@import url("../../colorui/icon.css");
	.content1{
		min-height: 880rpx;
		height: 100%;
		background-color: #FFFFFF;
		margin-top: 100rpx;
		margin-bottom: 100rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
	}
	/* text{
		display: flex;
		width:400rpx;
		justify-content: center;
		align-items: ;
	} */
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
	uni-popup:after{
		border:none;
	}
	.example{
		width:85%;
		height:90%;
	}
</style>
