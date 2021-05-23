export const state = () => {
  return {
    isAdding: false,
  }
}

export const getters = {}

export const mutations = {
  SET_LOADING(state) {
    state.isAdding = true
  },
  SET_LOADED(state) {
    state.isAdding = false
  },
}

export const actions = {
  async addPostAsync({ commit }, post) {
    try {
      commit('SET_LOADING')
      const response = await this.$api.post('/posts', { ...post })
    } catch (err) {
      console.log(err)
      this.$errorSwal('Failed to create new post, please try again !')
    } finally {
      this.$successSwal('Post has been created')
      commit('SET_LOADED')
    }
  },
}
