import Vuex from 'vuex'
import Ui from './ui'

const createStore = () =>
  new Vuex.Store({
    modules: {
      Ui
    }
  })

export default createStore
