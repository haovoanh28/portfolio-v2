<template>
  <div class="blog-banner" :style="bannerStyleObj">
    <div class="bg-overlay" :style="overlayStyleObj"></div>
    <div class="blog-banner__wrapper text-center">
      <p class="fw-700 text-capitalize banner-title">{{ title }}</p>
      <p>
        <nuxt-link :to="toRoute" class="text-muted text-upper">{{
          to
        }}</nuxt-link>
        <span class="text-upper">/ {{ current }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
    toRoute: {
      type: String,
      default: '',
    },
    current: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    bgSrc: {
      type: String,
      default: '',
    },
    lighter: {
      type: Boolean,
      default: () => false,
    },
    height: {
      type: String,
      default: '65',
    },
  },
  computed: {
    bannerStyleObj() {
      return {
        'background-image': `url(${this.bgSrc})`,
        'min-height': `${this.height}vh`,
      }
    },
    overlayStyleObj() {
      return {
        'background-color': this.lighter ? 'rgba(0, 0, 0, 0.6) !important' : '',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.blog-banner {
  position: relative;
  min-height: 65vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  place-items: center;
}

.blog-banner__wrapper {
  width: 100%;
  font-size: 3.5rem;
  z-index: 2;

  p {
    color: #fff;

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

.blog-banner__wrapper .banner-title {
  padding: 0 4%;

  @include extra_small_device {
    padding: 0;
  }
}
</style>