<template>
  <div class="post-card">
    <div class="card-banner">
      <img :src="post.imgSrc" alt="card image" />
      <div
        class="banner-tag fw-700"
        :style="{ backgroundColor: post.tags[0].bgColor }"
      >
        {{ post.tags[0].text }}
      </div>
      <div class="banner-time">
        {{ post.createdAt }}
      </div>
    </div>
    <div class="card-hashtags">
      <span
        v-for="(hashtag, index) in post.hashtags"
        :key="`hashtag-${hashtag}-${index}`"
      >
        #{{ hashtag }}
      </span>
    </div>
    <div class="card-title fw-700">
      {{ post.title }}
    </div>
    <div class="card-brief">
      {{ post.brief }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.post-card {
  width: 100%;
  padding: 0.8rem;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;

  &:not(:last-of-type) {
    margin-bottom: 5rem;
  }

  & > div:not(:first-child) {
    margin-top: 1.3rem;
  }

  & > div:last-child {
    margin-bottom: 2.2rem;
  }
}

.card-banner {
  width: 100%;
  height: 35rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .banner-tag,
  .banner-time {
    position: absolute;
    text-transform: uppercase;
    color: #fff;
    padding: 0.5rem 1.2rem;
    font-size: 1.3rem;
    letter-spacing: 1.5px;
  }

  .banner-tag {
    top: 1.5rem;
    left: 0;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }

  .banner-time {
    bottom: 0;
    right: 0;
    background-color: black;
  }
}

.card-hashtags {
  span {
    color: blue;
    font-size: 1.4rem;
  }

  span:not(:first-child) {
    padding-left: 1rem;
  }
}

.card-title,
.card-brief {
}

.card-title {
  font-size: 2rem;
}

.card-brief {
}
</style>