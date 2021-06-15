import delay from '../../assets/js/delay'

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
      await delay(10000)
      const response = await this.$api.delete(`/posts/${postId}`)
      commit('post/get/DELETE_POST', postId, { root: true })
      await this.$swal.fire({
        text: 'Your post has been deleted',
        icon: 'success',
      })
    } catch (err) {
      console.log(err)
      this.$errorSwal('Failed to delete post, please try again !')
    } finally {
      commit('SET_LOADED')
    }
  },
}
