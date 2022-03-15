<template>
	<view class="content">
		<view class="imgarea" >
			<view v-for="(item,index) in imgurls" class="img">
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
				<view class="sq1">
					<view class="iconfont icon-roundadd" style="font-size:80rpx;">						
					</view>
					<view style="height: 10rpx;">			
					</view>
					<view class="text" @click="addSonLabel()">
						添加子标签
					</view>
					<uni-popup ref="AddSonPop" type="dialog">
					<uni-popup-dialog title="添加子标签" mode="input" placeholder="请输入子标签名" message="成功消息" :duration="2000" :before-close="true" @close="closeAddSon" @confirm="confirmSon"></uni-popup-dialog>
					</uni-popup>
				</view>
				<view class="sq4">
					<button class="btn" @click="addMainLabel()" :class="indexLabel[index]=='其他垃圾'?'otherGabage':indexLabel[index]=='厨余垃圾'?'chiefGabage':indexLabel[index]=='可回收垃圾'?'recycleGabage':indexLabel[index]=='有害垃圾'?'poisonGabage':'selectLabel'">
						<view :class="indexLabel[index]=='添加主标签'?'wbtn':''">{{indexLabel[index]}}</view>
						<view style="width:80%;border: 1rpx solid #FFFFFF;"></view>
						<view style="color:#FFFFFF;font-size: 30rpx;">{{indexSonLabel[index]}}</view>
					</button>
					<uni-popup ref="mainLabelPop" type="dialog">
					<view style="overflow:hidden;width:580rpx;height: 500rpx;background-color: #FFFFFF;border-radius: 20rpx;text-align: center;line-height: 100rpx;display:flex;flex-direction: column; justify-content: space-between;align-items: center;">
					<view style="width:100%;border-bottom:1rpx solid #C0C0C0;">选择标签</view>
					<scroll-view scroll-y="true" show-scrollbar="true" style="height:300rpx;width:80%;display: flex;align-items: center;justify-content: center;">
					<radio-group @change="categoryChange" style="width: 80%;">
						<label style="display: flex;" class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in categories" :key="item.value">
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
			</view>
			<view class="row">
				<view class="sq1" @click="clearIndexLabel()">
					<view class="iconfont icon-shanchuyuan" style="font-size:75rpx;">						
					</view>
					<view style="height: 10rpx;">
					</view>
					<view class="text" >
						删除标签
					</view>
				</view>
				<view class="sq4">
					<button class="button" @click="toInfo()">提交识别</button>
					<uni-popup ref="submitPop" type="dialog">
					<view style="overflow:hidden;width:580rpx;height: 500rpx;background-color: #FFFFFF;border-radius: 20rpx;text-align: center;line-height: 100rpx;display:flex;flex-direction: column; justify-content: space-between;align-items: center;">
					<view style="width:100%;border-bottom:1rpx solid #C0C0C0;">选择存储位置</view>
					<scroll-view scroll-y="true" show-scrollbar="true" style="height:300rpx;width:80%;display: flex;align-items: center;justify-content: center;">
					<radio-group @change="radioChange" style="width: 80%;">
						<label style="display: flex;" class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
							<view>
							<radio :value="item.value" :checked="index === current" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
					</scroll-view>
					<view style="display: flex;width:100%;justify-content: space-between;"><button style="width:50%;border-radius:0;border:none; background-color:#007AFF;color:#FFFFFF;" @click="closeDialog()">取消</button><button style="width:50%;border:none;border-radius:0;background-color: #FFFFFF;color:#007AFF" @click="dialogInputConfirm()">确认</button></view>
					</view>
					</uni-popup>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import helper from '../../common/common/common.js'
	export default {
		onLoad(base64) {
			// if(base64.iscamera=="true"){
			// 	//console.log(base64);
			// 	console.log("调用相机!");
			// 	this.imgurl = base64.base64.replace(new RegExp(" ", "gm"), "+");
			// 	this.imgurls.push(base64.base64.replace(new RegExp(" ", "gm"), "+"));
				
			// }
			// else{
			// 	console.log("调用相册！");
			// 	console.log(JSON.parse(base64.base64).length);
			// 	for(const item of JSON.parse(base64.base64))
			// 	this.imgurls.push(item.replace(new RegExp(" ", "gm"), "+"));
			// }
			//全局变量代替暂时存储
			this.imgurls=helper.getial();
			this.imglabels=helper.getiwl(); 
			console.log(this.imgurls.length);
			for(let i=0;i<this.imgurls.length;i++){
				if(this.imgurls[i].length>0){
				this.indexLabel[i]=this.imglabels.get(this.imgurls[i])[0];
				this.indexSonLabel[i]=this.imglabels.get(this.imgurls[i])[1];
				}
			}
			this.$forceUpdate();
			//console.log(typeof this.imgurls[1]);
			
		},
		// onBackPress(options) {
		//     uni.redirectTo({
		//     	url:"../ProgramInfo/ProgramInfo",
		//     })
		// 	return true;
		// },
		data() {
			return {
				imgurls:[],
				imglabels:null,
				imgurl:"",
				index:0,
				xdistance:0,
				transStyle:'',
				current:0,
				currentLabel:0,
				indexLabel:new Array(20).fill("添加主标签"),
				indexSonLabel:new Array(20).fill(undefined),
				items: [{
				                    value: '项目一id',
				                    name: '项目一',
									 checked: 'true'
				                },
				                {
				                    value: '项目二id',
				                    name: '项目二',
				                },
				                {
				                    value: '项目三id',
				                    name: '项目三'
				                },
								{
								    value: '项目四id',
								    name: '项目四',
								},
								{
								    value: '项目五id',
								    name: '项目五'
								},
				              
				            ],
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
				}]
			}
		},
		methods: {
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
			
			toInfo(){
				let currentproject = helper.getProject();
				if(currentproject==='')
					this.$refs.submitPop.open();
				else
					uni.navigateTo({
						url:"../Requestinfo/Requestinfo"
					})
			},
			closeDialog(){
				this.$refs.submitPop.close();
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
					
				}
			},
			right(){
				if(this.index<this.imgurls.length-1){
					this.index++;
					this.xdistance=String(this.index*(-750))+'rpx';
					console.log(this.xdistance);
					this.transStyle = 'translateX('+this.xdistance+')';
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
				helper.deleteiwl(this.indexLabel[this.index]);
				this.indexLabel[this.index]="添加主标签";
				this.indexSonLabel[this.index]=undefined;
				this.$forceUpdate();
				uni.showToast({
					image:'../../static/chenggong_1.png',
					title:'删除成功!',
					duration:800
				});	
				console.log(this.imglabels.has(this.imgurls[this.index]));
			},
			addSonLabel(){
				if(this.indexLabel[this.index]=="添加主标签"){
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
				this.indexSonLabel[this.index]=this.imglabels.get(this.imgurls[this.index])[1];
				console.log(this.indexSonLabel[this.index]);
				this.$forceUpdate();
				uni.showToast({
					image:'../../static/chenggong_1.png',
					title:'添加成功!',
					duration:800,
				});
				//添加子标签
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
