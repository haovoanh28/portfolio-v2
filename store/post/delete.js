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
      await this.$swal.fire({
        text: 'Your post has been deleted',
        icon: 'success',
      })
    } catch (err) {
      console.log(err)
      // this.$errorSwal.fire({
      //   title: `<span style="color: #fff !important">Something went wrong</span>`,
      // })
      this.$errorSwal('Failed to delete post, please try again !')
    } finally {
      commit('SET_LOADED')
    }
  },
}
