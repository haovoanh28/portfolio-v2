export const state = () => {
  return {}
}

export const getters = {}

export const mutations = {}

export const actions = {
  async deletePostAsync(context, postId) {
    try {
      const response = await this.$api.delete('/posts', { id: postId })
    } catch (err) {
      console.log(err)
    }
  },
}
