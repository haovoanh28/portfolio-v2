<template>
  <div class="post-create">
    <div class="fw-700 text-center text-title create-header">
      <p class="fw-700" v-if="action === 'create'">
        &#128293; &#128293; &#128293; {{ formTitle }} &#128293; &#128293;
        &#128293;
      </p>
      <p class="fw-700" v-else>
        &#10024; &#10024; &#10024; {{ formTitle }} &#10024; &#10024; &#10024;
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
        name="bannerImg"
        :value="bannerImg"
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
        :value="type"
      />
    </div>
    <div class="form-group create-tags">
      <BaseTagInput
        title="Tags for post"
        placeholder="Type in tag for post"
        :hashtags="hashtags"
        @add-tag="handleAddTag"
        @delete-tag="handleDeleteTag"
      />
    </div>
    <div class="form-group create-editor">
      <AdminEditor
        title="Create"
        :value="content"
        @ed-loaded="handleEdLoaded"
        @content-change="handleInput"
      />
    </div>
    <div class="form-group create-button">
      <BaseButton
        blueBtn
        noBorder
        isIcon
        :isLoading="isLoading"
        @click="handleAction"
      >
        <v-icon name="regular/save" />
      </BaseButton>
      <BaseButton errorBtn noBorder isIcon @click="handleClearPost">
        <v-icon name="regular/times-circle" />
      </BaseButton>
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
      isTouch: false,
    }
  },
  props: {
    _id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    bannerImg: {
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
    hashtags: {
      type: Array,
      default: () => [],
    },
    content: {
      type: String,
      default: '',
    },
    formTitle: {
      type: String,
      default: '',
    },
    action: {
      type: String,
      default: 'create',
    },
    isLoading: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    handleAddTag(tag) {
      if (this.hashtags.includes(tag)) {
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
    handleAction() {
      if (
        !this.title ||
        !this.bannerImg ||
        !this.brief ||
        !this.hashtags ||
        !this.type ||
        !this.content
      ) {
        this.$errorSwal('Please fill out the form')
        return
      }
      if (this.action === 'create') {
        this.$emit('create')
      }

      if (this.action === 'edit') {
        this.$emit('edit', { id: this._id })
      }
    },
    handleClearPost() {
      this.$emit('clear')
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

.create-button {
  display: flex;
  gap: 0.8rem;
}
</style>