<template>
  <div class="blog section" id="blog">
    <BlogBanner />
    <BlogMain />
  </div>
</template>

<script>
import BlogBanner from '@/components/blog/BlogBanner'
import BlogMain from '@/components/blog/BlogMain'

import { mapState } from 'vuex'

export default {
  components: {
    BlogBanner,
    BlogMain,
  },
  computed: {
    ...mapState('post/get', ['isLoading']),
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
  updated() {
    console.log('updated hehe')
  },
}
</script>

<style lang="scss">
.footer {
  background-color: #fff !important;
}
</style>