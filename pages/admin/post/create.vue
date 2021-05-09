<template>
  <div class="admin-create">
    <template v-if="isLoading">
      <BaseSpinner fullScreen />
    </template>
    <template v-show="!isLoading">
      <client-only>
        <AdminCreate
          v-bind="post"
          @ed-loaded="handleEdLoaded"
          @post-data-change="handlePostDataChange"
          @add-tag="handleAddTag"
          @delete-tag="handleDeleteTag"
        />
      </client-only>
    </template>
  </div>
</template>

<script>
import AdminCreate from '@/components/admin/AdminCreate'

import handlePostDataMixin from '../../../mixins/handlePostData'

export default {
  layout: 'admin',
  mixins: [handlePostDataMixin],
  components: {
    AdminCreate,
  },
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
  // methods: {
  //   handleEdLoaded() {
  //     this.isLoading = false
  //   },
  //   handlePostDataChange(e) {
  //     console.log('post data change', e)
  //     const { name, value } = e
  //     this.post = { ...this.post, [name]: value }
  //   },
  //   handleAddTag(tag) {
  //     this.post.tags.push(tag)
  //   },
  //   handleDeleteTag(tag) {
  //     this.tags = this.tags.filter((t) => t !== tag)
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.admin-create {
  position: relative;
  padding: 0;
}
</style>