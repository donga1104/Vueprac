<template>
  <div>Item
    <router-link to="1">Item1</router-link>
    <router-link to="2">Item2</router-link>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  created() {   // 同じコンポーネントで表示している場合には再読み込みがされていない（ライフサイクルが行われていない）
    console.log('created')
  },
  watch: {  // 同じコンポーネント内で表示切り替えのときの実行にwatchが使える
    $route(to, from) {
      console.log(to)
      console.log(from)
    }
  }
}
</script>

<style>

</style>