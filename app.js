let classObj ={
  red: true,
  blue: false
}

const appdata = {
  data() {
    return {
      message: 'This is sample page',
      classes: classObj
    }
  },
  mounted() {
    this.message = 'This is sample page.'
     setInterval(()=>{
     this.classes.red = !this.red
     this.classes.blue = !this.blue
     }, 1000)
  }
}

let app = Vue.createApp(appdata)
app.mount('#app')

// Mac切り替えテスト