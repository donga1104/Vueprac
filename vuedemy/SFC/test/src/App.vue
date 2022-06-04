<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <testComponent /> <!-- 省略記法（slotなど何もない場合に使用可能） -->
    <HelloWorld msg="Welcome to Your Vue.js App"/> <!-- HelloWorldコンポーネントを使用 -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'  // HelloWorldコンポーネントをimport(HelloWorld.vue)
import TestComponent from './modules/TestComponent.vue'

export default {  // main.jsで読み込む（エントリーポイント）
  name: 'App',
  components: {
    HelloWorld,
    TestComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
