// import { WIN, LOSE, TIE, TEAMMATCH } from './shiai_constants'
import { TEAMMATCH } from './shiai_constants'

export const ADD_IPPON = 'ADD_IPPON'

export const state = () => ({
  count: 0,
  team_white_participants: null,
  team_red_participants: null,
  team_match_card: null,
  score_card: null,
  show: false
})

export const mutations = {
  ADD_IPPON (state, data) {
    console.log(data)
  },
  REMOVE_IPPON (state, data) {
  },
  SUBMIT_SHIAI (state, data) {
    if (data.type === TEAMMATCH) {
      state.count = data.team_white_participants.length + data.team_red_participants.length
      state.team_white_participants = data.team_white_participants
      state.team_red_participants = data.team_red_participants
      state.team_match_card = create2DArray(state.count / 2)
    } else {
      throw Error
    }
  },
  SHOW (state) {
    state.show = true
  },
  HIDE (state) {
    state.show = false
  }
}

function create2DArray (playerCount) {
  let arr = []
  let rows = 2
  for (let n = 0; n < rows; n++) {
    arr.push([])
    for (let m = 0; m < playerCount; m++) {
      arr[n][m] = {'points': [], 'outcome': '', 'penalty': []}
    }
  }
  return arr
}
