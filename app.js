const appdata = {
  date() {
    return {
      num : Math.floor(Math.random() * 100)
    }
  }
}

let app = Vue.createApp(appdata)
app.mount('#app')