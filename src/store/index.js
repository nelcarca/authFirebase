import { parseQuery } from 'vue-router'
import { createStore } from 'vuex'

export default createStore({
  state: {
    usuario: null,
    error: null
  },
  getters: {
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload
    },
    setError(state, payload) {
      state.error = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
