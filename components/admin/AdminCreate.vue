<template>
  <div class="post-create">
    <div class="fw-700 text-center text-title create-header">
      <p>&#128293; Create New Post &#128293;</p>
    </div>
    <div class="form-group create-title">
      <BaseInput label="Title" placeholder="Type in post's title" />
    </div>
    <div class="form-group create-brief">
      <BaseInput
        label="Banner Image"
        placeholder="Paste in banner image link"
      />
    </div>
    <div class="form-group create-brief">
      <BaseInput label="Brief" placeholder="Type in post's brief" textarea />
    </div>
    <div class="form-group create-select">
      <BaseSelect title="Select type for post" />
    </div>
    <div class="form-group create-tags">
      <BaseTagInput
        title="Tags for post"
        placeholder="Type in tag for post"
        :tags="tags"
        @add-tag="handleAddTag"
        @delete-tag="handleDeleteTag"
      />
    </div>
    <div class="form-group create-editor">
      <AdminEditor title="Create" @ed-loaded="handleEdLoaded" />
    </div>
  </div>
</template>

<script>
import AdminEditor from './AdminEditor'

export default {
  components: {
    AdminEditor,
  },
  data() {
    return {
      tags: ['html', 'css', 'tes', 'sdqw', 'e232', 'ef32'],
    }
  },
  methods: {
    handleAddTag(tag) {
      if (this.tags.includes(tag)) {
        console.log('duplicate tag')
        return
      }
      this.tags.push(tag)
    },
    handleDeleteTag(tag) {
      this.tags = this.tags.filter((t) => t !== tag)
      console.log(this.tags)
    },
    handleEdLoaded() {
      this.$emit('ed-loaded')
    },
  },
}
</script>

<style lang="scss" scoped>
.create-header {
  text-transform: uppercase;
  margin-bottom: 2.4rem;
  font-size: 2rem;
}

.post-create {
}

.form-group:not(:last-of-type) {
  margin-bottom: 2rem;
}
</style>