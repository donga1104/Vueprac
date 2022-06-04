<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="checkRouteInfo">ルート情報</button>
    <br>
    <button @click="goToHome">ホームへ戻る</button>
  </div>
</template>

<script>
export default {
  name:'AboutView',
  methods:{
    checkRouteInfo(){
      console.log(this.$route.path) // コンポーネントの中であれば、thisが必要となる
      console.log(this.$router)
    },
    goToHome(){
      this.$router.push('/')  // homeに戻る
    }
  }
}
</script>
