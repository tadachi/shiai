import { WIN, LOSE, TIE, ROUNDROBIN } from './shiai_constants'

export const ADD_IPPON = 'ADD_IPPON'
export const REMOVE_IPPON = 'REMOVE_IPPON'
export const SET_WIN = 'SET_WIN'
export const SET_LOSE = 'SET_LOSE'
export const SET_TIE = 'SET_TIE'
export const RESET_OUTCOME = 'RESET_OUTCOME'
export const ADD_PENALTY = 'ADD_PENALTY'
export const REMOVE_PENALTY = 'REMOVE_PENALTY'
export const SUBMIT_SHIAI = 'SUBMIT_SHIAI'

export const state = () => ({
  count: 0,
  participants: null,
  score_card: null,
  round_robin_card: null,
  counter_r: 0
})

export const mutations = {
  ADD_IPPON (state, data) {
    if (state.round_robin_card[data.x][data.y]) {
      if (state.round_robin_card[data.x][data.y].points.length < 2) {
        state.round_robin_card[data.x][data.y].points.push(data.ippon)
        state.score_card[data.x].points += 1
      }
    }
  },
  REMOVE_IPPON (state, data) {
    if (state.round_robin_card[data.x][data.y]) {
      if (state.round_robin_card[data.x][data.y].points.length > 0) {
        state.round_robin_card[data.x][data.y].points.splice(data.index, 1)
        if (state.score_card[data.x].points <= 0) {
          state.score_card[data.x].points = 0
        } else {
          state.score_card[data.x].points -= 1
        }
      }
    }
  },
  ADD_PENALTY (state, data) {
    if (state.round_robin_card[data.x][data.y]) {
      if (state.round_robin_card[data.x][data.y].penalty.length < 4) {
        state.round_robin_card[data.x][data.y].penalty.push(data.penalty)
        if (state.round_robin_card[data.x][data.y].penalty.length === 2) {
          state.score_card[data.y].points += 1
        }
        if (state.round_robin_card[data.x][data.y].penalty.length === 4) {
          state.score_card[data.y].points += 1
        }
      }
    }
  },
  REMOVE_PENALTY (state, data) {
    if (state.round_robin_card[data.x][data.y]) {
      if (state.round_robin_card[data.x][data.y].penalty.length > 0) {
        state.round_robin_card[data.x][data.y].penalty.splice(data.index, 1)
        if (state.round_robin_card[data.x][data.y].penalty.length === 1) {
          state.score_card[data.y].points -= 1
        }
        if (state.round_robin_card[data.x][data.y].penalty.length === 3) {
          state.score_card[data.y].points -= 1
        }
      }
    }
  },
  SET_WIN (state, data) {
    if (state.round_robin_card[data.x][data.y]) {
      state.round_robin_card[data.x][data.y].outcome = data.outcome
      state.score_card[data.x].wins += 1
      // Flip/Inverse data.x data.y and change opponent to LOSE
      state.round_robin_card[data.y][data.x].outcome = LOSE
      state.score_card[data.y].losses += 1
    }
  },
  SET_LOSE (state, data) {
    if (state.round_robin_card[data.x][data.y]) {
      state.round_robin_card[data.x][data.y].outcome = data.outcome
      state.score_card[data.x].losses += 1
      // Flip/Inverse data.x data.y and change opponent to WIN
      state.round_robin_card[data.y][data.x].outcome = WIN
      state.score_card[data.y].wins += 1
    }
  },
  SET_TIE (state, data) {
    if (state.round_robin_card[data.x][data.y]) {
      state.round_robin_card[data.x][data.y].outcome = data.outcome
      state.round_robin_card[data.y][data.x].outcome = data.outcome
      state.score_card[data.x].ties += 1
      state.score_card[data.y].ties += 1
    }
  },
  RESET_OUTCOME (state, data) {
    if (state.round_robin_card[data.x][data.y]) {
      if (state.round_robin_card[data.x][data.y].outcome === WIN) {
        state.score_card[data.x].wins -= 1
      } else if (state.round_robin_card[data.x][data.y].outcome === LOSE) {
        state.score_card[data.x].losses -= 1
      } else if (state.round_robin_card[data.x][data.y].outcome === TIE) {
        state.score_card[data.x].ties -= 1
      }

      if (state.round_robin_card[data.y][data.x].outcome === WIN) {
        state.score_card[data.y].wins -= 1
      } else if (state.round_robin_card[data.y][data.x].outcome === LOSE) {
        state.score_card[data.y].losses -= 1
      } else if (state.round_robin_card[data.y][data.x].outcome === TIE) {
        state.score_card[data.y].ties -= 1
      }

      state.round_robin_card[data.x][data.y].outcome = ''
      state.round_robin_card[data.y][data.x].outcome = ''
    }
  },
  SUBMIT_SHIAI (state, data) {
    if (data.type === ROUNDROBIN) {
      state.count = data.participants.length
      state.participants = data.participants
      state.round_robin_card = create2DArray(state.count + 1)
      state.score_card = createScoreCardArray(state.count)
    } else {
      throw Error
    }
  },
  INC (state) {
    state.counter_r++
  }
}

function create2DArray (rows) {
  let arr = []
  for (let n = 0; n < rows; n++) {
    arr.push([])
    for (let m = 0; m < rows; m++) {
      arr[n][m] = {'points': [], 'outcome': '', 'penalty': []}
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
