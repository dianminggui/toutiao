##  [IMWeb训练营作业] Vue.js 仿今日头条
我们小组仿了今日头条的几个页面，因为时间比较紧，优先实现功能，UI比较搓，大家见谅。

在线预览地址，点[这里](http://iamjoel.github.io/toutiao/src/),所有源码,见[这里](https://github.com/iamjoel/toutiao)。

本次作业由 小胡（组长），紫阳，酱，九彩拼盘共同完成，我们每人做了一个页面。

我们用了以下几个框架：

* [Vue.js](http://cn.vuejs.org/v2/api/)
* [axios](https://github.com/mzabriskie/axios) 与服务器端交互的工具库。
* [Mock.js](https://github.com/nuysoft/Mock) 用来模拟服务器端返回的数据和造随机数据。



下面来一一介绍我们实现的页面。

## 首页
实现了获取分类，以及分类下文章类别的功能。
![\](https://github.com/nuysoft/Mock)](http://img.blog.csdn.net/20170424230905829?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZ2l0aHViXzM4MjIwODE3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

核心代码如下
```
// 获取分类下的所有文章
fetchArticles(typeId) {
  this.currType = typeId
  return axios.get(`/type/${typeId}`).then(response => {
    this.articles = response.data
  })
},
// 获取所有分类
fetchTypes() {
  return axios.get(`/allTypes`).then(response => {
    this.types = response.data
  })
},   
```

造模拟数据如下
```
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
```

## 列表页
![这里写图片描述](http://img.blog.csdn.net/20170424231653404?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZ2l0aHViXzM4MjIwODE3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

核心代码
```
axios.get(BASE_URL + '/topics',{
  params:{
    page:1,
    tab:'all',
    limit:10
  }
}).then(function(res){
  console.log(res.data.data);
  _this.dataList = res.data.data;
}).then(function(err){
  console.log(err)
})
```

## 评论部分
![这里写图片描述](http://img.blog.csdn.net/20170424232148379?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZ2l0aHViXzM4MjIwODE3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

支持输入用户名，内容来发表评论。

核心代码
```
publicDiscuss(){
  var obj = {
    userinfo:this.userinfo,
    content:this.content
  }
  this.discuss.unshift(obj)
  this.modalFalg = false
},
// 显示评论框
openModal(){
  this.modalFalg = true
},
// 隐藏评论框
closeModal(){

  this.modalFalg = false
  console.log(this.modalFalg);
}
```


## 详情页
![这里写图片描述](http://img.blog.csdn.net/20170424231322159?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZ2l0aHViXzM4MjIwODE3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

支持点赞，取消点赞，获取更多内容等功能。

核心代码如下
```
addAgree(item){
  item.agree++;

},
backAgree(item){
  item.agree--;
},
getmore(){
  this.moreContent = true;
}
```




