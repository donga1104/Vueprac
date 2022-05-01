// Vue3で学習しなおし
const appdata ={
  data(){
    return{
      message: 'Hello Vue!'
    }
  }
}

Vue.createApp(appdata).mount('#app')