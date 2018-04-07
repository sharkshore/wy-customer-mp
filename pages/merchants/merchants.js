// pages/merchants/merchants.js
Page({

  data:{
    products:[],//产品
  },

  

  getProducts(){
    let products = [
      {
        productName: '迷迭香莹白亮彩眼霜',
        price: '1635.00',
        specification:'规格:白',
        count:1,
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE1.jpg'
      },
      {
        productName: '护肤开元之作珍珠莹润',
        price: '48.50',
        specification: '规格:白',
        count: 1,
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE10.jpg'
      },
      {
        productName: '春季唤醒面霜',
        price: '89.00',
        specification: '规格:白',
        count: 1,
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE2.jpg'
      },
      {
        productName: '相宜本草修复露',
        price: '159.00',
        specification: '规格:白',
        count: 2,
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE3.jpg'
      },
      {
        productName: '真尔美面霜',
        price: '588.00',
        specification: '规格:白',
        count: 1,
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE4.jpg'
      },
      {
        productName: '相宜本草精华液',
        price: '58.00',
        specification: '规格:白',
        count: 2,
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE5.jpg'
      },
      {
        productName: '膜法世家精制面膜',
        price: '68.50',
        specification: '规格:白',
        count: 1,
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE6.jpg'
      },
      {
        productName: '魔术妹橄榄净透卸妆液',
        price: '128.00',
        specification: '规格:黑',
        count: 2,
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE7.jpg'
      },
    ]
    return products;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let products=this.getProducts()
      this.setData({
        products
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})