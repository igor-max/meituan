import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: "江西",
    username: ''
  },
  mutations: {
  	setPosition(state, val) {
  		state.position = val;
    },
    setUserName(state, val) {
      state.username = val;
    }
  },
  getters: {

  },
  actions: {
  }
})
