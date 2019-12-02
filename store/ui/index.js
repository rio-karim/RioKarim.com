const namespaced = true

const state = {
  view: '',
  menu: false
}
const getters = {}
const mutations = {
  setView(state, view) {
    state.view = view
  },
  toggleMenu(state, action) {
    state.menu = !state.menu
  }
}
const actions = {
  notification({ state, commit }, resp) {
    this._vm.$notify({
      group: 'default',
      title: resp.title,
      text: resp.message
    })
  },
  view({ state, commit }, view) {
    commit('setView', view)
  },
  menu({ state, commit }, action) {
    commit('toggleMenu')
  }
}

export default {
  namespaced,
  actions,
  mutations,
  getters,
  state
}
