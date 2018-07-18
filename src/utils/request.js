// 使用微信request
const uri = 'http://test.m.zdongpin.com/';
const request = ({url,method,data}) =>{
  return new Promise((resolve,reject)=>{
    wx.showLoading();
    wx.request({
      url:uri+url,
      data,
      method,
      header: {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'},
      success: function(response) {
        wx.hideLoading();
        const res = response.data;
        if(response.statusCode !== 200) { // 请求失败
          console.log('请求失败');
          return Promise.reject('error')
        }else{
          resolve(res);
        }
      },
      fail:function (error) {
        return Promise.reject(error)
      }
    })
  })
}

export default request