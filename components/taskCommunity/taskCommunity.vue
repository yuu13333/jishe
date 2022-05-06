<template>
	<view class="content">
		<view style="background-color: #007AFF;height:100rpx;width:100%;">
			<image mode=aspectFill style="background-color: #007AFF;height:100rpx;width:100%;"></image>
		</view>
		<view style="height:100rpx;width:100%;">
			<uni-search-bar @confirm="search" :focus="false" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
			@cancel="cancel" @clear="clear">
			</uni-search-bar>
		</view>
		<view style="width:100%;flex:1 1 auto;">
		<uni-section title="实心标签" type="line" style="width:100%;flex:1 1 auto;">
						<!-- <view class="uni-padding-wrap uni-common-mt"> -->
							<uni-segmented-control :current="current" :values="items" :style-type="styleType"
								:active-color="activeColor" @clickItem="onClickItem" />
						<!-- </view> -->
						<view class="content2">
							<view v-if="current === 0">
								<scroll-view class="cards">
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<button class="bottom-btn" @click="pushTask()">发布任务</button>
								<view style="height:100rpx;width:100%;"></view>
								</scroll-view>
							</view>
							<view v-if="current === 1">
								<scroll-view class="cards">
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<view style="height:100rpx;width:100%;"></view>
								</scroll-view>
							</view>
							<view v-if="current === 2">
								<scroll-view class="cards">
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<uni-section title="双标题卡片" type="line" @click="toDetail()">
									<uni-card title="XXXX任务" sub-title="任务类型" extra="进度" :thumbnail="avatar">
										<text class="uni-body">任务描述关于这个任务需要对XXX数据做出XXXXXX收集和标注XXXX</text>
									</uni-card>
								</uni-section>
								<view style="height:100rpx;width:100%;"></view>
								</scroll-view>
							</view>
						</view>
		</uni-section>	
		</view>
		<view style="background-color: #007AFF;height:100rpx;width:100%;">
		</view>
	</view>
</template>

<script>
	export default {
		name:"taskCommunity",
		data() {
			return {
				searchText:'',
				items:['我发布的','我参与的','我收藏的'],
				activeColor: '#007aff',
				styleType: 'button',
				current: 0,
				searchValue:"任务搜索",
				avatar:"../../static/example/sample.png",
			}
		},
		methods: {
			onClickItem(e) {
							if (this.current !== e.currentIndex) {
								this.current = e.currentIndex
							}
			},
						search(res) {
							// uni.showToast({
							// 	title: '搜索：' + res.value,
							// 	icon: 'none'
							// })
						},
						input(res) {
							console.log('----input:', res)
						},
						clear(res) {
							uni.showToast({
								title: '清除成功' + res.value,
								icon: 'none'
							})
						},
						blur(res) {
							// uni.showToast({
							// 	title: 'blur事件，输入值为：' + res.value,
							// 	icon: 'none'
							// })
						},
						focus(e) {
							// uni.showToast({
							// 	title: 'focus事件，输出值为：' + e.value,
							// 	icon: 'none'
							// })
						},
						cancel(res) {
							// uni.showToast({
							// 	title: '点击取消，输入值为：' + res.value,
							// 	icon: 'none'
							// })
						},
						toDetail(){
							console.log("to!");
							uni.navigateTo({
								url:"../../pages/taskDetail/taskDetail",
							});
						},
						pushTask(){
							uni.navigateTo({
								url:"../../pages/pushTask/pushTask",
							});
						}
		}
	}
</script>


<style>
	.content{
		width:100%;
		height: 100vh;
	/* 	position:absolute;
		top:100rpx; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}
	.cards{
		height:100%;
		width:100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.content2{
		width:100%;
		height:100%;
	}
	.bottom-btn{
		width: 300px;
		height: 40px;
		border-radius: 100px;
		background-color: #007AFF;
		color: rgba(255, 255, 255, 100);
		font-size: 15px;
		line-height: 40px;
		text-align: center;
		font-family: PingFang SC;
	}
</style>
