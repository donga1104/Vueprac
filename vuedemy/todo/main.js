const app = Vue.createApp({
    data:() => ({

    }),
    methods: {
        addItem: function(event) {
            console.log('log')
        }
    }
})

app.mount('#app')