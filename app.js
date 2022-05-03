const appdata = {
  data() {
    return {
      message : '※データをテーブル表示する',
      // オブジェクトでv-for
      items:{
        taro:{mail: 'taro@mail', tel: '1234-22'},
        rota:{mail: 'ro@mail', tel: '123e-22'},
        pyon:{mail: 'pyun@mail', tel: '1224-22'},
      }
    }
  }
}

let app = Vue.createApp(appdata)
app.mount('#app')
