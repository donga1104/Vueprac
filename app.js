const appdata = {
  data() {
    return {
      message : '※コンポーネントを表示する',
    }
  }
}

let app = Vue.createApp(appdata)

// コンポーネントの作成
app.component('hello', {
  data() {
    return{
      message: 'これは新しいメッセージです。'
    }
  },
  template: '<p class="alert alert-primary">{{ message }}</p>'
})

// マウントは最後
app.mount('#app')
