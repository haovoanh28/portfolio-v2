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
