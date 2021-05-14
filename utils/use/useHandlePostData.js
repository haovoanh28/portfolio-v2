import { ref, reactive, toRefs, useContext } from '@nuxtjs/composition-api'

// props is post
export default function (props) {
  const localLoading = ref(true)
  const context = useContext()

  console.log('context boy', context)
  const post = reactive({
    ...props,
  })

  const handleEdLoaded = () => {
    localLoading.value = false
  }

  const handlePostDataChange = (e) => {
    console.log('post data change', e)
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

// export default {
//   data() {
//     return {
//       localLoading: true,
//       post: {
//         title: '',
//         brief: '',
//         bannerImg: '',
//         type: '',
//         hashtags: [],
//         content: '',
//       },
//     }
//   },
//   methods: {
//     handleEdLoaded() {
//       this.localLoading = false
//     },
//     handlePostDataChange(e) {
//       console.log('post data change', e)
//       const { name, value } = e
//       this.post = { ...this.post, [name]: value }
//     },
//     handleAddTag(tag) {
//       this.post.hashtags.push(tag)
//     },
//     handleDeleteTag(tag) {
//       this.post.hashtags = this.post.hashtags.filter((t) => t !== tag)
//     },
//     async handleClearPost() {
//       const choice = await this.$swal.fire({
//         title: 'Are you sure to clear all ?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, clear it!',
//       })
//     },
//   },
// }
