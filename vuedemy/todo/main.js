const app = Vue.createApp({
    data:() => ({
        newItem: '',
        todos: []
    }),
    methods: {
        addItem: function(event) {
            if(this.newItem === '')return // 空文字は追加しない
            let todo = {
                item : this.newItem
            }
            this.todos.push(todo)
            this.newItem = ''   // 入力欄をクリアする
        }
    }
})

app.mount('#app')