const app = Vue.createApp({
    data:() => ({
        basePrice: 100
    }),
    computed: {
        taxIncludedPrice: {
            get: function() {
                return this.basePrice * 1.1
            },
            set: function(value) {
                this.basePrice = value / 1.1
            }
        }
    },
    methods: {
        reversedMessageMethod: function() {
            return this.message.split('').reverse().join('')
        }
    }
})

app.mount('#app')