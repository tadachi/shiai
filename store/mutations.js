import { LOSE, WIN, TIE } from '../store/shiai_constants'

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
  }
}
