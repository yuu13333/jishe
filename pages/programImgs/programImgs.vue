<template>
	<view class="content">
	<responseInfo :cards="cards"></responseInfo>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cards:[],
			}
		},
		onLoad() {
			
		},
		onShow() {
		//做请求	
		this.requestCards()
		},
		methods: {
			async requestCards(){
				try{
					const r = await this.request({
						url: 'http://8.130.100.210:80/collection',
						method:"GET",
						data: {
							collection_id:this.$store.state.currentProject,
							image_code:1,
						},
					})
					console.log(r);
					// console.log(r.slice(1,100));
					if(r.code===200){
						console.log(r);
					}
					else{
						uni.showToast({
							title:"请求资源失败!",
							image:"../../static/jinggao.png",
						})
					}
					
				}catch(e){
					console.log(e);
				}
			}
			
		}
	}
</script>

<style>

</style>
