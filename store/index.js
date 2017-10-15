import Vuex from 'vuex'
import {mutations} from './mutations'
// import {MEN, KOTE, DOU, TSUKI} from '../store/shiai_constants'
// import {MEN, KOTE, DOU, TSUKI, RED, WHITE, ONEPOINTMATCH, TWOPOINTMATCH, TWOTOONEMATCH, TIEMATCH} from '../store/shiai_constants'

const createStore = () => {
  return new Vuex.Store({
    state: {
      count: 8,
      participants: ['Round Robin', 'Takumi', 'Ming', 'Nick', 'Kirk', 'James', 'Patrick', 'Wilson'],
      score_card: create2DArray(12)
    },
    mutations
  })
}

function create2DArray (rows) {
  let arr = []
  for (let n = 0; n < rows; n++) {
    for (let m = 0; m < rows; m++) {
      arr[m] = []
    }
  }
  return arr
}

export default createStore
