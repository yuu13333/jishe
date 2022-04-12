<template>
	<view style="width:100%;">
		<scroll-view style="width:100%;display: flex;flex-direction: column;align-items: center;justify-content: center;" scroll-y="true">
		<view style="height: 40rpx;"></view>
		<view style="width:100%;display: flex;flex-direction: column;align-items: center;justify-content: center;">
		<view class="imageNum">
			<view style="color: #000000;font-size: 70rpx;font-weight: 500;">
				{{photoNumber}}
			</view>
			<view style="height:5rpx;"></view>
			<view style="color:#000000;font-size: 30rpx;font-weight: 500;">
				IMAGES
			</view>
			<view style="height: 30rpx;"></view>
			<view style="color:#007AFF;font-size: 25rpx;">
				click here to check more.
			</view>
		</view>
		</view>
		<view style="height: 40rpx;"></view>
		<view style="width:100%;display: flex;flex-direction: column;align-items: center;justify-content: center;">
		<view class="categories">
			<view style="color: #000000;font-size: 70rpx;font-weight: 500;">
				{{classNumber}}
			</view>
			<view style="height:5rpx;"></view>
			<view style="color:#000000;font-size: 30rpx;font-weight: 500;">
				CATEGORIES
			</view>
			<view style="height:30rpx;"></view>
			<view style="color:#007AFF;font-size: 25rpx;">
				click here to check more.
			</view>
		</view>
		</view>
		<view style="height: 40rpx;"></view>
		<view class="ucharts">
			<view class="charts-box">
			  <qiun-data-charts type="column" :chartData="classDetails" />
			</view>
			<view style="height:30rpx;"></view>
			<view class="charts-box">
			  <qiun-data-charts type="pie" :chartData="classDetailsadd" />
			</view>
<!-- 			<view id="echarts" :prop="option" :change:prop="echarts.updateEcharts" style="width:100%;height:300rpx">
				
			</view> -->
			
			<!-- <view class="con">
				<view @click="echarts.onClick" :prop="option" :change:prop="echarts.updateEcharts" id="echarts" class="echarts"></view>
				<button @click="changeOption">更新数据</button>
			</view>
			<view class="con">
				<view @click1="echarts.onClick" :prop="option1" :change:prop="echarts.updateEcharts1" id="echarts1" class="echarts"></view>
				<button @click="changeOption1">更新数据</button>
			</view> -->
		</view>
		<view style="height: 50rpx;"></view>
		<view style="width:100%;"><button @click="test()" type="default" style="width:80%;height:100rpx;background-color: #007AFF;color:#FFFFFF">Start Labeling
		</button></view>
		<view style="height: 60rpx;"></view>
		<view class="lastTime" style="color:#A5A5A5;width:100%;display: flex;align-items: center;justify-content: center;font-size: 25rpx;">
			数据集创建于：{{createTime}}
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"echarts",
		props:{
			photoNumber:{
				type: Number,
				default:0,
			},
			classNumber:{
				type: Number,
				default:0,
			},
			createTime:{
				type:String,
				default:''
			},
			classDetails:{
				type:Object,
				default:()=>{null},
			},
			classDetailsadd:{
				type:Object,
				default:()=>{null},
			}
		},
		onLoad() {
		},
		mounted() {
			console.log(this.classDetails);
			console.log(this.classDetailsadd);
		},
		// beforeUpdate(){
		// 	console.log(this.classDetails)
		// },
		// updated(){
		// 	console.log(this.classDetails)
		// },
		data() {
			return {
				imgNum:100,
				typeNum:26,
				option:{
				            title: {
				                text: ' 类型统计'
				            },
				            tooltip: {},
				            legend: {
				                data:['图片数量']
				            },
				            xAxis: {
				                data: ["其他垃圾","有害垃圾","厨余垃圾","可回收垃圾"]
				            },
				            yAxis: {},
				            series: [{
				                name: '图片数量',
				                type: 'bar',
				                data: [5, 20, 36, 10]
				            }]
				        },
				option1:{
				  series: [
				    {
				      type: 'pie',
					  stillShowZeroSum: false,
				      data: [
				        {
				          value: 5,
				          name: '其他垃圾'
				        },
				        {
				          value: 20,
				          name: '有害垃圾'
				        },
				        {
				          value: 36,
				          name: '厨余垃圾'
				        },
						{
						  value:10,
						  name:'可回收垃圾',
						}
				      ],
				      radius: '50%'
				    }
				  ]
				}
			};
		},
		methods:{
			// changeOption() {
			// 	const data = this.option.series[0].data
			// 	// 随机更新示例数据
			// 	data.forEach((item, index) => {
			// 		data.splice(index, 1, Math.random() * 40)
			// 	})
			// },
			// changeOption1() {
			// 	const data = this.option1.series[0].data
			// 	// 随机更新示例数据
			// 	data.forEach((item, index) => {
			// 		data.splice(index, 1, {value:Math.random() * 40,name:item.name})
			// 	})
			// },
			// onViewClick(options) {
			// 	console.log(options)
			// }
		}
	}
</script>

// <script module="echarts" lang="renderjs">
// 	let myChart
// 	let myChart1
// 	export default {
// 		mounted() {
// 			if (typeof window.echarts === 'function') {
// 				this.initEcharts()
// 			} else {
// 				// 动态引入较大类库避免影响页面展示
// 				const script = document.createElement('script')
// 				// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
// 				script.src = 'static/echarts.js'
// 				script.onload = this.initEcharts.bind(this)
// 				document.head.appendChild(script)
// 			}
// 		},
// 		methods: {
// 			initEcharts() {
// 				myChart = echarts.init(document.getElementById('echarts'))
// 				myChart1 = echarts.init(document.getElementById('echarts1'))
// 				// 观测更新的数据在 view 层可以直接访问到
// 				myChart.setOption(this.option)
// 				myChart1.setOption(this.option1)
// 			},
// 			updateEcharts(newValue, oldValue, ownerInstance, instance) {
// 				// 监听 service 层数据变更
// 				myChart.setOption(newValue)
// 			},
// 			onClick(event, ownerInstance) {
// 				// 调用 service 层的方法
// 				ownerInstance.callMethod('onViewClick', {
// 					test: 'test'
// 				})
// 			},
// 			updateEcharts1(newValue, oldValue, ownerInstance, instance) {
// 				// 监听 service 层数据变更
// 				myChart1.setOption(newValue)
// 			},
// 			onClick1(event, ownerInstance) {
// 				// 调用 service 层的方法
// 				ownerInstance.callMethod('onViewClick', {
// 					test: 'test'
// 				})
// 			}
// 		}
// 	}
// </script>


<style>
	.imageNum{
		height:280rpx;
		width:80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #F5F5F5;
		border-radius: 20rpx;
	}
	.categories{
		height:280rpx;
		width:80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #F5F5F5;
		border-radius: 20rpx;
	}
	.lastTime{
		height:110rpx;
		width:100%;
	}
	.ucharts{
		width:100%;
		height:auto;
		display: flex;
		flex-direction: column;
	
	}
	.con {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.echarts {
		margin-top: 100px;
		width: 720rpx;
		height: 300px;
	}

</style>
