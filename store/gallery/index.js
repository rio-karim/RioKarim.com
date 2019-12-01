import { each, random, extend } from 'underscore'
const namespaced = true
const state = {
  target: 0,
  loader: true,
  faded: false,
  mosaic: '',
  imageList: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
  imageRaw: [
    require('~/static/gallery/1.png'),
    require('~/static/gallery/2.png'),
    require('~/static/gallery/3.png'),
    require('~/static/gallery/4.png'),
    require('~/static/gallery/5.png'),
    require('~/static/gallery/6.png')
  ],
  urlList: ['/test', '/test', '/test', '/test', '/test', '/test'],
  urlCache: {
    '1.png': '/1',
    '2.png': '/2',
    '3.png': '/3',
    '4.png': '/4',
    '5.png': '/5',
    '6.png': '/6',
    '7.png': '/7',
    '8.png': '/8',
    '9.png': '/9',
    '10.png': '/10',
    '11.png': '/11',
    '12.png': '/12',
    '13.png': '/13',
    '14.png': '/14',
    '15.png': '/15'
  }
}
const getters = {}
const mutations = {}
const actions = {
  start({ state }) {
    setTimeout(() => {
      state.loader = false
      state.mosaic = setInterval(() => {
        let newTarget = random(0, 5)
        let targetExists = state.target === newTarget
        while (targetExists) {
          newTarget = random(0, 5)
          targetExists = state.target === newTarget
        }
        state.target = newTarget
        state.faded = true
        setTimeout(() => {
          let newImg = random(1, 15)
          let imgExists = state.imageList.includes(`${newImg}.png`)
          while (imgExists) {
            newImg = random(1, 15)
            imgExists = state.imageList.includes(`${newImg}.png`)
          }
          state.imageList[state.target] = `${newImg}.png`
          state.imageRaw[
            state.target
          ] = require(`~/static/gallery/${newImg}.png`)
          state.urlList[state.target] = state.urlCache[`${newImg}.png`]
        }, 750)
        setTimeout(() => {
          state.faded = false
        }, 1500)
      }, 4000)
    }, 1500)
  },
  stop({ state }) {
    clearInterval(state.mosaic)
  }
}

export default {
  namespaced,
  actions,
  mutations,
  getters,
  state
}
