<template>
  <div class="post-card">
    <div class="card-banner">
      <img :src="post.bannerImg" alt="card image" loading="lazy" />
      <div
        class="banner-type fw-700 text-center"
        :style="{
          backgroundColor: getBackgroundColorByType(post.type),
          boxShadow: `1px 1px 5px rgba(0,0,0, 0.4)`,
        }"
      >
        {{ post.type }}
      </div>
      <div class="banner-time">
        <client-only>
          <TimeAgo :datetime="post.createdAt" long></TimeAgo>
        </client-only>
        <!-- {{ post.createdAt }} -->
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
  methods: {
    getBackgroundColorByType(type) {
      const mapper = {
        technology: '#00cc00',
        share: '#ff9900',
        regular: '#0066ff',
        programming: '#cc0099',
      }

      return mapper[type] ?? '#b35900'
    },
  },
}
</script>

<style lang="scss">
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

  .banner-type,
  .banner-time {
    position: absolute;
    color: #fff !important;
    padding: 0.5rem 1.2rem;
    font-size: 1.3rem;
    letter-spacing: 1.5px;
  }

  .banner-type {
    top: 1.5rem;
    left: 0;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    min-width: 14rem;
    text-transform: uppercase;
  }

  .banner-time {
    bottom: 0;
    right: 0;
    background-color: black;

    span {
      text-transform: lowercase;
      color: #fff !important;
      font-size: inherit;
      font-family: inherit;
    }
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