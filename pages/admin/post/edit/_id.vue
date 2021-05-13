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
          @create="handleCreate"
          formTitle="Edit Post"
          action="edit"
        />
      </client-only>
    </template>
  </div>
</template>

<script>
import AdminCreate from '@/components/admin/AdminForm'

import handlePostDataMixin from '../../../../mixins/handlePostData'

import { mapActions, mapState } from 'vuex'

export default {
  layout: 'admin',
  mixins: [handlePostDataMixin],
  components: {
    AdminCreate,
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
    ...mapState('post/get', ['isLoading']),
  },
  methods: {
    ...mapActions('post/add', ['addPostAsync']),
    ...mapActions('post/get', ['getPostByIdAsync']),
    handleCreate() {
      console.log(this.post)
      this.addPostAsync({ ...this.post })
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