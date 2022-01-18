import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from "./modules/user"

export default createStore({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {
    user
  },
  plugins: [createPersistedState()]
})