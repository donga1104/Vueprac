// Vue3で学習しなおし
const appdata ={
  data(){
    return{
      message: 'Hello Vue!',
      count: 0
    }
  },
  mounted(){
    setInterval(() => {
      this.count++
      this.message = 'Count: ' + this.count
    }, 1000)
  }
}

Vue.createApp(appdata).mount('#app')