import {
  ref,
  reactive,
  useContext,
  useStore,
  useRoute,
  onMounted,
} from '@nuxtjs/composition-api'

export default function (action) {
  const localLoading = ref(true)
  const context = useContext()

  let post = reactive({
    title: '',
    brief: '',
    bannerImg: '',
    type: '',
    hashtags: [],
    content: '',
  })

  if (action === 'edit') {
    const store = useStore()
    const route = useRoute()

    const { id } = route.value.params

    onMounted(async () => {
      try {
        const response = await store.dispatch('post/get/getPostByIdAsync', id, {
          root: true,
        })
        Object.assign(post, response)
      } catch (err) {
        console.log(err)
      }
    })
  }

  const handleEdLoaded = () => {
    localLoading.value = false
  }

  const handlePostDataChange = (e) => {
    const { name, value } = e
    post[name] = value
  }

  const handleAddTag = (tag) => {
    post.hashtags.push(tag)
  }

  const handleDeleteTag = (tag) => {
    post.hashtags = post.hashtags.filter((t) => t !== tag)
  }
  const handleClearPost = async () => {
    const choice = await context.$swal.fire({
      title: 'Are you sure to clear all ?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, clear it!',
    })
  }

  return {
    post,
    localLoading,
    handleEdLoaded,
    handlePostDataChange,
    handleAddTag,
    handleDeleteTag,
    handleClearPost,
  }
}
