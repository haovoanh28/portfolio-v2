<template>
  <div class="post">
    <div class="post-banner">
      <BlogBanner
        to="blog"
        toRoute="/blog"
        current="post"
        :title="post.title"
        :bgSrc="post.bannerImg"
        lighter
      />
    </div>
    <div class="post-main">
      <div class="post-brief">
        {{ post.brief }}
      </div>
    </div>
  </div>
</template>

<script>
import BlogBanner from '@/components/blog/BlogBanner'

export default {
  components: {
    BlogBanner,
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

<style lang="scss" scoped>
.post-main {
  font-size: 1.8rem;
  width: 80%;
  margin: 4.5rem auto;

  * {
    font-size: inherit;
  }
}
</style>