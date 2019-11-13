import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './style.css'
import './filters/truncate'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

//Video Controller
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

      Vue.use(VueGoogleMaps, {
        load: {
          key: 'YOUR_API_TOKEN',
          libraries: 'places', // This is required if you use the Autocomplete plugin
          // OR: libraries: 'places,drawing'
          // OR: libraries: 'places,drawing,visualization'
          // (as you require)
       
          //// If you want to set the version, you can do so:
          // v: '3.26',
        },
       
        //// If you intend to programmatically custom event listener code
        //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
        //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
        //// you might need to turn this on.
        // autobindAllEvents: false,
       
        //// If you want to manually install components, e.g.
        //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
        //// Vue.component('GmapMarker', GmapMarker)
        //// then disable the following:
        // installComponents: true,
      })

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



