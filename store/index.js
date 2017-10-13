import Vuex from 'vuex'
import {MEN} from './ippon_constants'
// import {MEN, KOTE, DO} from 'constants'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ippons: [MEN, MEN, MEN],
      participants: ['Round Robin', 'Takumi', 'Ming', 'Nick', 'Kirk', 'James', 'Patrick', 'Wilson', 'Chris']
    },
    mutations: {
      delete (state) {
        state.ippons.splice(0, 1)
      },
      add (state) {
        state.ippons.push(MEN)
      }
    }
  })
}

export default createStore
