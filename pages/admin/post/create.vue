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
          @create="handleCreate"
          action="create"
        />
      </client-only>
    </template>
  </div>
</template>

<script>
import AdminCreate from '@/components/admin/AdminCreate'

import handlePostDataMixin from '../../../mixins/handlePostData'

import { mapActions } from 'vuex'

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
        bannerImg: '',
        type: '',
        hashtags: [],
        content: '',
      },
    }
  },
  methods: {
    ...mapActions('post/add', ['addPostAsync']),
    handleCreate() {
      console.log(this.post)
      this.addPostAsync({...this.post})
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