const appdata = {
  data() {
    return {
      message : '※データをテーブル表示する',
      // オブジェクトでv-for
      items: [
        {name: 'taro', mail: 'taro@mail', tel: '1234'},
        {name: 'taro2', mail: 'taro2@mail', tel: '2222'},
        {name: 'taro3', mail: 'taro3@mail', tel: '3333'},
        {name: 'taro4', mail: 'taro4@mail', tel: '4444'},
      ]
    }
  }
}

let app = Vue.createApp(appdata)
app.mount('#app')
