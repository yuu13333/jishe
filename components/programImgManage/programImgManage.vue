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
							<image src="../../static/mock/1.jpg"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image src="../../static/mock/2.jpg"></image>
						</view>
					</view>
					<view class="imgRow">
						<view class="imgCol">
							<image src="../../static/mock/3.jpg"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image src="../../static/mock/4.jpg"></image>
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
							<image src="../../static/mock/4.jpg"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image src="../../static/mock/5.jpg"></image>
						</view>
					</view>
					<view class="imgRow">
						<view class="imgCol">
							<image src="../../static/mock/1.jpg"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image src="../../static/mock/8.jpg"></image>
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
							<image src="../../static/mock/6.jpg"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image src="../../static/mock/8.jpg"></image>
						</view>
					</view>
					<view class="imgRow">
						<view class="imgCol">
							<image src="../../static/mock/7.jpg"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image src="../../static/mock/5.jpg"></image>
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
							<image src="../../static/mock/2.jpg"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image src="../../static/mock/5.jpg"></image>
						</view>
					</view>
					<view class="imgRow">
						<view class="imgCol">
							<image src="../../static/mock/4.jpg"></image>
						</view>
						<view style="width:10rpx;"></view>
						<view class="imgCol">
							<image src="../../static/mock/3.jpg"></image>
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
	export default {
		name:"programImgManage",
		data() {
			return {
				
			};
		},
		methods:{
			//添加不同的参数 目前省略 交互时需要添加
			other(){
				uni.navigateTo({
					url:'../../pages/programImgs/programImgs'
				})
			},
			kitchen(){
				uni.navigateTo({
					url:'../../pages/programImgs/programImgs'
				})
				
			},
			recycle(){
				uni.navigateTo({
					url:'../../pages/programImgs/programImgs'
				})
				
			},
			hazardous(){
				uni.navigateTo({
					url:'../../pages/programImgs/programImgs'
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
