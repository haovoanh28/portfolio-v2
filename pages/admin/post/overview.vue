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
      <transition-group name="list" tag="div">
        <div
          class="overview-post"
          v-for="post in posts"
          :key="`admin-overview-post-${post._id}`"
        >
          <BaseOverviewPost
            :post="post"
            isAdmin
            :isDeleting="isDeleting && post._id === id"
            @delete-post="handleDeletePost"
            @edit-post="handleEditPost"
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  layout: 'admin',
  data() {
    return {
      id: '',
    }
  },
  computed: {
    ...mapState('post/get', ['posts']),
    ...mapState('post/delete', ['isDeleting']),
    ...mapGetters('post/get', ['postsCount']),
  },
  methods: {
    ...mapActions('post/get', ['getAllPostAsync']),
    ...mapActions('post/delete', ['deletePostAsync']),
    async handleDeletePost({ id }) {
      console.log('delete', id)
      const choice = await this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
      })

      if (choice.isConfirmed) {
        this.id = id
        await this.deletePostAsync(id)
      }
    },
    handleEditPost({ id }) {
      console.log('edit', id)
      this.$router.push({ path: `/admin/post/edit/${id}` })
    },
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