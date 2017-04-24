; {
  var app = new Vue({
    el: '#app',
    data: {
      types: [],
      currType: '',
      articles: [], // 文章
    },
    mounted() {
      var vm = this
      this.fetchTypes().then(()=> {
        if(vm.types.length > 0) {
          vm.currType = vm.types[0].id
          // 获取某类型下的所有文章
          this.fetchArticles(vm.currType)
        }
      })
    },
    methods: {
      fetchArticles(typeId) {
        this.currType = typeId
        return axios.get(`/type/${typeId}`).then(response => {
          this.articles = response.data
        })
      },
      fetchTypes() {
        return axios.get(`/allTypes`).then(response => {
          this.types = response.data
        })
      },
      viewArticle(article) {
        alert(`查看name为${article.title},id为${article.id}的文章`)
      }
    }
  })
}
