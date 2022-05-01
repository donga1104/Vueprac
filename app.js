const list = ['one', 'two', 'three']
const appdata = {
  date() {
    return {
      message: `<ul>
        <li>${list[0]}</li>
        <li>${list[1]}</li>
        <li>${list[2]}</li>
      </ul>`
    }
  }
}

let app = Vue.createApp(appdata)
app.mount('#app')