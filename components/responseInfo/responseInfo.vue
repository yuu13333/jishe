<template>
	<scroll-view scroll-x="false" scroll-y="true">
		<view v-for="(item,index) in cards" @click="clickCard()">
			<uni-card style="height: 300rpx;" :title="item.title" extra="额外信息">
				<view class="cardview">
				<image style="width:150rpx;height: 150rpx;" :src="item.url"></image>
				<view style="width:50rpx"></view>
			    <text>{{item.description}}</text>
				</view>
			</uni-card>
		</view>	
	</scroll-view>
</template>

<script>
	export default {
		name:"responseInfo",
		data() {
			return {
				cards:[
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
					},
				],
				
			};
		}
	}
</script>

<style>
	.cardview{
		height: 200rpx;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	scroll-view{
		background-color: #F0F0F0;
	}
</style>
