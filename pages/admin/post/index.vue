<template>
  <BaseSpinner fullScreen v-if="$fetchState.pending" />
  <div class="post-overview" v-else>
    <div class="overview-title">
      <h2 class="text-center text-title fw-700">POSTS OVERVIEW</h2>
    </div>
    <div class="overview-count">
      <h2>Total Posts: {{ postsCount }}</h2>
    </div>
    <div class="overview-posts">
      <div
        class="overview-post"
        v-for="post in posts"
        :key="`admin-overview-post-${post._id}`"
      >
        <BaseOverviewPost :post="post" isAdmin />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  layout: 'admin',
  computed: {
    ...mapState('post/get', ['posts', 'postsCount']),
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
.post-overview {
  [class^='overview-']:not(:first-of-type) {
    margin: 2rem 0 2.5rem 0;
  }
}

.overview-posts {
  .overview-post {
    &:not(:first-of-type) {
    }

    &:not(:last-of-type) {
      margin-bottom: 2rem;
      border-bottom: 1px solid var(--color-gray);
    }
  }
}
</style>