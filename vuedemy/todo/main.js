const app = Vue.createApp({
    data:() => ({
        // 通常xss対策でタグはそのまま表示されるが、v-htmlでタグを記述可能
        message : 'hello <span style="color:red"> red </span>'
    })
})

app.mount('#app')