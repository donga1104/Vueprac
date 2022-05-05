const app = Vue.createApp({
    data: () => ({
        now : '-'
    }),
    methods: {
        onClick: function() {
            this.now = new Date().toLocaleString();
        }
    }
}).mount('#app');
// app.mount('#app');