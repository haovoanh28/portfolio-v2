<template>
  <div class="post-create">
    <div class="fw-700 text-center text-title create-header">
      <p>
        &#128293; &#128293; &#128293; Create New Post &#128293; &#128293;
        &#128293;
      </p>
    </div>
    <div class="form-group create-title">
      <BaseInput
        label="Title"
        placeholder="Type in post's title"
        name="title"
        :value="title"
        @input="handleInput"
      />
    </div>
    <div class="form-group create-bannerImage">
      <BaseInput
        label="Banner Image"
        placeholder="Paste in banner image link"
        name="bannerImage"
        :value="bannerImage"
        @input="handleInput"
      />
    </div>
    <div class="form-group create-brief">
      <BaseInput
        label="Brief"
        placeholder="Type in post's brief"
        textarea
        name="brief"
        :value="brief"
        @input="handleInput"
      />
    </div>
    <div class="form-group create-select">
      <BaseSelect
        title="Select type for post"
        name="type"
        @input="handleInput"
      />
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
      <AdminEditor
        title="Create"
        @ed-loaded="handleEdLoaded"
        @content-change="handleInput"
      />
    </div>
    <div class="form-group create-button">
      <BaseButton successBtn> CREATE </BaseButton>
      <BaseButton errorBtn> CLEAR </BaseButton>
    </div>
  </div>
</template>

<script>
import AdminEditor from './AdminEditor'

export default {
  components: {
    AdminEditor,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    bannerImage: {
      type: String,
      default: '',
    },
    brief: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleAddTag(tag) {
      if (this.tags.includes(tag)) {
        return
      }
      this.$emit('add-tag', tag)
    },
    handleDeleteTag(tag) {
      this.$emit('delete-tag', tag)
    },
    handleEdLoaded() {
      this.$emit('ed-loaded')
    },
    handleInput(e) {
      // console.log(e)
      this.$emit(`post-data-change`, e)
    },
    handleContentChange(e) {
      this.$emit('content-change', e)
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