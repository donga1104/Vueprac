import Vue from 'vue'
import App from './App.vue'

// コンソールにメッセージが出る？（今はdevモードだよ）
Vue.config.productionTip = false

new Vue({
  render: h => h(App),  // render:描画関数、templateの代わり。関数でHTMLを書ける
}).$mount('#app')
