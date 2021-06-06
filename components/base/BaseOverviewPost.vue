<template>
  <div class="post">
    <div class="post-img">
      <img :src="post.bannerImg" :alt="post.title" loading="lazy" />
    </div>
    <div class="post-short">
      <p class="post-title fw-700">
        {{ post.title }}
      </p>
      <p class="post-createdAt text-muted">
        <client-only>
          <TimeAgo :datetime="post.createdAt" long></TimeAgo>
        </client-only>
      </p>
    </div>
    <div class="type"></div>
    <div class="button-group flex-center" v-if="isAdmin">
      <BaseButton
        blueBtn
        small
        noBorder
        isIcon
        :disabled="isDeleting"
        @click="handleEditPost"
      >
        <v-icon name="regular/edit" />
      </BaseButton>
      <BaseButton
        errorBtn
        small
        noBorder
        isIcon
        :isLoading="isDeleting"
        :disabled="isDeleting"
        @click="handleDeletePost"
      >
        <v-icon name="regular/trash-alt" />
      </BaseButton>
    </div>
  </div>
</template>

<script>
import TimeAgo from 'vue2-timeago'

export default {
  components: {
    TimeAgo,
  },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
    isAdmin: {
      type: Boolean,
      default: () => false,
    },
    isDeleting: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    handleEditPost() {
      this.$emit('edit-post', { id: this.post._id })
    },
    handleDeletePost() {
      this.$emit('delete-post', { id: this.post._id })
    },
  },
}
</script>

<style lang="scss" scoped>
.post {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 2rem;
  grid-row-gap: 1.2rem;
  padding-bottom: 2rem;

  &-img {
    width: 100%;
    max-width: 25rem;
    height: 15rem;
    overflow: hidden;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    justify-self: center;
  }

  &-createdAt {
    font-size: 1.3rem;
    margin-top: 2rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(238, 238, 238, 0.7);
    margin-bottom: 3.3rem;
  }
}

@include medium_device {
  .post {
    &-img {
      height: 20rem;
    }
  }
}

.button-group {
  justify-self: flex-end;
  gap: 1rem;
}
</style>