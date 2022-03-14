<template>
	<view>
		<uni-popup ref="ImagePop" type="dialog">
			<uni-popup-dialog  title="提示" content="是否立即前往标签页面?" @confirm="imgDialogConfirm" @close="imgDialogClose" />
		</uni-popup>
	</view>
</template>

<script>
	export default {
		onLoad(base64){
			this.base64 = base64.base64;
		},
		data() {
			return {
				base64:[],
				
			}
		},
		methods: {
			imgDialogConfirm(){
				this.$refs.ImagePop.close();
				uni.navigateTo({
					url:"../../pages/addLabel/addLabel"+"?base64="+this.base64
				})
			},
			imgDialogClose(){
				uni.navigateBack({
					delta: 1
				});
				
			}
			
		},
		mounted() {
			this.$refs['ImagePop'].open();
		}
	}
</script>

<style>

</style>
