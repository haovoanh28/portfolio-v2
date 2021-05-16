<template>
  <div class="container">
    <div class="section" id="home">
      <LazyHydrate when-idle>
        <Banner />
      </LazyHydrate>
    </div>
    <div class="section" id="about">
      <LazyHydrate :when-visible="{ rootMargin: '100px' }">
        <About />
      </LazyHydrate>
    </div>
    <div class="section" id="education">
      <LazyHydrate :when-visible="{ rootMargin: '100px' }">
        <Education />
      </LazyHydrate>
    </div>
    <LazyHydrate :when-visible="{ rootMargin: '100px' }">
      <SmallBanner
        imgSrc="/images/hired-bg.jpg"
        content="I Am Available For Freelancer"
        btnContent="Hire Me!"
      />
    </LazyHydrate>
    <div class="section" id="contact">
      <LazyHydrate :when-visible="{ rootMargin: '100px' }">
        <Contact />
      </LazyHydrate>
    </div>
    <!-- <Banner />
    <About />
    <Education />
    <SmallBanner
      imgSrc="/images/hired-bg.jpg"
      content="I Am Available For Freelancer"
      btnContent="Hire Me!"
    />
    <Contact /> -->
  </div>
</template>

<script>
// import About from '@/components/home/About'
// import Education from '@/components/home/Education'
// import Banner from '@/components/home/Banner'
// import SmallBanner from '@/components/home/SmallBanner'
// import Contact from '@/components/home/Contact'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    About: () => import('@/components/home/About'),
    Education: () => import('@/components/home/Education'),
    Banner: () => import('@/components/home/Banner'),
    SmallBanner: () => import('@/components/home/SmallBanner'),
    Contact: () => import('@/components/home/Contact'),
    // About,
    // Education,
    // Banner,
    // SmallBanner,
    // Contact,
    LazyHydrate,
  },
  mounted() {
    if (process.browser) {
      const hash = this.$route.hash
      console.log('hash', hash)

      const sections = document.querySelectorAll('.section')
      const navLinks = document.querySelectorAll('.nav .nav-item a')
      console.log('navLinks', navLinks)
      const intersectionOptions = {
        threshold: 0.25,
      }
      const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('id')
          console.log(sectionId)
          if (entry.isIntersecting) {
            const hashSectionId = `#${sectionId}`
            console.log('intersecting', hashSectionId)
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
.body {
  min-height: 200vh;
}

.container {
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
