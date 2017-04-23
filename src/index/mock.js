; {
  // 按类型分类的所有文章
  var allArticles = {
    'fun': [{ // 娱乐
      id: 1,
      title: '3岁无脸孩子的cosplay 吓坏昆凌孟非 卸妆后全场尖叫',
      time: '10分钟前',
      author: 'xxx'
    }],
    'game': [],
    'other': [],
  }
  Mock.mock(new RegExp('/type'), options => {
    var typeId = /^\/type\/(.*)/.exec(options.url)[1]
    return allArticles[typeId] || []
  })
}
