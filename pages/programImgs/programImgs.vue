<template>
	<responseInfo></responseInfo>
</template>

<script>
	export default {
		data() {
			return {
				cards:[
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
						createTime:new Date(),
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
						createTime:new Date(),
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
						createTime:new Date(),
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
						createTime:new Date(),
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
						createTime:new Date(),
					},
					{
						title:"有害垃圾",
						description:"酒精",
						url:"../../static/logo.png",
						createTime:new Date(),
					},
				]
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.cardview{
		width:100%;
		height: 300rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	text{
		display: flex;
		width:400rpx;
		justify-content: center;
		align-items: ;
	}
	image{
		mode: 'aspectFill';    
	}

</style>
