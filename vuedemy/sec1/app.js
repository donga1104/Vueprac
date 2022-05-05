const app = Vue.createApp({
    // options
    data: () => ({
        message : 'hello,Vue.js',
        count: 100,
        user: {
            lastName: 'yoshida',
            firstName: 'shun',
            prefecture: 'Osaka'
        },
        colors: ['Red', 'Green', 'Blue']
    })
}).mount('#app');
// app.mount('#app');

