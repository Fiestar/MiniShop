// pages/cart/cart.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for(var i=10;i<13;i++){
      this.testaddTocart(i)
    }
    //1.第一次加载数据
    this.setData({
      cartList: app.globalData.cartList
    })


    //3.设置修改某个商品的回调
    app.changeGoodsState= (index,goods) =>{
      this.setData({
        [`cartList[${index}]`]: goods
      })
    }
  },

  testaddTocart(index){
    const obj = {}
    obj.iid = index;
    obj.imageUrl = 'https://img13.360buyimg.com/n1/s350x449_jfs/t1/51877/11/5741/206670/5d36c899Ea1cab487/87559e3f76d477c3.jpg!cc_350x449.jpg';
    obj.title = "好看的连衣裙新款上市价格便宜";
    obj.desc = "价格便宜，穿出好身材，适合送女朋友和媳妇";
    obj.price = 289;
    app.addToCart(obj)
  },

})