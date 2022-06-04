<template>
  <div>
    <h1>本の一覧</h1>
    <ul>
      <li @click="showBookDetail(book.id)" v-for="book in books" :key="book.id">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'BookList',
  data(){
    return{
      bookIndex: 0,
      books:[
        {id:0, title:'タイトル1', content:'本の内容1'},
        {id:1, title:'タイトル2', content:'本の内容2'},
        {id:2, title:'タイトル3', content:'本の内容3'}
      ]
    }
  },
  methods:{
    showBookDetail(id){
      this.bookIndex = id
      // console.log(this.bookIndex)
      this.$router.push({
        // 名前付きルート（パラメータを渡す時はpathでなくnameで設定する仕様？
        name:'Book', // router/index.jsのl30周辺
        params:{
          id: this.books[this.bookIndex].id,
          title: this.books[this.bookIndex].title,
          content: this.books[this.bookIndex].content,
        }
      })
    }
  }
}
</script>

<style>

</style>