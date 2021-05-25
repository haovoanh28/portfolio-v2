<template>
  <div class="post">
    <div class="post-banner">
      <BlogBanner
        to="blog"
        toRoute="/blog"
        current="post"
        :title="post.title"
        :bgSrc="post.bannerImg"
        :lighter="true"
        height="80"
      />
    </div>
    <div class="post-main">
      <div class="post-brief">
        {{ post.brief }}
      </div>
      <div class="post-content" v-html="post.content" />
      <div class="post-author">
        <p>
          <span>By</span>
          <span class="fw-700">{{ post.author || 'Vo Anh Hao' }}</span>
        </p>
        <client-only>
          <p class="time-ago">
            <TimeAgo :datetime="post.createdAt" long />
          </p>
        </client-only>
      </div>
      <div class="post-hashtags">
        <BaseTag
          v-for="tag in post.hashtags"
          :key="`hashtag-${post._id}-${tag}`"
          :tag="tag"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BlogBanner from '@/components/blog/BlogBanner'
import TimeAgo from 'vue2-timeago'

export default {
  key(route) {
    return route.fullPath
  },
  components: {
    BlogBanner,
    TimeAgo,
  },
  data() {
    return {
      post: {},
    }
  },
  async asyncData({ params, $api }) {
    const { id } = params

    const response = await $api.$get(`/posts/${id}`)

    return {
      post: { ...response.data },
    }
  },
}
</script>

<style lang="scss">
.post-main {
  font-size: 1.8rem;
  width: 80%;
  margin: 4.5rem auto;

  * {
    font-size: inherit;
  }

  [class^='post']:not(:first-of-type) {
    margin-top: 3rem;
  }

  @include extra_large_device {
    font-size: 2rem;
  }

  @include medium_device {
    width: 90%;
  }

  @include extra_small_device {
    width: 95%;
  }
}

.post-content {
  ul,
  ol {
    margin: 0 50px !important;
  }

  img {
    max-width: 90rem;
    max-height: 50rem;
    display: block;
    margin: 0 auto;
  }
}

.post-author {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time-ago {
  font-size: 1.6rem;
}
</style>