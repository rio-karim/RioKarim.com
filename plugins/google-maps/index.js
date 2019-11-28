import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBImmMLmLU6TwOLTWpoLwxJN_ZVYPTnfBE',
    libraries: 'places' // necessary for places input
  }
})
