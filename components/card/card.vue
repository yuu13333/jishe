<template>
	<scroll-view class="content">
	<view class="cards" v-for="(item,index) in cards" @click="clickCard(item)" :key="index">
		<uni-card style="height: 400rpx;" :title="item.title" extra="额外信息">
			<view class="cardview">
			<image style="width:150rpx;height: 150rpx;border-radius: 400rpx;" :src="item.url"></image>
			<view style="width:50rpx"></view>
		    <text>{{item.description}}</text>
			</view>
		</uni-card>
	</view>
	</scroll-view>
</template>

<script>
	export default {
		props:["info"],
		name:"card",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.content{
		height: 100%;
		margin-top: 100rpx;
		margin-bottom: 100rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
	

</style>
