<template>
  <div class="blog-main bg-light">
    <div class="blog-wrapper">
      <div class="blog-posts">
        <PostCardItem v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <BlogSidebar />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import PostCardItem from '@/components/post/PostCardItem'
import BlogSidebar from '@/components/blog/BlogSidebar'

export default {
  components: {
    PostCardItem,
    BlogSidebar,
  },
  computed: {
    ...mapState('post/get', ['posts']),
  },
}
</script>

<style lang="scss" scoped>
.blog-main {
  display: grid;
  place-items: center;
}

.blog-wrapper {
  width: 100%;
  padding: 8% 5%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 4rem;

  @include medium_device {
    grid-template-columns: 1fr;
    grid-row-gap: 4rem;
  }
}

.blog-posts,
.blog-sidebar {
}

.blog-posts {
  border-radius: 8px;
  min-height: 50rem;
}
</style>