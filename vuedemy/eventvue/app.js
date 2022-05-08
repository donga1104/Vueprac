const app = Vue.createApp({
    data: () => ({
        message: ''
    }),
    methods: {
        clickHandler: function($event,message) {
            // console.log(message)    // Vue.js
            this.message = message
            console.log($event)
        }
    }
})

 app.mount('#app');