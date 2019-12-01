const namespaced = true

const state = {}
const getters = {}
const mutations = {}
const actions = {
  notification({ state, commit }, resp) {
    this._vm.$notify({
      group: 'default',
      title: resp.title,
      text: resp.message
    })
  }
}

export default {
  namespaced,
  actions,
  mutations,
  getters,
  state
}
