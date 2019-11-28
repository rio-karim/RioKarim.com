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
const actions = {
  sendEmail({ commit, state }) {
    if (!state.name || !state.email || !state.subject || !state.message) {
      return {
        status: 500,
        title: 'Validation!',
        message: 'Please fill in all fields.'
      }
    }
    const emailPromise = fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.message
      })
    })
      .then(res => res.json())
      .catch(() => {
        return {
          status: 400,
          title: 'Error!',
          message: 'There was an error sending your email.'
        }
      })
    return emailPromise.then(resp => {
      if (resp.status === 200) {
        commit('setAvailable', false)
        return {
          status: 200,
          title: 'Success!',
          message: 'Your email was sent.'
        }
      } else {
        return {
          status: 400,
          title: 'Error!',
          message: 'There was an error sending your email.'
        }
      }
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
