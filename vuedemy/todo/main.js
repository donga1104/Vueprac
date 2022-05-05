const app = Vue.createApp({
    data:() => ({

    }),
    computed: {
        computedNumber: function() {
            console.log('computed') // ログが１回
            return Math.random()
        }
    },
    methods: {
        methodsNumber: function() {
            console.log('methods') // ログが３回
            return Math.random()
        }
    }
})

app.mount('#app')