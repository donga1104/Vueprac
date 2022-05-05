const app = Vue.createApp({
    data:() => ({
        items: null,
        keyword: '',
        message: ''
    }),
    watch: {
        keyword: function(newKeyword, oldKeyword) {
        this.message = "Waiting for you to stop typing..."
        this.debouncedGetAnswer()   // debounce関数（lodashのユーティリティ）
        }
    },
    mounted: function() {
        // this.getAnswer() // debounce関数でリクエストを節約

        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000) // 指定時間内に同じイベント発生：処理実行しない。
    },
    methods: {
        getAnswer: function() {
            if(this.keyword === '') {
                console.log('karamoji')
                this.items = null
                return
            }

            this.message = 'lading...'
            const vm = this
            const params = {page: 1, per_page: 20, query: this.keyword}
            axios.get('https://qiita.com/api/v2/items', { params })
                .then(function(response) {
                    console.log(response)
                    vm.items = response.data
                })
                .catch(function(error) {
                    vm.message = 'Error' + error
                })
                .finally(function() {
                    vm.message = ''
                })
        }
    }
})

app.mount('#app')