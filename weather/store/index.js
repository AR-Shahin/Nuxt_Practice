export const strict = false
export const state = () => ({
  cityData: '',
  error: false,
})
export const getters = {
  getCityData(state) {
    return state.cityData
  },
}
export const mutations = {
  CITY_DATA(state, payload) {
    state.cityData = payload
  },
  ERROR(state) {
    state.error = true
  },
  CLEAR_STORE(state) {
    state.cityData = ''
  },
}
export const actions = {
  async getWeather({ commit }, payload) {
    try {
      const response = await this.$axios.$get(
        process.env.BASE_URL + `${payload}&appid=` + process.env.APP_ID
      )
      if (response.cod !== 200) {
        alert(5)
      }
      commit('CITY_DATA', response)
    } catch (err) {
      commit('ERROR')
    }
  },
}
