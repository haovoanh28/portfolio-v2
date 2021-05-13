export const state = () => {
  return {
    isDeleting: false,
  }
}

export const getters = {}

export const mutations = {
  SET_LOADING(state) {
    state.isDeleting = true
  },
  SET_LOADED(state) {
    state.isDeleting = false
  },
}

export const actions = {
  async deletePostAsync({ commit }, postId) {
    try {
      commit('SET_LOADING')
      const response = await this.$api.delete(`/posts/${postId}`)
      commit('post/get/DELETE_POST', postId, { root: true })
    } catch (err) {
      console.log(err)
    } finally {
      commit('SET_LOADED')
    }
  },
}
