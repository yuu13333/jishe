<template>
	<view class="content">
		<view class="imgarea" style="background-color: #F5F5F5;">
			<view v-for="(item,index) in imgurls" class="img" :key="index" @click="preview()">
				<image mode="widthFix" style="width:750rpx;" :style="{transform:transStyle}" :src="item"></image>
			</view>
		</view>
		
		<view class="operationArea">
			<view class="row">
				<view class="sq2">
					<view class="sq3" @click="left()">
						<view class="iconfont icon-cc-arrow-left-circle" style="font-size:80rpx;">						
						</view>
						<view style="height: 10rpx;">			
						</view>
						<view class="text" >
							上一张
						</view>
					</view>
					<view style="width: 50rpx;"></view>
					<view class="sq3" @click="right()">
						<view class="iconfont icon-cc-arrow-right-circle" style="font-size:80rpx;">						
						</view>
						<view style="height: 10rpx;">			
						</view>
						<view class="text" >
							下一张
						</view>
					</view>
				</view>
			</view>
			<view class="row">
				<view class="sq1" @click="addSonLabel()">
					<view class="iconfont icon-roundadd" style="font-size:80rpx;">						
					</view>
					<view style="height: 10rpx;">			
					</view>
					<view class="text" >
						添加子标签
					</view>
					<uni-popup ref="AddSonPop" type="dialog">
					<uni-popup-dialog style="color: #000000;" title="添加子标签" mode="input" placeholder="请输入子标签名" message="成功消息" :duration="2000" :before-close="true" @close="closeAddSon" @confirm="confirmSon"></uni-popup-dialog>
					</uni-popup>
				</view>
				<view class="sq1" @click="addMainLabel()">
					<view class="iconfont icon-add" style="font-size:90rpx;">						
					</view>
					<view style="height: 10rpx;">			
					</view>
					<view class="text" >
						添加主标签
					</view>
					<uni-popup ref="mainLabelPop" type="dialog">
					<view style="overflow:hidden;width:580rpx;height: 500rpx;background-color: #FFFFFF;border-radius: 20rpx;text-align: center;line-height: 100rpx;display:flex;flex-direction: column; justify-content: space-between;align-items: center;">
					<view style="width:100%;border-bottom:1rpx solid #C0C0C0;">选择标签</view>
					<scroll-view scroll-y="true" show-scrollbar="true" style="height:300rpx;width:80%;display: flex;align-items: center;justify-content: center;">
					<radio-group @change="categoryChange" style="width: 80%;">
						<label style="display: flex;" class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in categories" :key="item.id">
							<view>
							<radio :value="item.value" :checked="index === currentLabel" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
					</scroll-view>
					<view style="display: flex;width:100%;justify-content: space-between;"><button style="width:50%;border-radius:0;border:none; background-color:#007AFF;color:#FFFFFF;" @click="closeMainLabel()">取消</button><button style="width:50%;border:none;border-radius:0;background-color: #FFFFFF;color:#007AFF" @click="MainLabelConfirm()">确认</button></view>
					</view>
					</uni-popup>
				</view>
				<view class="sq1" @click="clearIndexLabel()">
					<view class="iconfont icon-shanchuyuan" style="font-size:75rpx;">						
					</view>
					<view style="height: 20rpx;">
					</view>
					<view class="text" >
						删除标签
					</view>
				</view>
			</view>
			<view class="row1">
			<view class="sq4">
				<view style="width:100rpx;"></view>
				
				<scroll-view scroll-top="0" show-scrollbar="true" scroll-y="true" style="width:300rpx;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;justify-content: center;">
				<view v-if="!indexLabel[index]" style="width:100%;height:100%;display: flex;justify-content: center;align-items: center;">(无标签)</view>
				<labelItem v-if="indexLabel[index]" :colorInfo="indexLabel[index]=='其他垃圾'?'otherGabage':indexLabel[index]=='厨余垃圾'?'chiefGabage':indexLabel[index]=='可回收垃圾'?'recycleGabage':indexLabel[index]=='有害垃圾'?'poisonGabage':'selectLabel'" :typeText="indexLabel[index]"></labelItem>
				<view style="height:20rpx;"></view>
				<view v-for="(item,index) in indexSonLabel[index]" :key="index">
				<labelSonItem :typeText="item" :colorInfo="indexLabel[index]=='其他垃圾'?'otherGabage':indexLabel[index]=='厨余垃圾'?'chiefGabage':indexLabel[index]=='可回收垃圾'?'recycleGabage':indexLabel[index]=='有害垃圾'?'poisonGabage':'selectLabel'"></labelSonItem>
				<view style="height:10rpx;"></view>
				</view>
				</scroll-view>
			</view>
			<view class="sq4">
				<button class="button" @click="toInfo()">提交识别</button>
				<uni-popup ref="submitPop" type="dialog">
				<view style="overflow:hidden;width:580rpx;height: 500rpx;background-color: #FFFFFF;border-radius: 20rpx;text-align: center;line-height: 100rpx;display:flex;flex-direction: column; justify-content: space-between;align-items: center;">
				<view style="width:100%;border-bottom:1rpx solid #C0C0C0;">选择存储位置</view>
				<scroll-view scroll-y="true" show-scrollbar="true" style="height:300rpx;width:80%;display: flex;align-items: center;justify-content: center;">
				<radio-group @change="radioChange" style="width: 80%;">
					<label style="display: flex;align-items: center;justify-content: center;flex-direction: column;" class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.id">
						<view>
						<radio :value="item.id" :checked="index === current" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</radio-group>
				</scroll-view>
				<view style="display: flex;width:100%;justify-content: space-between;"><button style="width:50%;border-radius:0;border:none; background-color:#007AFF;color:#FFFFFF;" @click="closeDialog()">取消</button><button style="width:50%;border:none;border-radius:0;background-color: #FFFFFF;color:#007AFF" @click="dialogInputConfirm()">确认</button></view>
				</view>
				</uni-popup>
				<uni-popup ref="indentifyPop" type="dialog">
				<view style="overflow:hidden;width:580rpx;height: 400rpx;background-color: #FFFFFF;border-radius: 20rpx;text-align: center;line-height: 100rpx;display:flex;flex-direction: column; justify-content: space-between;align-items: center;">
				<view style="width:100%;border-bottom:1rpx solid #C0C0C0;">智能识别结果</view>
				<view style="width:90%;flex:1 1 auto; line-height:1.8;font-size:35rpx;display: flex;align-items: center;text-align: left;">为您识别当前图像所属类型为"{{type}}"，是否添加为标签?</view>
				<view style="display: flex;width:100%;justify-content: space-between;"><button style="width:50%;border-radius:0;border:none; background-color:#007AFF;color:#FFFFFF;" @click="rejectLabel()">取消</button><button style="width:50%;border:none;border-radius:0;background-color: #FFFFFF;color:#007AFF" @click="LabelConfirm()">确认</button></view>
				</view>
				</uni-popup>
				</view>
			</view>
			<view class="lastTime" style="color:#A5A5A5;width:100%;display: flex;align-items: center;justify-content: center;font-size: 25rpx;">
				单次识别图片数量上限为：20
			</view>
			<!-- <image src="../../static/bottom.png" mode="widthFix"></image> -->
		</view>
	</view>
</template>

<script>
	import helper from '../../common/common/common.js'
	import { pathToBase64, base64ToPath } from '../../js_sdk/mmmm-image-tools/index.js'
	export default {
		onLoad() {
			this.islog=this.$store.state.islog;
			this.items=this.$store.state.projectlist;
			console.log(this.currentProject);
			// console.log(this.items);
			this.imgurls=helper.getial();
			this.imglabels=helper.getiwl(); 
			// console.log(this.imgurls.length);
			for(let i=0;i<this.imgurls.length;i++){
				if(this.imgurls[i].length>0&&this.imglabels.has(this.imgurls[i])){
				this.indexLabel[i]=this.imglabels.get(this.imgurls[i])[0];
				this.indexSonLabel[i]=this.imglabels.get(this.imgurls[i])[1];
				}
			}
			this.$forceUpdate();
			if(this.imgurls.length>=1)
			this.requestLabel();
		},
		data() {
			return {
				islog:false,
				imgurls:[],
				imglabels:null,
				imgurl:"",
				type:"有害垃圾",
				index:0,
				xdistance:0,
				transStyle:'',
				current:0,
				currentLabel:0,
				indexLabel:new Array(20).fill(undefined),
				indexSonLabel:new Array(20).fill(undefined),
				items: [],
				categories:[{
					value:'其他垃圾',
					name:'其他垃圾',
					checked:'true'
					
				},{
					value:'厨余垃圾',
					name:'厨余垃圾'
				},{
					value:'可回收垃圾',
					name:'可回收垃圾'

				},{
					value:'有害垃圾',
					name:'有害垃圾'
				}],
				photoid:[],
			}
		},
		methods: {
			async requestLabel(){
				if(this.indexLabel[this.index]!=undefined)
				return;
				else{
					try{
						const r = await this.request({
								url: 'http://8.130.100.210:80/predict',
								method:"POST",
								data: {
									image:this.imgurls[this.index],
								},
						})
						this.$refs.indentifyPop.open();
					}catch(e){
						//TODO handle the exception
					}
				}
			},
			radioChange: function(evt) {
			            for (let i = 0; i < this.items.length; i++) {
			                if (this.items[i].value === evt.detail.value) {
			                    this.current = i;
			                    break;
			                }
			            }
			        },
			categoryChange:function(evt){
				for (let i = 0; i < this.categories.length; i++) {
				    if (this.categories[i].value === evt.detail.value) {
				        this.currentLabel = i;
				        break;
				    }
				}
			},
			
			async toInfo(){
				for(let i=0;i<this.imgurls.length;i++){
					if(this.indexLabel[i]===undefined){
						uni.showToast({
							icon:"none",
							image:"../../static/jinggao.png",
							title:'标签不完整',
							duration:800
						})
						return;
					}
				}
				let currentproject = this.$store.state.currentProject;
				
				//判断是否登录--离线识别
				if(!this.islog){
					//不需要projectid
					
					
				}
				else{
					if(currentproject==='')
						this.$refs.submitPop.open();
					else{
						//在线识别 结果传递
						for(let i=0;i<this.imgurls.length;i++){
							// console.log("image:"+this.imgurls[i]+",label:"+this.indexLabel[i]+",sub_label:"+this.indexSonLabel[i]);
							try{
								const r = await this.request({
									url: 'http://8.130.100.210:80/photo',
									method:"POST",
									header: {
										'content-type': 'application/x-www-form-urlencoded', 
									},
									data: {
										token:this.$store.state.token,
										collection_id:currentproject,
										image:this.imgurls[i],
										label:this.indexLabel[i],
										sub_label:this.indexSonLabel[i],
										},
								})
								if(r.code===200){
									console.log(r);
									this.photoid.push(r.photo_id);
									if(i===this.imgurls.length-1){
										//结果传递给requestinfo页面
										uni.navigateTo({
											url:"../loading/loading?ids="+this.photoid
										})
									}
								}
								else{
									uni.showToast({
										image:"../../static/jinggao.png",
										title:"识别请求失败！",
									})
									break;
								}
							}catch(e){
								console.log(e);
								break;
							}
						}
					}
				}
			},
			closeDialog(){
				this.$refs.submitPop.close();
			},
			rejectLabel(){
				this.$refs.indentifyPop.close();
			},
			LabelConfirm(){
				helper.addiwl(this.imgurls[this.index],this.type);
				this.imglabels=helper.getiwl();
				this.indexLabel[this.index]=this.imglabels.get(this.imgurls[this.index])[0];
				this.indexSonLabel[this.index]=this.imglabels.get(this.imgurls[this.index])[1];
				this.$forceUpdate();
				console.log(this.indexLabel[this.index]);
				this.$refs.indentifyPop.close();
				uni.showToast({
					image:'../../static/chenggong_1.png',
					title:'添加成功!',
					duration:800,
				});	
			},
			dialogInputConfirm(){
				uni.navigateTo({
					url:"../Requestinfo/Requestinfo",
				})
			},
			left(){
				if(this.index>0){
					this.index--;
					this.xdistance=String(this.index*(-750))+'rpx';
					console.log(this.xdistance);
					this.transStyle = 'translateX('+this.xdistance+')';
					this.requestLabel();
				}
			},
			right(){
				if(this.index<this.imgurls.length-1){
					this.index++;
					this.xdistance=String(this.index*(-750))+'rpx';
					console.log(this.xdistance);
					this.transStyle = 'translateX('+this.xdistance+')';
					this.requestLabel();
				}
				
			},
			addMainLabel(){
				this.$refs.mainLabelPop.open();
			},
			closeMainLabel(){
				this.$refs.mainLabelPop.close();
			},
			MainLabelConfirm(){
				//添加标签的数据结构操作
				helper.addiwl(this.imgurls[this.index],this.categories[this.currentLabel].value);
				this.currentLabel=0;
				// console.log(this.currentLabel);
				//console.log(helper.getiwl().get(this.imgurls[this.index]));
				this.imglabels=helper.getiwl(); 
				this.indexLabel[this.index]=this.imglabels.get(this.imgurls[this.index])[0];
				this.indexSonLabel[this.index]=this.imglabels.get(this.imgurls[this.index])[1];
				this.$forceUpdate();
				console.log(this.indexLabel[this.index]);
				this.$refs.mainLabelPop.close();
				uni.showToast({
					image:'../../static/chenggong_1.png',
					title:'添加成功!',
					duration:800,
				});	
			},
			clearIndexLabel(){
				if(this.indexLabel[this.index]!==undefined){
					helper.deleteiwl(this.indexLabel[this.index]);
					this.indexLabel[this.index]=undefined;
					this.indexSonLabel[this.index]=undefined;
					this.$forceUpdate();
					uni.showToast({
						image:'../../static/chenggong_1.png',
						title:'删除成功!',
						duration:800
					});	
					console.log(this.imglabels.has(this.imgurls[this.index]));
				}
				else{
					uni.showToast({
						image:'../../static/jinggao.png',
						title:'当前无标签',
						duration:800
					});		
				}
				
			},
			addSonLabel(){
				if(this.indexLabel[this.index]==undefined){
					uni.showToast({
						image:"../../static/jinggao.png",
						title:'未添加主标签',
						duration:800
					})
				}
				else{
					this.$refs.AddSonPop.open();
				}
			},
			closeAddSon(){
				this.$refs.AddSonPop.close();
			},
			confirmSon(value){
				this.$refs.AddSonPop.close();
				helper.addiwlson(this.imgurls[this.index],value);
				this.imglabels=helper.getiwl(); 
				this.indexSonLabel[this.index]=this.imglabels.get(this.imgurls[this.index]).slice(1);
				this.$forceUpdate();
				uni.showToast({
					image:'../../static/chenggong_1.png',
					title:'添加成功!',
					duration:800,
				});
				//添加子标签
			},
			preview(){
				console.log("!");
				let that = this;
								// uni.showLoading({
								// 	title:"图片处理中..."
								// })
								base64ToPath(this.imgurls[this.index]) //logoul为base64为图片流
								  .then(path => {
									let imgsArray = [];
									uni.hideLoading()
									imgsArray[0] = path;
									uni.previewImage({
										current: 0, 
										urls: imgsArray
									});
								  })
								  .catch(error => {
										that.$refs.uToast.show({
											title: '图片加载失败',
											type: 'warning'
										})
									// uni.hideLoading()
								  })
			}
			
		}
	}
</script>

<style>
	
	@import url("../../common/remark/iconfont.css");
	.row{
		width:100%;
		height:150rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.row1{
		width:100%;
		height:250rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		
	}
	image{
		transition: linear 0.2s; 
		
	}
	.sq1{
		width:30%;
		height:100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
	.sq2{
		width:100%;
		height:100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.sq4{
		width:40%;
		height:100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}
	.sq3{
		width:50%;
		height:100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.img{
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.button{
		background-color: #000000;
		color:#ffffff;
		border:solid 1px #000000;
		border-radius: 50rpx;
		font-size: 35rpx;
		width:300rpx;
		height:110rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.wbtn{
		background-color: #ffffff;
		color:#000000;
		border:solid 1px #000000;
		border-radius: 50rpx;
		font-size: 35rpx;
		width:290rpx;
		height:110rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
	.btn{
		width:300rpx;
		height:200rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.btn::after{
		border:none;
	}
	
	.imgarea{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width:750rpx;
		height:600rpx;
		overflow-y: hidden;
		overflow-x: hidden;
	}
	.operationArea{
		width:750rpx;
		height:750rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.content{
		height:100vh;
		width:100%;
		display: flex;
		flex-direction: column;
	}
	.imgarea{
		width:750rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		
	}
	.operations{
		width:100%;
		height:50%;
	}
	
	.otherGabage{
		background-color: #5F9EA0;
		color:#FFFFFF;
		border-radius:20rpx;
	}
	
	.chiefGabage{
		background-color:#8FBC8B;
		color:#ffffff;
		border-radius:20rpx;
	}
	
	.recycleGabage{
		background-color: #708090;
		color:#FFFFFF;
		border-radius:20rpx;
	}
	
	.poisonGabage{
		background-color: #4682B4;
		color:#ffffff;
	}
	
	.selectLabel{
		background-color: #FFFFFF;
		color:#000000;
		border-radius:20rpx;
	}
	
</style>
