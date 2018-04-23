// pages/productDetail/productDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productSwipers: [],//商家轮播图
    productImages:[],//商品详细图片
    productDesc:"",//商品文字描述
    modalVisible:false,
    modalButtonText:'立即购买'

  
  },

  //打开对话框
  displayModal(e){
    this.setData({
      modalVisible:true,
      modalButtonText:e.currentTarget.dataset.text
    })

  },

  hideModal(e){
    this.setData({
      modalVisible: false,
    })
  },

  //立即购买按钮
  immediateBuy(){

  },

  //添加到购物车
  AddToShopCar(){

  },
  


  //加载轮播图
  getSwipers() {
    //调用接口获取所有商家轮播图
    let api_swipers = [
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20180325172428.jpg'
      },
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20180325192749.jpg'
      },
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20180325192759.jpg'
      }
     
    ];

    return api_swipers;

  },

  //获取产品图片
  getProductImages(){
    let productImages=[
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/640_01.jpg'
      },
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/640_02.jpg'
      },
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/640_03.jpg'
      },
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/640_04.jpg'
      },
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/640_05.jpg'
      },
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/640_06.jpg'
      },
    ]

    return productImages;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let productSwipers = this.getSwipers();
    let productImages=this.getProductImages();
    this.setData({
      productSwipers,
      productImages
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