export const mutations = {
  ADD_IPPON (state, data) {
    if (state.score_card[data.x][data.y]) {
      if (state.score_card[data.x][data.y].points.length < 2) {
        state.score_card[data.x][data.y].points.push(data.ippon)
      }
    } else {
      console.log(state.score_card[data.x][data.y])
      state.score_card[data.x][data.y] = {'points': [], 'outcome': ''}
    }
  }
  // DEL_IPPON (state, data) {
  // }
}
