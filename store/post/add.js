export const state = () => {
  return {}
}

export const getters = {}

export const mutations = {}

export const actions = {
  async addPostAsync(context, post) {
    try {
      console.log(post)
      const response = await this.$api.post('/posts', { ...post })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  },
}
