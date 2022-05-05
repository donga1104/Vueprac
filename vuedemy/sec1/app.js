const app = Vue.createApp({
    data: () => ({

    }),
})
app.component('hello-component', {
    template: '<p>hello!</p>'
})

 app.mount('#app');