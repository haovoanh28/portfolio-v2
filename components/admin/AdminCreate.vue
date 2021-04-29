<template>
  <div class="post-create">
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
      <BaseInput label="Brief" placeholder="Type in post's brief" />
    </div>
    <div class="form-group create-select">
      <BaseSelect title="Select type for post" />
    </div>
    <div class="form-group create-tags">
      <BaseTagInput title="Tags for post" />
    </div>
    <div class="form-group create-editor">
      <AdminEditor title="Create" />
    </div>
  </div>
</template>

<script>
import AdminEditor from './AdminEditor'

export default {
  components: {
    AdminEditor,
  },
}
</script>

<style lang="scss" scoped>
.form-group:not(:last-of-type) {
  margin-bottom: 2rem;
}
</style>