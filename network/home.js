//home页的网络请求都放在这里
import request from "./network.js"

export function getMultidata(){
  return request({
    url:"/home/multidata",
  })
}

//请求流行精选新款商品
export function getGoodsdata(type,page){
  return request({
    url:"/home/data",
    data:{
      type,
      page
    }
  })
}