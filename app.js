const data = ['windows','macOS', 'Linux', 'iOS', 'Android']
const appdata = {
  date() {
    return {
      data: data
    }
  }
}

let app = Vue.createApp(appdata)
app.mount('#app')