export const state = () => {
  return {
    isVerifying: true,
  }
}

export const getters = {}

export const mutations = {
  SET_LOADING(state) {
    state.isVerifying = true
  },
  SET_LOADED(state) {
    state.isVerifying = false
  },
}

export const actions = {
  async verifyUserAsync({ commit, dispatch }, userId) {
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
