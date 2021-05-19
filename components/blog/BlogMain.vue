<template>
  <div class="blog-main bg-light">
    <div class="blog-wrapper">
      <div class="content-placeholder" v-if="isLoading || pending">
        <content-placeholders
          :rounded="true"
          v-for="index in 6"
          :key="`placeholder-${index}`"
        >
          <content-placeholders-img />
          <content-placeholders-heading />
          <content-placeholders-heading />
          <content-placeholders-heading />
        </content-placeholders>
      </div>
      <div class="blog-posts" v-else>
        <PostCardItem v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <BlogSidebar :isLoading="isLoading" :posts="posts" :pending="pending" />
    </div>
  </div>
</template>

<script>
import PostCardItem from '@/components/post/PostCardItem'
import BlogSidebar from '@/components/blog/BlogSidebar'
import LazyHydration from 'vue-lazy-hydration'

//: () => import('@/components/post/PostCardItem')

export default {
  components: {
    PostCardItem,
    BlogSidebar,
    LazyHydration,
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    pending: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      default: () => [],
    },
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

  @include extra_large_device {
    padding: 8% 20%;
  }

  @include medium_device {
    grid-template-columns: 1fr;
    grid-row-gap: 4rem;
  }

  @include extra_small_device {
    padding: 8% 4%;
  }
}

.blog-posts {
  border-radius: 8px;
  min-height: 50rem;
}

.vue-content-placeholders:not(:last-of-type) {
  margin-bottom: 4.5rem;
}

.vue-content-placeholders-img {
  height: 30rem;
}
</style>