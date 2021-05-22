<template>
  <div class="blog section" id="blog">
    <LazyHydration when-visible>
      <BlogBanner
        to="home"
        toRoute="/"
        current="blog"
        title="Knowledge is power"
        bgSrc="/images/blog-banner-background.jpg"
      />
    </LazyHydration>
    <LazyHydration when-visible>
      <BlogMain
        :isLoading="isLoading"
        :posts="posts"
        :pending="$fetchState.pending"
      />
    </LazyHydration>
  </div>
</template>

<script>
import LazyHydration from 'vue-lazy-hydration'

import { mapState, mapActions } from 'vuex'

export default {
  key(route) {
    return route.fullPath
  },
  components: {
    BlogBanner: () => import('@/components/blog/BlogBanner'),
    BlogMain: () => import('@/components/blog/BlogMain'),
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
  mounted() {
    this.$toast.fire({
      position: 'top-left',
      title: '<h3>&#128570; Welcome to my blog &#128570; </h3>',
    })
  },
  async fetch() {
    await this.getAllPostAsync()
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #fff !important;
}
</style>