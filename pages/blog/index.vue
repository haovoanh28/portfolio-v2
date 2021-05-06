<template>
  <div class="blog section" id="blog">
    <BlogBanner />
    <BlogMain
      :isLoading="isLoading"
      :posts="posts"
      :pending="$fetchState.pending"
    />
  </div>
</template>

<script>
import BlogBanner from '@/components/blog/BlogBanner'
import BlogMain from '@/components/blog/BlogMain'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    BlogBanner,
    BlogMain,
  },
  computed: {
    ...mapState('post/get', ['isLoading', 'posts']),
  },
  methods: {
    ...mapActions('post/get', ['getAllPostAsync']),
  },
  watchQuery(newQuey, oldQuery) {
    if (process.browser) {
      const navLinks = document.querySelectorAll('.nav .nav-item a')

      navLinks.forEach((navLink) => {
        navLink.classList.remove('nuxt-link-exact-active')

        if (navLink['href'].includes('blog')) {
          navLink.classList.add('nuxt-link-exact-active')
        }
      })
    }
  },
  updated() {},
  async fetch() {
    await this.getAllPostAsync()
  },
}
</script>

<style lang="scss">
.footer {
  background-color: #fff !important;
}
</style>