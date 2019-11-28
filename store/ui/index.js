const namespaced = true

const state = {}
const getters = {}
const mutations = {}
const actions = {
  postEmail({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(res => {
        resolve(res.json())
      })
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
