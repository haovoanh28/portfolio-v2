<template>
  <div class="blog section" id="blog">
    <BlogBanner />
    <BlogMain />
  </div>
</template>

<script>
import BlogBanner from '@/components/blog/BlogBanner'
import BlogMain from '@/components/blog/BlogMain'

export default {
  components: {
    BlogBanner,
    BlogMain,
  },

  mounted() {
    if (process.browser) {
      const navItems = document.querySelectorAll('.nav .nav-item')

      navItems.forEach((navItem) => {
        navItem.classList.remove('nav-item--active')

        if (navItem.firstChild['href'].includes('blog')) {
          setTimeout(() => {
            navItem.classList.add('nav-item--active')
          }, 0)
        }
      })
    }
  },
}
</script>

<style lang="scss">
.footer {
  background-color: #fff !important;
}
</style>