const appdata = {
  data() {
    return {
      message: null,
      isRed: true,
      isBlue: false
    }
  },
  mounted() {
    this.message = 'This is sample page.'
     setInterval(()=>{
     this.isBlue = !this.isBlue
     this.isRed = !this.isRed
     }, 1000)
  }
}

let app = Vue.createApp(appdata)
app.mount('#app')