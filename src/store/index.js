import Vue from 'vue'
import Vuex from 'vuex'

import 'babel-polyfill'

import Firebase from 'firebase'
import config from '../config/config.local'

import users from './modules/users'
import conversations from './modules/conversations'

Vue.use(Vuex)

const fireApp = Firebase.initializeApp(config.firebase)
const firestore = Firebase.firestore(fireApp)

firestore.settings({ timestampsInSnapshots: true })

const state = {
    db: firestore
}

export default new Vuex.Store({
  state,
  modules: {
    users,
    conversations
  }
})