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
				imgs:[],
				list:[],
			}
		},
		onLoad(val) {
			if(val.type=="all"){
				//查看所有的图片
				this.requestCards();
			}
			else{
				const item = JSON.parse(decodeURIComponent(val.info));
				this.cards = item;
			}
		},
		onShow() {
		//做请求	
		// this.requestCards()
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
					// console.log(r);
					// console.log(r.slice(1,100));
					if(r.code===200){
						console.log(r.image.length);
						this.imgs = r.photo_id_list;
						let arr = [];
						for(let i=0;i<this.imgs.length;i++){
							console.log(this.imgs[i]);
							try{
								const r = await this.request({
									url: 'http://8.130.100.210:80/photo',
									method:"GET",
									data: {
										photo_id:this.imgs[i]
									},
								})
								// console.log(r.slice(1,10));
								if(r.code===200){
									// console.log(r);
									let obj={
										id:this.ids[i],
										photo:r.photo,
										label:r.label,
										sub_label:r.sub_label,
										created_time:r.created_time
									}
									arr.push(obj);
									console.log(arr);
									if(i===this.ids.length-1){
										this.cards=arr;
									}
								}
							}catch(e){
								console.log("error");
							}
						}
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
