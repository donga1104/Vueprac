const state ={
  loginUserName:''
}
const mutations = {
  setLoginUser( state, user ){
    state.loginUserName = user.name
  }
}
const actions = {
  setLoginUser({ commit }, user){
    commit('setLoginUser', user )
  }
}
const getters = {}
export default {  // export先はルート（store/index.js)
  namespaced: true, // 名前空間を有効にする（フォルダ名で使えるようになる？）
  state,
  mutations,
  actions,
  getters
}