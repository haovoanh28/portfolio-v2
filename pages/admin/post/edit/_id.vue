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
import { useStore } from '@nuxtjs/composition-api'

import useHandlePostData from '@/utils/use/useHandlePostData'

export default {
  layout: 'admin',
  components: {
    AdminCreate,
  },
  setup() {
    const handlePostData = useHandlePostData('edit')

    return { ...handlePostData }
  },
  computed: {
    ...mapState('post/get', ['isLoading']),
  },
  methods: {
    ...mapActions('post/edit', ['editPostAsync']),
    ...mapActions('post/get', ['getPostByIdAsync']),
    handleEditPost({ id }) {
      this.editPostAsync(this.post)
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-create {
  position: relative;
  padding: 0;
}
</style>