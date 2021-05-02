export const state = () => {
  return {
    posts: [],
    isLoading: false,
  }
}
export const gettets = {}

export const mutations = {
  UPDATE_POST(state, posts) {
    state.posts = posts
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

      const { data: posts } = response.data
      console.log(posts)

      commit('UPDATE_POST', posts)
    } catch (err) {
      console.log(err)
    } finally {
      commit('SET_LOADED')
    }
  },
}
