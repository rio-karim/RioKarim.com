export default {
  namespaced: true,
  state: {
    loading: true
  },
  mutations: {
    setLoading: (state, action) => (state.loading = action === true)
  },
  actions: {
    toggleLoading: ({ commit, state }, action) => {
      commit('setLoading', action)
    }
  },
  getters: {
    getLoading: state => state.loading
  }
}
