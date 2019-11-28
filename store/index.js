import Vuex from 'vuex'
import contact from './contact'

const createStore = () =>
  new Vuex.Store({
    modules: {
      contact
    }
  })

export default createStore
