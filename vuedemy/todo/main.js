const app = Vue.createApp({
    data:() => ({
        newItem: '',
        todos: []
    }),
    methods: {
        addItem: function(event) {
            console.log('log')
            let todo = {
                item : this.newItem
            }
            this.todos.push(todo)
        }
    }
})

app.mount('#app')