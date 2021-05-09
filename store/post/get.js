export const state = () => {
  return {
    posts: [],
    postsCount: 0,
    isLoading: false,
  }
}
export const gettets = {}

export const mutations = {
  UPDATE_POSTS(state, posts) {
    state.posts = posts
  },
  UPDATE_POSTS_COUNT(state, postsCount) {
    state.postsCount = postsCount
  },
  SET_LOADING(state) {
    state.isLoading = true
  },
  SET_LOADED(state) {
    state.isLoading = false
  },
}

export const actions = {
  async getAllPostAsync({ commit }) {
    try {
      commit('SET_LOADING')
      const response = await this.$api.get('/posts')

      console.log(response)
      const { data: posts, postsCount } = response.data

      commit('UPDATE_POSTS', posts)
      commit('UPDATE_POSTS_COUNT', postsCount)
    } catch (err) {
      console.log(err)
    } finally {
      commit('SET_LOADED')
    }
  },
}
