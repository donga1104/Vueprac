const app = Vue.createApp({
    data:() => ({
        message : 'hello'
    }),
    methods: {
        clickHandler: function(event) {
            this.message = this.message.split('').reverse().join('') // 文字列反転
        }
    }
})

app.mount('#app')