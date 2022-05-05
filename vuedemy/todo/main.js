const app = Vue.createApp({
    data:() => ({
        message : 'hello',
        number: 100,
        ok: true
    })
})

app.mount('#app')