import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import {mutations} from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      count: 0,
      participants: null,
      score_card: null,
      round_robin_card: null
    },
    mutations
  })
}

export default createStore
