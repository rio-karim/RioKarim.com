import Vuex from 'vuex'
import contact from './contact'
import gallery from './gallery'
import ui from './ui'
import skills from './skills'

const createStore = () =>
  new Vuex.Store({
    modules: {
      contact,
      gallery,
      ui,
      skills
    }
  })

export default createStore
