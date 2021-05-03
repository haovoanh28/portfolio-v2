<template>
  <div class="container">
    <Banner />
    <About />
    <Education />
    <SmallBanner
      imgSrc="/images/hired-bg.jpg"
      content="I Am Available For Freelancer"
      btnContent="Hire Me!"
    />
    <Contact />
  </div>
</template>

<script>
import Banner from '@/components/home/Banner'
import About from '@/components/home/About'
import Education from '@/components/home/Education'
import SmallBanner from '@/components/home/SmallBanner'
import Contact from '@/components/home/Contact'
export default {
  components: {
    About: About,
    Education: Education,
    Banner: Banner,
    SmallBanner: SmallBanner,
    Contact: Contact,
  },
  mounted() {
    if (process.browser) {
      const sections = document.querySelectorAll('.section')
      const navLinks = document.querySelectorAll('.nav .nav-item a')

      const intersectionOptions = {
        threshold: 0.3,
      }

      const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('id')
          if (entry.isIntersecting) {
            if (window.location.hash !== `#${sectionId}`) {
              window.history.pushState({}, window.title, `#${sectionId}`)
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
}
</style>
