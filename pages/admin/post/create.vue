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
        @clear="handleClearPost"
      />
    </template>
  </div>
</template>

<script>
import AdminForm from '@/components/admin/AdminForm'

import { mapActions, mapState } from 'vuex'

import { onMounted, useContext } from '@nuxtjs/composition-api'
import useHandlePostData from '@/utils/use/useHandlePostData'

export default {
  layout: 'admin',
  components: {
    AdminForm,
  },
  setup() {
    const handlePostData = useHandlePostData()

    const context = useContext()

    onMounted(() => {
      context.$toast.fire({
        html:
          '<p>Keep it up!</p><br /><p>Happy writing &#128178; &#128178; &#128178; </p>',
        timerProgressBar: false,
      })
    })

    return { ...handlePostData }
  },
  computed: {
    ...mapState('post/add', ['isAdding']),
  },
  methods: {
    ...mapActions('post/add', ['addPostAsync']),
    handleCreate() {
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