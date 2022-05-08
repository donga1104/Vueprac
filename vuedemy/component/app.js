//ルートvueインスタンスが作成される前に定義⇨vueインスタンスのcomponentsオプションに登録する
const helloComponent = {
    template: '<p>hello</p>'
}

const app = Vue.createApp({
    data: () => ({
        message: ''
    }),
    components: {
        'hello-component': helloComponent
    }
})

// グローバルで定義
// app.component('hello-component', {
//     template: '<p>hello</p>'
// })

 app.mount('#app');