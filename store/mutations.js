export const mutations = {
  ADD_IPPON (state, data) {
    console.log(data)
    state.score_card[data.x][data.y] = data.ippon
    console.log(state.score_card[data.x][data.y])
  }
}
