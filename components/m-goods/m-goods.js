// components/m-goods/m-goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event){
      // console.log(event)
      const index =event.currentTarget.dataset.index;
      this.triggerEvent('itemClick',{index:index},{})
    }
  }
})
