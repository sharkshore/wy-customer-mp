// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories:[]//商品分类
  
  },

  //加载所有商品类目
  getCategories() {
    //调用接口获取所有商品类目
    let api_categories = [
      {
        name: '服饰',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/fushi.png'
      },
      {
        name: '家具',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/jiaju.png'
      },
      {
        name: '家装',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/jiazhuang.png'
      },
      {
        name: '美妆',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/meizhuang.png'
      },
      {
        name: '男装',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/nanzhuang.png'
      },
      {
        name: '内衣',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/neiyi.png'
      },
      {
        name: '食品',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/shipin.png'
      },
      {
        name: '数码',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/shuma.png'
      },
      {
        name: '书籍',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/shuma.png'
      },

    ];

    api_categories = [
      {
        name: '项链',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/Chanel_Necklace_512px_509005_easyicon.net.png'
      },
      {
        name: '香水',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/Chanel_No5_Perfume_512px_509006_easyicon.net.png'
      },
      {
        name: '护肤露',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/Gucci_Eau_Perfume_512px_508993_easyicon.net.png'
      },
      {
        name: '睫毛膏',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/Lipstick_128px_546759_easyicon.net.png'
      },
      {
        name: '胭脂',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/make_up_128px_543688_easyicon.net.png'
      },
      {
        name: '口红',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/pink_Lipstick_150px_511414_easyicon.net.png'
      },
      {
        name: '零食',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/pink_Perfume_150px_511420_easyicon.net.png'
      },
      {
        name: '卸妆液',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/pink_Perfume_150px_511442_easyicon.net.png'
      },
      {
        name: '面具',
        imageUrl: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/icon/categories/secretmask_secret_mask_128px_522289_easyicon.net.png'
      },

    ];

    let tailCategory = {
      name: '全部',
      imageUrl: '../../asserts/quanbu.png'
    };

    return [...api_categories, tailCategory]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let categories = this.getCategories();

    this.setData({
      categories,
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