export default {
  data() {
    return {
      isLoading: true,
      post: {
        title: '',
        brief: '',
        bannerImage: '',
        type: '',
        tags: [],
        content: '',
      },
    }
  },
  methods: {
    handleEdLoaded() {
      this.isLoading = false
    },
    handlePostDataChange(e) {
      console.log('post data change', e)
      const { name, value } = e
      this.post = { ...this.post, [name]: value }
    },
    handleAddTag(tag) {
      this.post.tags.push(tag)
    },
    handleDeleteTag(tag) {
      this.tags = this.tags.filter((t) => t !== tag)
    },
  },
}
