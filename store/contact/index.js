const namespaced = true
const state = {
  name: '',
  email: '',
  subject: '',
  message: '',
  available: true
}
const mutations = {
  setAvailable(state, action) {
    state.available = action === true
  }
}
const actions = {
  sendEmail({ commit, state, dispatch }) {
    if (!state.name || !state.email || !state.subject || !state.message) {
      dispatch(
        'ui/notification',
        {
          status: 500,
          title: 'Validation!',
          message: 'Please fill in all fields.'
        },
        { root: true }
      )
      return
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
        dispatch(
          'ui/notification',
          {
            status: 400,
            title: 'Error!',
            message: 'There was an error sending your email.'
          },
          { root: true }
        )
      })
    return emailPromise.then(resp => {
      if (resp.status === 200) {
        commit('setAvailable', false)
        dispatch(
          'ui/notification',
          {
            status: 200,
            title: 'Success!',
            message: 'Your email was sent.'
          },
          { root: true }
        )
      } else {
        dispatch(
          'ui/notification',
          {
            status: 400,
            title: 'Error!',
            message: 'There was an error sending your email.'
          },
          { root: true }
        )
      }
    })
  }
}
const getters = {}
export default {
  namespaced,
  actions,
  mutations,
  getters,
  state
}
