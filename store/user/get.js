export const state = () => {
  return {
    isGetting: false,
  }
}

export const getters = {}

export const mutations = {
  SET_LOADING(state) {
    state.isGetting = true
  },
  SET_LOADED(state) {
    state.isGetting = false
  },
}

export const actions = {
  async getUserInfoAsync({ commit, dispatch }, userId) {
    try {
      commit('SET_LOADING')
      await this.$api.get(`/users/${userId}`)
    } catch (err) {
      console.log(err)
      dispatch('user/auth/logoutAsync', {}, { root: true })
      this.$errorSwal('Failed to get information')
    } finally {
      commit('SET_LOADED')
    }
  },
}
