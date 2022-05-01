const appdata = {
  data() {
    return {
      message: null,
      style:"font-size:32pt; color:red;"
    }
  },
  mounted() {
      this.message = 'This is sample page.'
  }
}

let app = Vue.createApp(appdata)
app.mount('#app')