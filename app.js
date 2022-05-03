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
  template : '<p class="alert alert-primary">Hello!</p>'
})

app.mount('#app')
