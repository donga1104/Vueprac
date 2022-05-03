let classObj ={
  red: true,
  blue: false
}

const appdata = {
  data() {
    return {
      message: 'This is sample page',
      styles: {
        margin: '10px',
        padding: '5px 20px',
        fontSize: '20pt',
        color: 'red',
        backgroundColor: '#fee',
        border: '3px solid blue'
      }
    }
  },
}

let app = Vue.createApp(appdata)
app.mount('#app')
