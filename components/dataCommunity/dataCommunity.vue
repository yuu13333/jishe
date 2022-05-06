<template>
	<view>
		<view style="display:flex;justify-content: space-between;align-items: center;height:200rpx;width:100%;">
			<image style="width:150rpx;height:150rpx;" mode="aspectFit" src="../../static/dtrash.png"></image>
			<uni-search-bar style="width:70%;" v-model="searchValue"  :focus="false">
			</uni-search-bar>
		</view>
		<view style="width:100%;height:290rpx;display: flex;justify-content: center;align-items: center;">
			<image style="width:95%;height:100%;border-radius: 20rpx;" src="../../static/mock/2.jpg" mode="aspectFill"></image>
		</view>
		<view style="height:20rpx;"></view>
		<view>
			<uni-swiper-dot class="uni-swiper-dot-box"  :info="info" :current="currentindex" :mode="mode"
						:dots-styles="dotsStyles" field="content">
				<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
					<swiper-item v-for="(item, index) in 4" :key="index">
						<view style="width: 100%;display: flex;align-items: center;justify-content: center;">
							<image style="width:95%;height:320rpx;border-radius: 20rpx;" mode="aspectFill" :src="images[index]"></image>
							<!-- <text style="color: #000; font-size: 32px;">{{index+1}}</text> -->
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view style="height:20rpx;"></view>
		<uni-segmented-control :current="current" :values="items" @clickItem="changeCurrent"  styleType="button" activeColor="#009900"></uni-segmented-control>
		    <view class="content">
		            <view v-show="current === 0" style="width:100%;display: flex;flex-wrap: wrap;">
		                <view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
							<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/1.jpg"></image>
							<view style="height:15rpx;"></view>
							<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
							<view style="height:15rpx;"></view>
							<view style="width:70%; display: flex;justify-content: space-around;">
								<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
								<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
								<uni-fav :checked="checked" style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
							</view>
						</view>
						<view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
							<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/2.jpg"></image>
							<view style="height:15rpx;"></view>
							<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
							<view style="height:15rpx;"></view>
							<view style="width:70%; display: flex;justify-content: space-around;">
								<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
								<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
								<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
							</view>
						</view>
						<view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
							<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/3.jpg"></image>
							<view style="height:15rpx;"></view>
							<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
							<view style="height:15rpx;"></view>
							<view style="width:70%; display: flex;justify-content: space-around;">
								<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
								<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
								<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
							</view>
						</view>
						<view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
							<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/4.jpg"></image>
							<view style="height:15rpx;"></view>
							<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
							<view style="height:15rpx;"></view>
							<view style="width:70%; display: flex;justify-content: space-around;">
								<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
								<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
								<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
							</view>
						</view>
						<view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
							<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/5.jpg"></image>
							<view style="height:15rpx;"></view>
							<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
							<view style="height:15rpx;"></view>
							<view style="width:70%; display: flex;justify-content: space-around;">
								<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
								<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
								<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
							</view>
						</view>
						<view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
							<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/6.jpg"></image>
							<view style="height:15rpx;"></view>
							<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
							<view style="height:15rpx;"></view>
							<view style="width:70%; display: flex;justify-content: space-around;">
								<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
								<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
								<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
							</view>
						</view>
						<uni-pagination style="width:100%;" :total="60" pageSize="6"/>
						<view style="height: 30rpx;"></view>
		            </view>
					
		            <view v-show="current === 1" style="width:100%;display: flex;flex-wrap: wrap;">
		                <view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
		                	<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/7.jpg"></image>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%; display: flex;justify-content: space-around;">
		                		<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
		                		<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
		                		<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
		                	</view>
		                </view>
		                <view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
		                	<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/3.jpg"></image>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%; display: flex;justify-content: space-around;">
		                		<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
		                		<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
		                		<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
		                	</view>
		                </view>
		                <view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
		                	<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/5.jpg"></image>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%; display: flex;justify-content: space-around;">
		                		<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
		                		<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
		                		<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
		                	</view>
		                </view>
		                <view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
		                	<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/6.jpg"></image>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%; display: flex;justify-content: space-around;">
		                		<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
		                		<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
		                		<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
		                	</view>
		                </view>
		                <view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
		                	<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/7.jpg"></image>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%; display: flex;justify-content: space-around;">
		                		<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
		                		<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
		                		<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
		                	</view>
		                </view>
		                <view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
		                	<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/1.jpg"></image>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%; display: flex;justify-content: space-around;">
		                		<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
		                		<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
		                		<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
		                	</view>
		                </view>
		                <uni-pagination style="width:100%;" :total="36" pageSize="6"/>
		                <view style="height: 30rpx;"></view>
		            </view>
		            <view v-show="current === 2" style="width:100%;display: flex;flex-wrap: wrap;">
		                <view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
		                	<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/5.jpg"></image>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%; display: flex;justify-content: space-around;">
		                		<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
		                		<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
		                		<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
		                	</view>
		                </view>
		                <view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
		                	<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/4.jpg"></image>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%; display: flex;justify-content: space-around;">
		                		<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
		                		<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
		                		<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
		                	</view>
		                </view>
		                <view style="display: flex;flex-direction: column;justify-content: center;width:375rpx;height:500rpx;align-items: center;">
		                	<image style="width:300rpx;height:300rpx;" mode="aspectFill" src="../../static/mock/3.jpg"></image>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%;"><view style="font-size: 15px;color:#BBBBBB;">XXXXXXX数据集</view></view>
		                	<view style="height:15rpx;"></view>
		                	<view style="width:70%; display: flex;justify-content: space-around;">
		                		<button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;background-color: #F0AD4E;" @click="datasetDetail()">详情</button>
		                		<!-- <button type="primary" style="width:120rpx;height:60rpx;font-size:12px;left:0;" @click="store()">收藏</button> -->
		                		<uni-fav style="width:120rpx;height:60rpx;font-size:12px;left:0;"  bgColorChecked="#009900" @click="store()"/>
		                	</view>
		                </view>
		                <uni-pagination style="width:100%;" :total="3" pageSize="6"/>
		                <view style="height: 30rpx;"></view>
		            </view>
					
		    </view>
			<view style="height:100rpx;"></view>
	</view>
</template>

<script>
	export default {
		name:"dataCommunity",
		data() {
			return {
				searchValue:"数据集关键词",
				checked:false,
				images:["../../static/mock/1.jpg","../../static/mock/3.jpg","../../static/mock/4.jpg","../../static/mock/5.jpg"],
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
						content: '内容 C'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
						content: '内容 D'
					}
				],
				current:0,
				items:['数据集类型1', '数据集类型2', '数据集类型3'],
				currentindex:0,
				mode: 'default',
				dotsStyles: {
						backgroundColor: 'rgba(83, 200, 249,0.3)',
						border: '1px rgba(83, 200, 249,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
						selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
					},
				swiperDotIndex: 0,
			};
		},
		methods:{
			change(e) {
				this.currentindex = e.detail.current;
			},
			changeCurrent(e){
				//console.log(e);
				this.current = e.currentIndex;
			},
			datasetDetail(){
				uni.navigateTo({
					url:"../../pages/datasetDetail/datasetDetail",
				})
			},
			store(){
				if(this.checked==false){
					this.checked = true;
					
					uni.showToast({
						icon:"../../static/chenggong_1.png",
						title:"收藏成功!",
					})
				}
			}
			
		}
	}
</script>

<style>
	.content{
		width:100%;
		height:auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

</style>
