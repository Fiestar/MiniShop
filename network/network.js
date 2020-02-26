const baseUrl = "http://123.207.32.32:8000"
export default function request(options){
  return new Promise((resove,reject) =>{
    wx.request({
      url: baseUrl + options.url,
      method:options.method ||'get',
      data:options.data ||{},
      success: (res)=>{
        resove(res)
      },
      fail: (err)=>{
        reject(err)
      }
    })
  })
}
