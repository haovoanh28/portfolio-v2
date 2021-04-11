<template>
  <div class="blog-banner">
    <div class="bg-overlay"></div>
    <div class="blog-banner__title">
      <p class="fw-700">Knowledge Is Power</p>
      <p>
        <nuxt-link to="/" class="text-muted">HOME</nuxt-link>
        <span>/ BLOG</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.blog-banner {
  position: relative;
  min-height: 65vh;
  background-image: url('~/assets/images/blog-banner-background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: grid;
  place-items: center;
}

.blog-banner__title {
  font-size: 3.5rem;
  z-index: 2;

  p {
    color: #fff;
    text-align: center;

    a {
      text-decoration: none;
    }

    &:nth-of-type(1) {
      font-size: inherit;
      letter-spacing: 2px;
    }

    &:nth-of-type(2) {
      font-size: 1.4rem;
      margin: 1.6rem auto 0 auto;
      span,
      a {
        font-size: inherit;
      }
    }
  }
}
</style>