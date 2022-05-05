const app = Vue.createApp({
    data:() => ({
        colors: [
            {name: 'red'},
            {name: 'blue'},
            {name: 'green'},
        ]
    }),
    watch: {
        colors: {
            handler: function(newValue, oldValue) {
                console.log('update')
            },
            deep: true // ネストされた内容も監視する（console.log('update')が表示される
        }
    },
    methods: {
        onClick: function(event) {
            this.colors[1].name = 'white'
        }
    }
})

app.mount('#app')