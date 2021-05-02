<template>
  <div class="body">
    <keep-alive>
      <Header />
    </keep-alive>
    <Nuxt keep-alive />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.browser) {
      const header = document.querySelector('.header')
      window.addEventListener('scroll', (e) => {
        if (window.scrollY > 50) {
          header.classList.add('header--scroll')
        } else {
          header.classList.remove('header--scroll')
        }
      })
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap');
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
}

*::selection {
  background: rgba(166, 175, 189, 0.3);
}
</style>
