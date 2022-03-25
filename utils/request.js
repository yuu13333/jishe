// request.js
export default (params) => {

  // 加载中效果设置
  uni.showLoading({
    title: "加载中..."
  })
  return new Promise((resolve, reject) => {
    uni.request({
      ...params,
      success (res) {
        resolve(res.data);
      },
      fail (err) {
        reject(err);
      },
      complete () {
        uni.hideLoading();
      }
    })

  })
}
