<template>
	<view class="form">
		<view class="header" style="height:100rpx;width:100%;">
				<view class="box-bg">
					<uni-nav-bar color="#ffffff" :fixed="true" background-color="#007AFF" left-icon="left" leftText="返回" rightText="" title="申请服务" />
				</view>
		</view>
		<view class="title">
			<!-- <image style="width:200rpx;height:200rpx;" src="../../static/dtrash.png" mode="aspectFit"></image> -->
			<view style="font-size: 23px;">申请服务</view>
			<view style="width:80%;font-size: 14px;color:#A5A5A5;text-align: center;">
				提交申请后，2个工作日内邮件答复审批结果，咨询邮箱XXXXXX@baidu.com。
			</view>
			<view style="display: flex;width:100%;justify-content: space-around;align-items: center;flex-direction: column;">
				<view style="font-size: 18px;">需求信息</view>
				<view style="height:20rpx;"></view>
				<view style="font-size: 14px;color:#A5A5A5;width:80%;text-align: center;">便于我们更好的了解您的需求，为您提供更精准的服务。</view>
			</view>
		</view>
		<view style="height:30rpx;"></view>
		<uni-section title="表单校验" type="line" style="width:85%;">
					<view class="example">
						<!-- 基础表单校验 -->
						<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
							<uni-section title="需求类型" type="line" style="width:85%;">
								<uni-forms-item label="需求类型" required>
									<uni-data-checkbox v-model="valiFormData.type" multiple :localdata="types" />
								</uni-forms-item>
							</uni-section>
							<uni-section title="数据量" type="line" style="width:85%;">
								<uni-forms-item label="数据量" required name="datanum">
									<uni-easyinput v-model="valiFormData.dataname" placeholder="请输入数据量" />
								</uni-forms-item>
							</uni-section>
							<uni-section title="需求时限" type="line" style="width:85%;">
								<uni-forms-item label="开始时间">
									<uni-datetime-picker type="datetime" return-type="timestamp" v-model="valiFormData.datetimestart"/>
								</uni-forms-item>
								<uni-forms-item label="结束时间">
									<uni-datetime-picker type="datetime" return-type="timestamp" v-model="valiFormData.datetimeend"/>
								</uni-forms-item>
							</uni-section>
							<uni-section title="需求描述" type="line" style="width:85%;">
								<uni-forms-item label="需求描述" name="description">
									<uni-easyinput type="textarea" v-model="valiFormData.description" placeholder="请输入需求描述" />
								</uni-forms-item>
							</uni-section>
						</uni-forms>
						<button type="primary" @click="submit('valiForm')" style="font-size: 18px;">提交任务</button>
					</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				types:[{
					text: '数据采集',
					value: 0
				},{
					text: '数据标注',
					value: 1
				},{
					text: '标注平台',
					value: 2
				},{
					text: '识别模型',
					value: 3
				}],
				// 校验表单数据
				valiFormData: {
					name: '',
					age: '',
					introduction: '',
					datetimestart:new Date(),
					datetimeend:new Date(),
					type:[],
					dataname:0,
					description:"",
				},
				// 校验规则
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}, {
							format: 'number',
							errorMessage: '年龄只能输入数字'
						}]
					}
				},
				
			}
		},
		methods: {
			submit(ref) {
							this.$refs[ref].validate().then(res => {
								console.log('success', res);
								uni.showToast({
									icon:"../../static/chenggong_1.png",
									title: "提交成功",
									duration:600,
								})
							}).catch(err => {
								console.log('err', err);
								
							})
						},
			
		}
	}
</script>

<style>
	.form{
		width:100%;
		height:auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* background-color: #EDE1D9; */
	}
	.title{
		width: 100%;
		height:450rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	}

</style>
