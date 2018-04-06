//index.js
//获取应用实例
const app = getApp()

Page({
  data: {


    swipers: [],//商家轮播图
    categories: [],//商品分类
    booths: [],//商品展位图
    products: [],//商品图片

  },

  //加载商品展位
  getBooths() {
    let api_booths = [
      {
        id: 1,
        name: '热销商品'
      },
      {
        id: 2,
        name: '店家推荐'
      },
      {
        id: 3,
        name: '新品上架'
      },
    ];
    return api_booths;

  },

  //加载轮播图
  getSwipers() {
    //调用接口获取所有商家轮播图
    let api_swipers = [
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E8%BD%AE%E6%92%AD%E5%B9%BF%E5%91%8A1.jpg',
      },
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E8%BD%AE%E6%92%AD%E5%B9%BF%E5%91%8A2.jpg',
      },
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E8%BD%AE%E6%92%AD%E5%B9%BF%E5%91%8A3.jpg',
      },
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E8%BD%AE%E6%92%AD%E5%B9%BF%E5%91%8A4.jpg',
      },
      {
        url: 'https://qiongxun-weiying.oss-cn-shanghai.aliyuncs.com/product/%E8%BD%AE%E6%92%AD10.jpg',
      },
    ];

    return api_swipers;

  },
  //加载所有商品类目
  getCategories() {
    //调用接口获取所有商品类目
    let api_categories = [
      {
        id:1,
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

    let tailCategory = {
      name: '全部',
      imageUrl: '../../asserts/quanbu.png'
    };

    return [...api_categories, tailCategory]
  },

  //获取商品图片
  getProducts() {
    //调用API获取商品图片
    let products = [
      {
        boothId: 1,
        productList: [
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
      },
      {
        boothId: 2,
        productList: [
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
      },
      {
        boothId: 3,
        productList: [
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
      },
    ]
    return products;

  },

  findProductByBooth(boothId){
    return this.products.filter(
      i => i.boothId == boothId
    )
  },

  //加载页面,只运行一次
  onLoad: function () {
    let categories = this.getCategories();
    let swipers = this.getSwipers();
    let booths = this.getBooths();
    let products = this.getProducts();

    this.setData({
      categories,
      swipers,
      booths,
      products
    })

  },

})
