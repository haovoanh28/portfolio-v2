export default {
  data() {
    return {
      localLoading: true,
      post: {
        title: '',
        brief: '',
        bannerImg: '',
        type: '',
        hashtags: [],
        content: '',
      },
    }
  },
  methods: {
    handleEdLoaded() {
      this.localLoading = false
    },
    handlePostDataChange(e) {
      console.log('post data change', e)
      const { name, value } = e
      this.post = { ...this.post, [name]: value }
    },
    handleAddTag(tag) {
      this.post.hashtags.push(tag)
    },
    handleDeleteTag(tag) {
      this.post.hashtags = this.post.hashtags.filter((t) => t !== tag)
    },
  },
}
