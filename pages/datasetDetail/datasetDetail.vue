<template>
	<view>
		<uni-nav-bar shadow left-icon="left" leftText="返回" backgroundColor="#007AFF" color="#fff" rightText="" title="详情页" @clickLeft="back"/>
		<view style="width:100%;height:300rpx;display: flex;flex-direction: column;justify-content: space-around;align-items: center;">
			<view class="text">数据集名称:XXXX</view>
			<view  class="text">数据集描述:XXXXXX</view>
			<view  class="text">创建时间:XXXXXXXX</view>
		</view>
		<view>
			<uni-swipe-action>
			<uni-swipe-action-item :right-options="options" @click="onClick">
				<view>
					<uni-card style="height: 320rpx;" :title="'ID:'" extra="">
						<view class="cardview">
						<image mode="aspectFill" @click="preview()" style="width:150rpx;height: 150rpx;" src="../../static/example/sample.png"></image>
						<view style="width:30rpx"></view>
					    <view style="display: flex;flex-direction:column;justify-content: space-around;align-items: flex-start;width:70%;">
					    <view>- 图片种类：XXX</view>
					    <view>- 分属于：XXX</view>
					    <view>- 创建于：<text style="font-size: 25rpx;">2020年2月2日 14:00</text></view>
					    </view>
						</view>
					</uni-card>
				</view>
			</uni-swipe-action-item>
			<uni-swipe-action-item :right-options="options" @click="onClick">
				<view>
					<uni-card style="height: 320rpx;" :title="'ID:'" extra="">
						<view class="cardview">
						<image mode="aspectFill" @click="preview(index)" style="width:150rpx;height: 150rpx;" src="../../static/example/sample.png"></image>
						<view style="width:30rpx"></view>
					    <view style="display: flex;flex-direction:column;justify-content: space-around;align-items: flex-start;width:70%;">
					    <view>- 图片种类：XXX</view>
					    <view>- 分属于：XXX</view>
					    <view>- 创建于：<text style="font-size: 25rpx;">2020年2月2日 14:00</text></view>
					    </view>
						</view>
					</uni-card>
				</view>
			</uni-swipe-action-item>
			<uni-swipe-action-item :right-options="options">
				<view>
					<uni-card style="height: 320rpx;" :title="'ID:'" extra="">
						<view class="cardview">
						<image mode="aspectFill" @click="preview(index)" style="width:150rpx;height: 150rpx;" src="../../static/example/sample.png"></image>
						<view style="width:30rpx"></view>
					    <view style="display: flex;flex-direction:column;justify-content: space-around;align-items: flex-start;width:70%;">
					    <view>- 图片种类：XXX</view>
					    <view>- 分属于：XXX</view>
					    <view>- 创建于：<text style="font-size: 25rpx;">2020年2月2日 14:00</text></view>
					    </view>
						</view>
					</uni-card>
				</view>
			</uni-swipe-action-item>
			<uni-swipe-action-item :right-options="options">
				<view>
					<uni-card style="height: 320rpx;" :title="'ID:'" extra="">
						<view class="cardview">
						<image mode="aspectFill" @click="preview(index)" style="width:150rpx;height: 150rpx;" src="../../static/example/sample.png"></image>
						<view style="width:30rpx"></view>
					    <view style="display: flex;flex-direction:column;justify-content: space-around;align-items: flex-start;width:70%;">
					    <view>- 图片种类：XXX</view>
					    <view>- 分属于：XXX</view>
					    <view>- 创建于：<text style="font-size: 25rpx;">2020年2月2日 14:00</text></view>
					    </view>
						</view>
					</uni-card>
				</view>
			</uni-swipe-action-item>
			<uni-swipe-action-item :right-options="options">
				<view>
					<uni-card style="height: 320rpx;" :title="'ID:'" extra="">
						<view class="cardview">
						<image mode="aspectFill" @click="preview(index)" style="width:150rpx;height: 150rpx;" src="../../static/example/sample.png"></image>
						<view style="width:30rpx"></view>
					    <view style="display: flex;flex-direction:column;justify-content: space-around;align-items: flex-start;width:70%;">
					    <view>- 图片种类：XXX</view>
					    <view>- 分属于：XXX</view>
					    <view>- 创建于：<text style="font-size: 25rpx;">2020年2月2日 14:00</text></view>
					    </view>
						</view>
					</uni-card>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				      options:[
				         {
				            text: '反馈错误',
				            style: {
								backgroundColor:'#dd524d',
								color:'#ffffff'
				            }
				        }
				      ],
				
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			preview(){
				console.log("preview!");
				uni.previewImage({
							urls: "../../static/example/sample.png",
							longPressActions: {
								itemList: ['发送给朋友', '保存图片', '收藏'],
								success: function() {
									//console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
								},
								fail: function(err) {
									console.log(err.errMsg);
								}
							}
						});
			},
			onClick(e){
				console.log(e);
				uni.showToast({
					icon:"../../static/chenggong_1.png",
					title:"反馈成功！",
				})
			}
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
.text{
	font-size: 15px;
	color:#808080;
	width:80%;
	text-align: center;
	display: flex;
	justify-content: flex-start;
}
</style>
