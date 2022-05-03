const appdata = {
  data() {
    return {
      message : '※データをテーブル表示する',
      items: [
        {name:'taro', mail:'taro@mail', tel:'01-234-5678'},
        {name:'hanako', mail:'hana@mail', tel:'99-234-5678'},
        {name:'sachiko', mail:'sacchi@mail', tel:'01-222-5678'},
        {name:'jiro', mail:'konto@mail', tel:'43-3232-5678'},
      ]
    }
  }
}

let app = Vue.createApp(appdata)
app.mount('#app')
