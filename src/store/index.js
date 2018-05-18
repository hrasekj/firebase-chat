import Vue from 'vue'
import Vuex from 'vuex'

import Firebase from 'firebase'
import config from '../config/config.local'

Firebase.initializeApp(config.firebase)
Vue.use(Vuex)

const state = {
    db: Firebase.firestore()
}

export default new Vuex.Store({
  state,
  modules: {}
})