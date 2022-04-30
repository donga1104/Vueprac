const vm = new Vue({
  el: '#app',
  // 関数も定義できる（返り値がセット）
  data(){   // data: function(){
    return {
      message: 'Hello, World!'
    }
  }
})

window.vm = vm; //コンソールからvueインスタンスにアクセスできる