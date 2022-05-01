const appdata = {
  data() {
    return {
      message: null
    }
  },
  mounted() {
      this.message = 'This is sample page.'
  }
}

let app = Vue.createApp(appdata)
app.mount('#app')