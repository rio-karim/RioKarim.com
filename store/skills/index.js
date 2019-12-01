import { each, random, extend } from 'underscore'
const namespaced = true
const state = {
  loader: true,
  delay: 2000,
  config: {
    textColour: '#3FC4E4',
    outlineColour: 'transparent',
    reverse: true,
    maxSpeed: 0.18,
    zoom: 0.45,
    zoomMax: 0.45,
    stretchX: 3,
    stretchY: 3,
    textHeight: 36,
    shuffleTags: true,
    weight: true,
    weightMode: 'size',
    txtOpt: true,
    textFont: 'Raleway, sans-serif',
    noSelect: true,
    initial: [0.1, -0.05]
  }
}
const getters = {}
const mutations = {}
const actions = {
  start({ state }) {
    const scriptTag = document.createElement('script')
    scriptTag.src = '/tagcanvas.js'
    scriptTag.id = 'TagCanvas'
    document.getElementsByTagName('head')[0].appendChild(scriptTag)
    setTimeout(() => {
      state.loader = false
      window.TagCanvas.Start('tagcanvas', 'tags', state.config)
    }, state.delay)
  },
  stop({ state }) {
    const tagScript = document.querySelector('#TagCanvas')
    tagScript.parentNode.removeChild(tagScript)
  }
}

export default {
  namespaced,
  actions,
  mutations,
  getters,
  state
}
