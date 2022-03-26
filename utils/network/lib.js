// 网络监听

const NetWork = {

// 网络状态
	isConnect:false,

// 监听网络状态
	On(){
	// 获取当前网络状态
	uni.getNetworkType({
		success: (res) => {
			if(res.networkType!=='none'){ 
				this.isConnect=true; 
				uni.showToast({
					icon:"none",
					title: '已连接网络',
				});
				return;}
			uni.showToast({
				icon:"none",
				title: '当前未连接网络',
			});
		}
	})

	// 监听网络状态变化
	uni.onNetworkStatusChange((res)=>{
		this.isConnect = res.isConnected;
		if(!res.isConnected){
			uni.showToast({
				icon:"none",
				title: '断开网络',
				duration:2000
			});
			console.log("disconnect");
			//跳转到网络连接提示页面
			// uni.redirectTo({
			// 	url:"../../pages/disconnect/disconnect.vue"
			// })
		}
		else
		uni.showToast({
			icon:"none",
			title: '成功连接网络',
			duration:2000
		});
		//重连接(本机上的图片和标签还在，项目id还在，不知道token失效了没有??)
	})
	
	}
}

export default {
	NetWork,
}
