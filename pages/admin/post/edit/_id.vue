<template>
  <div class="admin-create">
    <template v-if="localLoading || isLoading">
      <BaseSpinner fullScreen />
    </template>
    <template v-show="!localLoading || !isLoading">
      <client-only>
        <AdminCreate
          v-bind="post"
          @ed-loaded="handleEdLoaded"
          @post-data-change="handlePostDataChange"
          @add-tag="handleAddTag"
          @delete-tag="handleDeleteTag"
          @edit="handleEditPost"
          @clear="handleClearPost"
          formTitle="Edit Post"
          action="edit"
        />
      </client-only>
    </template>
  </div>
</template>

<script>
import AdminCreate from '@/components/admin/AdminForm'

import { mapActions, mapState } from 'vuex'

import { reactive } from '@nuxtjs/composition-api'
import useHandlePostData from '@/utils/use/useHandlePostData'

export default {
  layout: 'admin',
  components: {
    AdminCreate,
  },
  setup() {
    let post = reactive({})
    const handlePostData = useHandlePostData(post)

    return { ...handlePostData }
  },
  computed: {
    ...mapState('post/get', ['isLoading']),
  },
  methods: {
    ...mapActions('post/add', ['addPostAsync']),
    ...mapActions('post/get', ['getPostByIdAsync']),
    handleEditPost({ id }) {
      console.log('edit', id)
    },
  },
  async mounted() {
    const { id: postId } = this.$route.params
    const post = await this.getPostByIdAsync(postId)
    this.post = { ...post }
    console.log(post)
  },
}
</script>

<style lang="scss" scoped>
.admin-create {
  position: relative;
  padding: 0;
}
</style>