
// STOP処理
let timer = null;

function doAction() {
  clearInterval(timer)
}

const appdata = {
  data() {
    return {
      message: '',
    }
  },
  created() {
    this.message = 'hello!'
    this.count = 0
  },
  mounted(){
    timer = setInterval(() => {
      this.count++
      this.message = 'Count: ' + this.count
    }, 1000)
  }
}

Vue.createApp(appdata).mount('#app')
