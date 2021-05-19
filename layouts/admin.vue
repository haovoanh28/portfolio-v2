<template>
  <div class="admin">
    <AdminHeader />
    <div class="admin-main">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import AdminHeader from '@/components/admin/AdminHeader'

export default {
  components: {
    AdminHeader,
  },
}
</script>

<style lang="scss">
/* @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap'); */
:root {
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  --section-margin: 5.8rem;
  --title-font-size: 3.5rem;
  --title-color: #212529;

  --color-muted: #6c757d;
  --color-gray: #e7e7e7;
  --color-light: #f8f9fa;

  --menu-width: 25rem;

  @include medium_device {
    & {
      --title-font-size: 3rem;
    }
  }

  @include extra_small_device {
    & {
      --title-font-size: 2.5rem;
    }
  }
}
html {
  font-family: Nunito, var(--font-family-sans-serif);
  font-size: 10px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-weight: 500;

  @include extra_small_device {
    font-size: 8.5px;
  }
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: 500;
}

*::selection {
  background: rgba(166, 175, 189, 0.3);
}

.admin {
  display: grid;
  grid-template-columns: 1fr;

  @include medium_device {
  }
}

.admin-main {
  grid-column: 1 / -1;
  margin-left: var(--menu-width);
  padding: 2rem;

  @include medium_device {
    margin-left: 0;
  }

  @include extra_large_device {
    padding: 2rem 10%;
  }
}

.tox .tox-dialog-wrap {
  left: 25rem !important;

  @include medium_device {
    left: 0 !important;
  }
}

.nuxt-link-active,
.nuxt-link-exact-active {
  /* color: red !important; */
  background-color: #fff !important;
  color: black !important;
}
</style>