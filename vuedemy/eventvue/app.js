const app = Vue.createApp({
    data: () => ({
        counter: 0
    }),
    methods: {
        clickHandler: function(event) {
            this.counter++
            console.log(event.target)   // <button>Count Up</button>
            console.log(event.target.tagName) // BUTTON
            console.log(event.target.innerHTML) // Count Up
            console.log(event.target.type)  // submit
            console.log(event.target.id)    // btn
        }
    }
})

 app.mount('#app');