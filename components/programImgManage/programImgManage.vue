<template>
	<view class="content">
		<view class="top">
			<button style="width: 250rpx;height:100rpx;background-color: #000000;color: #FFFFFF;font-size: 35rpx;display: flex;align-items: center;justify-content: center;border-radius:100rpx ;">项目数据集</button>
		</view>
		<view class="layer">
			<view class="sq" @click="other()">
				<view class="imgArea">
					<view class="imgRow">
						<view class="imgCol">
							<image :src="typeone[0]?typeone[0].photo:'../../static/noimg.png'"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image :src="typeone[1]?typeone[1].photo:'../../static/noimg.png'"></image>
						</view>
					</view>
					<view class="imgRow">
						<view class="imgCol">
							<image :src="typeone[2]?typeone[2].photo:'../../static/noimg.png'"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image :src="typeone[3]?typeone[3].photo:'../../static/noimg.png'"></image>
						</view>
					</view>
				</view>
				<view style="height:25rpx;"></view>
				<view class="typeText">
					<view class="chinese">其他垃圾</view>
					<view class="english">Other waste</view>
				</view>		
			</view>
			<view class="sq" @click="kitchen()">
				<view class="imgArea">
					<view class="imgRow">
						<view class="imgCol">
							<image :src="typetwo[0]?typetwo[0].photo:'../../static/noimg.png'"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image :src="typetwo[1]?typetwo[1].photo:'../../static/noimg.png'"></image>
						</view>
					</view>
					<view class="imgRow">
						<view class="imgCol">
							<image :src="typetwo[2]?typetwo[2].photo:'../../static/noimg.png'"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image :src="typetwo[3]?typetwo[3].photo:'../../static/noimg.png'"></image>
						</view>
					</view>
				</view>
				<view style="height:25rpx;"></view>
				<view class="typeText">
					<view class="chinese">厨余垃圾</view>
					<view class="english">Kitchen waste</view>
				</view>					
			</view>
		</view>
		<view style="height:100rpx;"></view>
		<view class="layer">
			<view class="sq" @click="recycle()">
				<view class="imgArea">
					<view class="imgRow">
						<view class="imgCol">
							<image :src="typefour[0]?typefour[0].photo:'../../static/noimg.png'"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image :src="typefour[1]?typefour[1].photo:'../../static/noimg.png'"></image>
						</view>
					</view>
					<view class="imgRow">
						<view class="imgCol">
							<image :src="typefour[2]?typefour[2].photo:'../../static/noimg.png'"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image :src="typefour[3]?typefour[3].photo:'../../static/noimg.png'"></image>
						</view>
					</view>
				</view>
				<view style="height:25rpx;"></view>
				<view class="typeText">
					<view class="chinese">可回收垃圾</view>
					<view class="english">Recyclable waste</view>
				</view>						
			</view>
			<view class="sq" @click="hazardous()">
				<view class="imgArea">
					<view class="imgRow">
						<view class="imgCol">
							<image :src="typethree[0]?typethree[0].photo:'../../static/noimg.png'"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image :src="typethree[1]?typethree[1].photo:'../../static/noimg.png'"></image>
						</view>
					</view>
					<view class="imgRow">
						<view class="imgCol">
							<image :src="typethree[2]?typethree[2].photo:'../../static/noimg.png'"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image :src="typethree[3]?typethree[3].photo:'../../static/noimg.png'"></image>
						</view>
					</view>
				</view>
				<view style="height:25rpx;"></view>
				<view class="typeText">
					<view class="chinese">有害垃圾</view>
					<view class="english">Hazardous waste</view>
				</view>						
			</view>
		</view>
	</view>
</template>

<script>
	let obj={
		photo:"../../static/noimg.png",
	};
	export default {
		name:"programImgManage",
		props:{
			typeone:{
				type:Array,
				default:()=>{return new Array(4).fill(obj)},
			},
			typetwo:{
				type:Array,
				default:()=>{return new Array(4).fill(obj)},
			},
			typethree:{
				type:Array,
				default:()=>{return new Array(4).fill(obj);},
			},
			typefour:{
				type:Array,
				default:()=>{return new Array(4).fill(obj);},
			},
			isnew:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			//添加不同的参数 目前省略 交互时需要添加
			other(){
				// console.log(this.typeone[0].photo.slice(0,100));
				uni.navigateTo({
					url:`../../pages/programImgs/programImgs?info=${encodeURIComponent(JSON.stringify(this.typeone))}`
				})
			},
			kitchen(){
				uni.navigateTo({
					url:`../../pages/programImgs/programImgs?info=${encodeURIComponent(JSON.stringify(this.typetwo))}`
				})
				
			},
			recycle(){
				uni.navigateTo({
					url:`../../pages/programImgs/programImgs?info=${encodeURIComponent(JSON.stringify(this.typefour))}`
				})
				
			},
			hazardous(){
				uni.navigateTo({
					url:`../../pages/programImgs/programImgs?info=${encodeURIComponent(JSON.stringify(this.typethree))}`
				})
				
			}
		}
	}
</script>

<style>
	.content{
		width:100%;
		
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.top{
		width:100%;
		height:200rpx;
		display: flex;
		align-items:center;
		justify-content: flex-start;
	}

	.layer{
		width:100%;
		height:400rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.sq{
		height:100%;
		width:50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.imgArea{
		height:80%;
		width: 100%;
	}
	.typeText{
		height:20%;
		width:80%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	.chinese{
		color:#000000;
		font-size: 35rpx;
	}
	.english{
		color:#B9B9B9;
		font-size: 30rpx;
	}
	.imgRow{
		width: 100%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.imgcol{
		width:50%;
		height:100%;
	}
	image{
		width:150rpx;
		height:150rpx;
		border-radius: 20rpx;
	}
	button{
		position: absolute;
		left:50rpx;
	}

</style>
