<template>
  <div>
    <p>本の詳細</p>
    <p>タイトル：{{ title }}</p>
    <p>本の内容：{{ content }}</p>
    {{ books[bookIndex].title }}
  </div>
</template>

<script>
export default {
  props:{
    id: Number,
    title: String,
    content: String
  },
  data(){
    return{
      bookIndex: this.$route.params.id,
      books:[
        {id:0, title:'タイトル1', content:'本の内容1'},
        {id:1, title:'タイトル2', content:'本の内容2'},
        {id:2, title:'タイトル3', content:'本の内容3'}
      ]
    }
  },
  created(){
    // 用意されているid範囲が超えている場合、一覧画面へ遷移
    if(this.$route.params.id > this.books.length){
      this.$router.push('/book')
    }
  }
}
</script>

<style>

</style>