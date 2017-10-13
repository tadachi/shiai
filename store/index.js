import Vuex from 'vuex'
import {MEN, KOTE, DOU, TSUKI} from './shiai_constants'

const createStore = () => {
  return new Vuex.Store({
    state: {
      count: 8,
      ippons: [MEN, KOTE, DOU, TSUKI],
      participants: ['Round Robin', 'Takumi', 'Ming', 'Nick', 'Kirk', 'James', 'Patrick', 'Wilson', 'Chris'],
      score_card: CreateEmpty2DArray(8)
    },
    mutations: {
      delete (state) {
        state.ippons.splice(0, 1)
      },
      add (state, payload) {
        state.ippons.push(payload) // payload must be MEN, KOTE, DO, TSUKI
      }
    }
  })
}

function CreateEmpty2DArray (rows) {
  let arr = []

  for (let i = 0; i < rows; i++) {
    arr[i] = []
  }

  return arr
}

export default createStore
