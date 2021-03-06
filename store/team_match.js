// import { WIN, LOSE, TIE, TEAMMATCH } from './shiai_constants'
import { TEAMMATCH } from './shiai_constants'

export const ADD_IPPON = 'ADD_IPPON'
export const REMOVE_IPPON = 'REMOVE_IPPON'

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
    const team = data.team
    const player = data.player
    const ippon = data.ippon
    if (state.team_match_card[team][player].points.length < 2) {
      state.team_match_card[team][player].points.push(ippon)
    }
  },
  REMOVE_IPPON (state, data) {
    const team = data.team
    const player = data.player
    const index = data.index
    if (state.team_match_card[team][player].points.length > 0) {
      state.team_match_card[team][player].points.splice(index, 1)
    }
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
