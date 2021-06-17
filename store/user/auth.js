import delay from '@/assets/js/delay'

const state = () => {
  return {
    isLoading: false,
    user: {},
    accessToken: '',
  }
}

const getters = {}

const mutations = {
  SET_LOADING(state) {
    state.isLoading = true
  },
  SET_LOADED(state) {
    state.isLoading = false
  },
  SET_USER(state, user) {
    state.user = { ...user }
  },
  SET_ACCESS_TOKEN(state, token) {
    state.accessToken = token
  },
}

const actions = {
  async loginAsync({ commit }, { userName, password }) {
    try {
      commit('SET_LOADING')

      const response = await this.$api.post('/users/login', {
        userName,
        password,
      })

      console.log(response)
      const { accessToken, user } = response.data.data
      commit('SET_USER', user)
      commit('SET_ACCESS_TOKEN', accessToken)
      this.$router.push({ path: '/admin/post/overview' })
    } catch (err) {
      console.log(err)
      this.$errorSwal('Login failed')
    } finally {
      commit('SET_LOADED')
    }
  },

  async logoutAsync({ commit }) {
    try {
      commit('SET_LOADING')

      await delay(500)

      commit('SET_USER', {})
      commit('SET_ACCESS_TOKEN', '')
      this.$router.go({ path: '/admin/login' })
    } catch (err) {
      console.log(err)
      this.$errorSwal('Logout failed')
    } finally {
      commit('SET_LOADED')
    }
  },
}

export { state, getters, mutations, actions }
