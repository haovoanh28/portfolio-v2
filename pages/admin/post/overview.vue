<template>
  <BaseSpinner fullScreen v-if="$fetchState.pending" />
  <div class="post-overview" v-else>
    <div class="overview-title">
      <h3 class="text-center text-title fw-700">POSTS OVERVIEW</h3>
    </div>
    <div class="overview-count">
      <h4>Total Posts: {{ postsCount }}</h4>
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
            :isDeleting="ids.includes(post._id)"
            @delete-post="handleDeletePost"
            @edit-post="handleEditPost"
            :key="`admin-overview-post-${post._id}`"
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
      ids: [],
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
      const choice = await this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
      })

      if (choice.isConfirmed) {
        this.ids.push(id)
        await this.deletePostAsync(id)
        const idxOfId = this.ids.indexOf(id);
        this.ids.splice(idxOfId, 1);
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
    &:not(:last-of-type) {
      margin-bottom: 2rem;
      border-bottom: 1px solid var(--color-gray);
    }
  }
}
</style>