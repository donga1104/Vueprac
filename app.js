const vm = new Vue({
  el: '#app',
  // 関数も定義できる（返り値がセット）
  data(){   // data: function(){
    return {
      message: 'Hello, World!'
    }
  }
})

window.vm = vm; //検証ツールからvueインスタンスにアクセスできる

// $watch:値の監視、値が変化した時にコールバック関数が実行される
vm.$watch(function() {
  return this.message   // thisはVueインスタンス(vm)
},  function(message) { // 第二引数：値が変更されたときに呼ばれる
  console.log('変更後の値：' + message)
})

