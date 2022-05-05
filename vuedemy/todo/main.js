const app = Vue.createApp({
    data:() => ({
        newItem: '',
        todos: []
    }),
    methods: {
        addItem: function(event) {
            if(this.newItem === '')return // 空文字は追加しない
            let todo = {
                item : this.newItem,
                isDone : false
            }
            this.todos.push(todo)
            this.newItem = ''   // 入力欄をクリアする
        },
        deleteItem: function(index) {
            // console.log('delete is ' + index)    削除対象はindexで区別
            this.todos.splice(index, 1)
        }

    }
})

app.mount('#app')