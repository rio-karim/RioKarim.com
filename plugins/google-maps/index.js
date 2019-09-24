import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC8ZTauGtl8JGYAIo-GE-K-GrvbgufkwK8',
    libraries: 'places'
  }
})
