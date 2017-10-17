export const mutations = {
  ADD_IPPON (state, data) {
    if (state.round_robin_card[data.x][data.y]) {
      if (state.round_robin_card[data.x][data.y].points.length < 2) {
        state.round_robin_card[data.x][data.y].points.push(data.ippon)
      }
    } else {
      console.log(state.round_robin_card[data.x][data.y])
      state.round_robin_card[data.x][data.y] = {'points': [], 'outcome': ''}
    }
  },
  REMOVE_IPPON (state, data) {
    if (state.round_robin_card[data.x][data.y]) {
      if (state.round_robin_card[data.x][data.y].points.length > 0) {
        state.round_robin_card[data.x][data.y].points.splice(data.index, 1)
      }
    }
  }
}
