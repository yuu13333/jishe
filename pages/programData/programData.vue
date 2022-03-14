<template>
	<view class="content">
		<view class="header">
			<view class="iconfont"></view><view>总览</view>
		</view>
		<view class="info">
			
		</view>
	</view>
</template>

<script>
	import helper from '../../common/common/common.js'
	export default {
		onLoad(){
			//通过id请求得到项目的一些信息
		},
		data() {
			return {
				projectName:'',
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{
		width:100%;
		height:100vh;
	}
	.header{
		height:10%;
		width:100%;
		border-bottom: 1rpx solid #C0C0C0;
	}
	

</style>
