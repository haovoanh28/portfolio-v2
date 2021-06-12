export const state = () => {
  return {
    isEditing: false,
  }
}

export const getters = {}

export const mutations = {
  SET_LOADING(state) {
    state.isEditing = true
  },
  SET_LOADED(state) {
    state.isEditing = false
  },
}

export const actions = {
  async editPostAsync({ commit }, post) {
    try {
      commit('SET_LOADING')
      const response = await this.$api.put(`/posts/${post._id}`, { ...post })
      console.log(response)
      this.$successSwal('Post has been edited')
    } catch (err) {
      console.log(err)
      this.$errorSwal('Failed to edit post, please try again !')
    } finally {
      commit('SET_LOADED')
    }
  },
}
