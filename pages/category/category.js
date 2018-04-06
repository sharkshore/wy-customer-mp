// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    navLeftItems: [],//左侧商品分类
    navRightItems: [],
    curNav: 3,
    curIndex: 0
  },


  //获取左侧所有商品类目
  getLeftItems() {
    //调用接口获取所有商品类目
    let api_categories = [
      {
        id: 1,
        name: '项链',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/Chanel_Necklace_512px_509005_easyicon.net.png'
      },
      {
        id: 2,
        name: '香水',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/Chanel_No5_Perfume_512px_509006_easyicon.net.png'
      },
      {
        id: 3,
        name: '护肤露',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/Gucci_Eau_Perfume_512px_508993_easyicon.net.png'
      },
      {
        id: 4,
        name: '睫毛膏',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/Lipstick_128px_546759_easyicon.net.png'
      },
      {
        id: 5,
        name: '胭脂',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/make_up_128px_543688_easyicon.net.png'
      },
      {
        id: 6,
        name: '口红',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/pink_Lipstick_150px_511414_easyicon.net.png'
      },
      {
        id: 7,
        name: '零食',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/pink_Perfume_150px_511420_easyicon.net.png'
      },
      {
        id: 8,
        name: '卸妆液',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/pink_Perfume_150px_511442_easyicon.net.png'
      },
      {
        id: 9,
        name: '面具',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/secretmask_secret_mask_128px_522289_easyicon.net.png'
      },

    ];

    return api_categories;
  },


  getRightItems(){
    let products=[
      {
        productName: '迷迭香莹白亮彩眼霜',
        price: '1635.00',
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE1.jpg'
      },
      {
        productName: '护肤开元之作珍珠莹润',
        price: '48.50',
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE10.jpg'
      },
      {
        productName: '春季唤醒面霜',
        price: '89.00',
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE2.jpg'
      },
      {
        productName: '相宜本草修复露',
        price: '159.00',
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE3.jpg'
      },
      {
        productName: '真尔美面霜',
        price: '588.00',
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE4.jpg'
      },
      {
        productName: '相宜本草精华液',
        price: '58.00',
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE5.jpg'
      },
      {
        productName: '膜法世家精制面膜',
        price: '68.50',
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE6.jpg'
      },
      {
        productName: '魔术妹橄榄净透卸妆液',
        price: '128.00',
        productImageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E4%B8%BB%E5%9B%BE7.jpg'
      },
    ]

    return products;
  },


  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
      let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let navLeftItems = this.getLeftItems();
    let navRightItems=this.getRightItems();

    this.setData({
      navLeftItems,
      navRightItems,
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