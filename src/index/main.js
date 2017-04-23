; {
  var app = new Vue({
    el: '#app',
    data: {
      articles: [] // 文章 
    },
    mounted() {
      // 获取某类型下的所有文章
      this.fetchArticles('fun')
    },
    methods: {
      fetchArticles(typeId) {
        axios.get(`/type/${typeId}`).then(response => {
          console.log(response.data)
        }) 
      }
    }
  })
}
