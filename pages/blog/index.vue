<template>
  <div class="blog section" id="blog">
    <LazyHydration when-visible>
      <BlogBanner />
    </LazyHydration>
    <BlogMain
      :isLoading="isLoading"
      :posts="posts"
      :pending="$fetchState.pending"
    />
  </div>
</template>

<script>
import BlogMain from '@/components/blog/BlogMain'
import LazyHydration from 'vue-lazy-hydration'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    BlogBanner: () => import('@/components/blog/BlogBanner'),
    BlogMain,
    LazyHydration,
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