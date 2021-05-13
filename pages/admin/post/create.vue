<template>
  <div class="admin-create">
    <template v-if="localLoading">
      <BaseSpinner fullScreen />
    </template>
    <template v-show="!localLoading">
      <AdminForm
        v-bind="post"
        @ed-loaded="handleEdLoaded"
        @post-data-change="handlePostDataChange"
        @add-tag="handleAddTag"
        @delete-tag="handleDeleteTag"
        @create="handleCreate"
        formTitle="Create New Post"
        :isLoading="isAdding"
      />
    </template>
  </div>
</template>

<script>
import AdminForm from '@/components/admin/AdminForm'

import handlePostDataMixin from '../../../mixins/handlePostData'

import { mapActions, mapState } from 'vuex'

export default {
  layout: 'admin',
  mixins: [handlePostDataMixin],
  components: {
    AdminForm,
  },
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
  computed: {
    ...mapState('post/add', ['isAdding']),
  },
  methods: {
    ...mapActions('post/add', ['addPostAsync']),
    handleCreate() {
      console.log(this.post)
      this.addPostAsync({ ...this.post })
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