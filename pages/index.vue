<template>
  <div class="container">
    <div class="section" id="home">
      <LazyHydrate when-idle>
        <Banner />
      </LazyHydrate>
    </div>
    <div class="section" id="about">
      <LazyHydrate when-visible>
        <About />
      </LazyHydrate>
    </div>
    <div class="section" id="education">
      <LazyHydrate when-visible>
        <Education />
      </LazyHydrate>
    </div>
    <div class="section" id="contact">
      <LazyHydrate when-visible>
        <Contact />
      </LazyHydrate>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    About: () => import('@/components/home/About'),
    Education: () => import('@/components/home/Education'),
    Banner: () => import('@/components/home/Banner'),
    SmallBanner: () => import('@/components/home/SmallBanner'),
    Contact: () => import('@/components/home/Contact'),
    LazyHydrate,
  },
  mounted() {
    if (process.browser) {
      const sections = document.querySelectorAll('.section')
      const navLinks = document.querySelectorAll('.nav .nav-item a')
      const intersectionOptions = {
        threshold: 0.15,
        // rootMargin: '100px',
      }
      const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('id')
          if (entry.isIntersecting) {
            const hashSectionId = `#${sectionId}`
            if (window.location.hash !== hashSectionId) {
              window.history.pushState({}, {}, `/${hashSectionId}`)
              // parent.location.hash = sectionId`#${sectionId}`
            }
            navLinks.forEach((navLink) => {
              navLink.classList.remove('nuxt-link-exact-active')
              if (navLink['href'].includes(sectionId)) {
                navLink.classList.add('nuxt-link-exact-active')
              }
            })
          }
        })
      }

      const intersectionObserver = new IntersectionObserver(
        intersectionCallback,
        intersectionOptions
      )

      sections.forEach((section) => {
        intersectionObserver.observe(section)
      })
    }
  },
}
</script>

<style lang="scss">
#home {
  min-height: 100vh;
}

#about {
  min-height: 90rem;

  @include medium_device {
    min-height: 120rem;
  }

  @include extra_small_device {
    min-height: 135rem;
  }
}

#education {
  min-height: 94rem;
  @include large_device {
    min-height: 105rem;
  }
  @include medium_device {
    min-height: 107rem;
  }

  @include extra_small_device {
    min-height: 104rem;
  }
}

#contact {
  min-height: 30rem;

  @include medium_device {
    min-height: 50rem;
  }
}

.home-decor {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;

  span {
    position: relative;
  }

  span::before {
    content: '';
    width: 30px;
    height: 1px;
    background-color: #d0d0d0;
    position: absolute;
    top: 50%;
    transform: translate(-150%, 40%);
  }

  span::after {
    content: '';
    width: 30px;
    height: 1px;
    background-color: #d0d0d0;
    position: absolute;
    top: 50%;
    transform: translate(50%, 40%);
  }

  @include extra_small_device {
    span::before {
      transform: translate(-150%, -100%);
    }
    span::after {
      transform: translate(50%, -100%);
    }
  }
}
</style>
