import Vuex from 'vuex'
import ui from './ui'

const createStore = () =>
  new Vuex.Store({
    modules: {
      ui: ui
    }
  })

export default createStore
