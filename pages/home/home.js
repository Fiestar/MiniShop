// pages/home/home.js
import request from "../../network/network.js"
import {
  getMultidata,
  getGoodsdata
} from "../../network/home.js"
const types=['pop','new','sell']

const BACKTOPDIS=1000;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banners:'',
    recommends:[
      {image:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569327413&di=d949e6e3215be217ea081f3fb98b3dba&imgtype=jpg&er=1&src=http%3A%2F%2Fimg7.qiyipic.com%2Fpassport%2F20171007%2F07%2F51%2Fpp_1268508289_150737670979279_130_130.jpg', title:'十分抢券'},
      { image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569327682&di=d28624fe3e98a2cb356f60bbcda2defe&imgtype=jpg&er=1&src=http%3A%2F%2Ftupian.qqw21.com%2Farticle%2FUploadPic%2F2016-4%2F20164182002450415.jpg', title:'好物特卖'},
        {
          image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569327413&di=d949e6e3215be217ea081f3fb98b3dba&imgtype=jpg&er=1&src=http%3A%2F%2Fimg7.qiyipic.com%2Fpassport%2F20171007%2F07%2F51%2Fpp_1268508289_150737670979279_130_130.jpg', title: '闪购福利'},
      { image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569327682&di=d28624fe3e98a2cb356f60bbcda2defe&imgtype=jpg&er=1&src=http%3A%2F%2Ftupian.qqw21.com%2Farticle%2FUploadPic%2F2016-4%2F20164182002450415.jpg', title:'初上秋装'}
    ],
    titles:['流行','精选','新款'],
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]}
    },
    currentType:'pop',
    showBacktop: false,
    isFiexd:false,
    tabScrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const banners=[
'https://img12.360buyimg.com/da/jfs/t1/64942/6/10328/80741/5d7e487bE321598a3/8f6f08ad6f659916.jpg',
'https://img11.360buyimg.com/da/jfs/t1/83953/12/10463/95928/5d7e480dE254e4091/03b53610071cbcce.jpg',
'https://img12.360buyimg.com/da/jfs/t1/69850/2/10309/68489/5d7e4779Ea0afd37c/939073545ae7c55b.jpg',
'https://img13.360buyimg.com/da/jfs/t1/40938/3/14667/84295/5d79afb6E01c341bb/2ee1208bc35b605d.jpg'
      ]
      //设置数据
      this.setData({
        banners: banners
      })

    //给流行精选设置假数据
    this._setGoodsdata('pop')
    this._setGoodsdata('new')
    this._setGoodsdata('sell')
  },

  //-------------网络请求-----------------------
  _getMultidata(){
    getMultidata().then(res=>{

    })
  },


  //流行精选商品
  _getGoodsdata(type){
    //1根据type 获取页码
    const page= this.data.goods[type].page+1;
    //2发送网络请求
    getGoodsdata(type,page).then(res =>{
      //2.1取出返回的数据
      const list=res.data.data.list;

      //2.2将数据设置到对应的type的list中
      const oldlist=this.data.goods[type].list;
      //...list 是将list的每个元素给添加到list中，可以用循环来操作
      // for(let item of list){
      //   oldlist.push(item);
      // }
      oldlist.push(...list);

      //2.3将数据设置到data的goods中
      //获取good中的list
      const typeKey = `goods.${type}.list`;
      //获取goods中的page
      const pageKey = `goods.${type}.page`;
      this.setData({
        [typeKey]:oldlist,
        [pageKey]:page
      })
    })
  },

  //提供假数据
  _setGoodsdata(type){
    const oldlist=this.data.goods[type].list;
    switch(type){
      case "pop":
        for (var i = 0; i < 30; i++) {
          const item = { title: '烟花烫2019秋季新款时尚淑女中式绣花立领衬衫', image: 'https://img13.360buyimg.com/n1/s350x449_jfs/t1/51877/11/5741/206670/5d36c899Ea1cab487/87559e3f76d477c3.jpg!cc_350x449.jpg', price: 80, cfav: 20 };
          oldlist.push(item);
          //设置数据
          const listKey = `goods.${type}.list`;
          this.setData({
            [listKey]: oldlist
          })
        }
      break;
      case "new":
        for (var i = 0; i < 30; i++) {
          const item = { title: ' 太平洋女性网服饰频道提供时装新品资讯,涵盖最新时装品牌,韩国时装新品', image: 'https://img13.360buyimg.com/n1/s350x449_jfs/t1/51877/11/5741/206670/5d36c899Ea1cab487/87559e3f76d477c3.jpg!cc_350x449.jpg', price: 80, cfav: 20 };
          oldlist.push(item);
          //设置数据
          const listKey = `goods.${type}.list`;
          this.setData({
            [listKey]: oldlist
          })
        }
        break;
      case "sell":
        for (var i = 0; i < 30; i++) {
          const item = { title: ' 名鞋库女士服装产品专卖,了解女士服装产品相关介绍、报价、图片、咨询、评价', image: 'https://img13.360buyimg.com/n1/s350x449_jfs/t1/51877/11/5741/206670/5d36c899Ea1cab487/87559e3f76d477c3.jpg!cc_350x449.jpg', price: 80, cfav: 20 };
          oldlist.push(item);
          //设置数据
          const listKey = `goods.${type}.list`;
          this.setData({
            [listKey]: oldlist
          })
        }
        break;

    }
    
  },

//-------------事件处理------------------------
  //tab事件处理
  tabclick(event){
    const index= event.detail.index;
    this.setData({
      currentType:types[index]
    })
  },

  //监听推荐的图片加载完成
  loadover(){
    //获取某个控件距离顶部的高度
    this.createSelectorQuery().select('#tab-control').boundingClientRect(rect =>{
      this.data.tabScrollTop=rect.top;
    }).exec();
  },

  //goods item点击页面跳转
  goodsItemClick(event){
    const index=event.detail.index;
    console.log(index);
    const title = this.data.goods[this.data.currentType].list[index].title
    //跳转页面
    wx.navigateTo({
      url: '/pages/detail/detail?title=' +title,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //上拉加载更多
    // this._getGoodsdata(this.data.currentType);
  },

  onPageScroll: function(options){
    const scrollTop = options.scrollTop;
    //回到顶部
    const flag=scrollTop >=BACKTOPDIS
    //官方提示，不建议在onPageScroll 频繁的调用this.setData方法
    //因为会不断的刷新界面
    if(flag!=this.data.showBacktop){
      this.setData({
        showBacktop:flag
      })
    }
 
    //tabcontrol停留效果
    const flag2=scrollTop>=this.data.tabScrollTop;
    if(flag2!=this.data.isFiexd){
      this.setData({
        isFiexd:flag2
      })
    }

    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '购物街商城',
    }
  }
})