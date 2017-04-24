; {
  // 所有类型
  var allTypes = [{
    name: '娱乐',
    id: 'fun'
  }, {
    name: '游戏',
    id: 'game'
  }, {
    name: '汽车',
    id: 'car'
  }]
  Mock.mock(new RegExp('/allTypes'), options => {
    return allTypes
  })

  // 按类型分类的所有文章
  var allArticles = [{
    id: 1,
    title: '3岁无脸孩子的cosplay 吓坏昆凌孟非 卸妆后全场尖叫',
    time: '10分钟前',
    author: '头条娱乐',
    type: 'fun'// 娱乐
  }, {
    id: 2,
    title: '赵四刘小光睡粉让女孩刷礼物，2万不还直接拉黑！',
    time: '32分钟前',
    author: '星探光光',
    type: 'fun' // 娱乐
  },
  {
    id: 3,
    title: '3岁无脸孩子的cosplay 吓坏昆凌孟非 卸妆后全场尖叫',
    time: '1小时前',
    author: '头条娱乐',
    type: 'fun' // 娱乐
  },
  {
    id: 4,
    title: '猫娘游戏《NEKO-NIN exHeart》上架Steam 爱猫人士的新选择',
    time: '10分钟前',
    author: ' 游民星空 ⋅',
    type: 'game'// 游戏
  },
  {
    id: 5,
    title: ' 央视直播失误集锦第三季！“一本正经地胡言乱语”是种怎样的体验',
    time: '1小时前',
    author: 'xxx',
    type: 'game'// 游戏
  },
  {
    id: 6,
    title: ' A1、A2、A3、B1、B2驾驶证“降级”新规定(2017)',
    time: '10分钟前',
    author: '女司机谈车',
    type: 'car'// 汽车
  }]
  Mock.mock(new RegExp('/type'), options => {
    var typeId = /^\/type\/(.*)/.exec(options.url)[1]
    // debugger
    return allArticles.filter(article => {
      return typeId === article.type
    })
  })
}
