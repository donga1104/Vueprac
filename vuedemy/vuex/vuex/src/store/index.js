import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  // 初期値（data()の扱いに似ている）
    count:0,
    users:[
      {id:1, name:'田中', isVisible: true},
      {id:2, name:'マルクス', isVisible: false},
      {id:3, name:'闘莉王', isVisible: true}
    ]
  },
  getters: {
    // isVisibleがtrueの場合表示する
    visibleUsers(state){
      // gettersはreturnが必要
      return state.users.filter( user => user.isVisible)
    },
    // ----- アロー関数の書き方 -----
      // visibleUsers: state => state.Users.filter(user => user.isVisible)

    // ----- メソッドスタイルの書き方 -----
    getUserById: state => id =>{  // 指定のidを表示させる
      return state.users.find( user => user.id === id)
    }
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
    // auth/index.jsの読み込み
    auth
  }
})
