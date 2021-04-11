<template>
  <div class="blog-main bg-light">
    <div class="blog-wrapper">
      <div class="blog-posts">
        <PostCardItem />
      </div>
      <div class="blog-sidebar">X</div>
    </div>
  </div>
</template>

<script>
import PostCardItem from '@/components/post/PostCardItem'

export default {
  components: {
    PostCardItem,
  },
}
</script>

<style lang="scss" scoped>
.blog-main {
  min-height: 200vh;
  display: grid;
  place-items: center;
}

.blog-wrapper {
  width: 90%;
  min-height: 82%;
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

.blog-sidebar {
  background-color: #fff;
  align-self: flex-start;
}
</style>