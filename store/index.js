import Vuex from 'vuex'
import {mutations} from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      count: 7,
      participants: ['Round Robin', 'Takumi', 'Ming', 'Nick', 'Kirk', 'James', 'Patrick', 'Wilson'],
      score_card: createScoreCardArray(8),
      round_robin_card: create2DArray(8)
    },
    mutations
  })
}

function create2DArray (rows) {
  let arr = []
  for (let n = 0; n < rows; n++) {
    arr.push([])
    for (let m = 0; m < rows; m++) {
      arr[n][m] = {'points': [], 'outcome': ''}
    }
  }
  return arr
}

function createScoreCardArray (playerCount) {
  let arr = []
  for (let n = 0; n < playerCount; n++) {
    arr.push({wins: 0, losses: 0, ties: 0, points: 0})
  }
  return arr
}

export default createStore
