import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  // 初期値（data()の扱いに似ている）
    count:0
  },
  getters: {
  },
  mutations: {
    increment(state){
      state.count++
    },
    addCount(state,payload){  // 第二引数はオブジェクト
      state.count += payload.value
    }
  },
  actions: {
    incrementAction(context){
      context.commit('increment') // mutationsのincrementを呼び出す
    },
    // incrementAction({commit}){ // context省略の書き方も可能
    //   commit('increment')
    // },

    // 第二引数があるパターン
    addCountAction({commit},payload){
      commit('addCount',payload)
    }
  },
  modules: {
  }
})
