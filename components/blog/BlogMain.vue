<template>
  <div class="blog-main bg-light">
    <div class="blog-wrapper">
      <template v-if="isLoading || $fetchState.pending">
        <BaseSpinner fullSreen />
      </template>
      <div class="bl og-posts" v-else>
        <PostCardItem v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <BlogSidebar />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import PostCardItem from '@/components/post/PostCardItem'
import BlogSidebar from '@/components/blog/BlogSidebar'

export default {
  components: {
    PostCardItem,
    BlogSidebar,
  },
  computed: {
    ...mapState('post/get', ['posts', 'isLoading']),
  },
  methods: {
    ...mapActions('post/get', ['getAllPostAsync']),
  },
  async fetch() {
    await this.getAllPostAsync()
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