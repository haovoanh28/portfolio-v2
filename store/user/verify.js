export const state = () => {
  return {
    isVerifying: false,
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
      const response = await this.$api.get(`/users/${userId}`)
      if (response.data.statusCode == '403') {
        dispatch('user/auth/logoutAsync', {}, { root: true })
      }
      console.log('response', response.data)
    } catch (err) {
      console.log(err)
      dispatch('user/auth/logoutAsync', {}, { root: true })
      this.$errorSwal('Your session has expired')
    } finally {
      commit('SET_LOADED')
    }
  },
}
