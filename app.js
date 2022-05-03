const appdata = {
  data() {
    return {
     flag : true 
    }
  },
  mounted() {
    setInterval(()=>{
      this.flag = !this.flag
    }, 1000)
  }
}

let app = Vue.createApp(appdata)
app.mount('#app')
