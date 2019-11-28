const namespaced = true

const state = {
  name: '',
  email: '',
  subject: '',
  message: '',
  available: true
}
const getters = {}
const mutations = {
  setAvailable(state, action) {
    state.available = action === true
  }
}
const actions = {}

export default {
  namespaced,
  actions,
  mutations,
  getters,
  state
}
