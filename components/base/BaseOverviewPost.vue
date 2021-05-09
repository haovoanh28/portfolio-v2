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
    <div class="button-group">
      <BaseButton blueBtn small>
        <span>Edit</span>
      </BaseButton>
      <BaseButton errorBtn small>
        <span>Delete</span>
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
    height: 15rem;
    overflow: hidden;
  }

  &-short {
    /* display: flex;
      flex-direction: column;
      justify-content: space-between; */
  }

  &-createdAt {
    font-size: 1.3rem;
    margin-top: 2rem;
  }

  img {
    border-radius: 1rem;
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
</style>