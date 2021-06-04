<template>
  <div class="header">
    <nav class="nav">
      <nuxt-link
        to="/#home"
        v-scroll-to="{ el: `#home}`, duration: 100 }"
        class="nav-brand fw-700 link"
        >HaoV</nuxt-link
      >
      <ul class="nav-list" @click="handleNavListClick">
        <!-- <li class="nav-item nav-item--active">
          <nuxt-link to="/#home">Home</nuxt-link>
        </li> -->
        <li v-for="item in nav" :key="item" class="nav-item">
          <nuxt-link
            :to="{ path: '/', hash: `#${item}` }"
            v-scroll-to="{ el: `#${item}`, duration: 100 }"
            exact=""
            class="fw-700 link"
          >
            {{ item }}
          </nuxt-link>
        </li>
        <li class="nav-item" @click="handleToBlogClick">
          <nuxt-link class="fw-700 link" to="/blog">Blog</nuxt-link>
        </li>
      </ul>
      <div class="nav-responsive_logo" @click="handleResponsiveClick">
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: ['home', 'about', 'education', 'contact'],
    }
  },
  methods: {
    toggleLogo() {
      const logo = document.querySelector('.nav-responsive_logo')

      if (window.getComputedStyle(logo).display === 'none') {
        return
      }

      logo.classList.toggle('nav-responsive_logo--active')
    },
    handleResponsiveClick(e) {
      const navList = document.querySelector('.nav-list')
      const header = document.querySelector('.header')

      if (window.scrollY <= 50) {
        header.classList.add('header--scroll')
      }

      this.toggleLogo()
      navList.classList.toggle('nav-list--active')
    },
    handleNavListClick(e) {
      const navList = document.querySelector('.nav-list')
      if (navList.classList.contains('nav-list--active')) {
        navList.classList.remove('nav-list--active')
      }
      this.toggleLogo()
    },
    handleToBlogClick() {
      if (process.browser) {
        const navLinks = document.querySelectorAll('.nav .nav-item a')

        navLinks.forEach((navLink) => {
          navLink.classList.remove('nav-item--active')

          if (navLink['href'].includes('blog')) {
            navLink.classList.add('nav-item--active')
          }
        })
      }
    },
  },
  computed: {
    isMobile() {},
  },
  mounted() {
    if (process.browser && window.innerWidth > 600) {
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
.header {
  position: fixed;
  top: 0;
  background-color: transparent;
  transition: background-color 0.5s ease-in-out;
  transition-property: background-color;
  width: 100vw;
  z-index: 999;
  border-bottom: 1px solid transparent;

  @include extra_small_device {
    position: sticky;
  }
}

.header--scroll {
  background-color: #fff;
  border-bottom: 1px solid var(--color-gray);

  .nav {
    min-height: 55px;

    /* .nav-item .nuxt-link-active, */
    .nav-item .nuxt-link-exact-active {
      &::after {
        background-color: black;
      }
    }
  }

  .nav-responsive_logo {
    div {
      background-color: black !important;
    }

    div:nth-of-type(1) {
      height: 1.9px;
    }
  }

  & a {
    color: black !important;
  }
}

.nav {
  --nav-margin: 2rem;
  min-height: 60px;
  display: grid;
  grid-template-columns: 40% 58%;
  align-items: center;
  transition: all 0.35s linear;

  a {
    text-transform: capitalize;
    color: white;
  }

  @include extra_small_device {
    grid-template-columns: 40% 55.5%;
    min-height: 55px;
    background-color: #fff;
    .nav-responsive_logo {
      div {
        background-color: black !important;
      }

      div:nth-of-type(1) {
        height: 1px;
      }
    }

    a {
      color: black !important;
    }
  }
}

.nav-responsive_logo {
  position: relative;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  justify-self: flex-end;
  display: none;
  z-index: 10;
  z-index: 2000;

  div:nth-of-type(2) {
    width: 50%;
    height: 1px;
    position: relative;
    border-radius: 1.8rem;
    transition: all 0.1s linear;
    align-self: flex-end;
  }

  div:nth-of-type(1) {
    border-radius: 1.8rem;
    width: 80%;
    height: 1px;
    display: block;
    transform: translateY(-6px);
    transition: all 0.1s linear;
  }

  div:nth-of-type(3) {
    border-radius: 1.8rem;
    width: 40%;
    height: 1px;
    display: block;
    transform: translateY(6px);
    transition: all 0.1s linear;
  }

  &:hover {
    div:nth-of-type(2) {
      width: 60%;
    }

    div:nth-of-type(1) {
      width: 60%;
    }

    div:nth-of-type(3) {
      width: 60%;
    }
  }

  @include extra_small_device {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    div {
      display: block;
    }
  }
}

.nav-responsive_logo--active {
  div:nth-of-type(2) {
    display: none;
  }

  div:nth-of-type(1) {
    transform: translateY(0.2px) rotate(135deg);
    width: 60%;
  }

  div:nth-of-type(3) {
    transform: translateY(-0.4px) rotate(-135deg);
    width: 60%;
  }
}

.nav-brand {
  margin-left: var(--nav-margin);
  font-size: 3rem;
}

.nav-list {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  margin-right: var(--nav-margin);
  font-size: 1.4rem;

  @include extra_small_device {
    position: absolute;
    transform: translateX(-120%) translateY(5.5rem);
    z-index: 1000;
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: calc(var(--nav-margin) + 2.4px);
    transition: all 0.2s linear;
    box-shadow: 5px 2.5px 1px rgba(0, 0, 0, 0.2);

    li {
      & {
        margin: 2rem 0;
      }
      a {
        color: black;
      }
    }
  }
}

.nav-item {
  position: relative;

  a {
    font-size: 1.5rem;

    &::after {
      content: '';
      padding: 4px 4px;
      width: 1px;
      height: 5px;
      background-color: #fff;
      -webkit-border-radius: 5rem;
      -moz-border-radius: 5rem;
      border-radius: 5rem;
      position: absolute;
      bottom: -20%;
      left: 50%;
      transform: translate(-50%, 50%) scale(0.5, 0.5);
      opacity: 0;
      transition: all 0.3s;
    }
  }

  @include extra_small_device {
    a {
      &::after {
        bottom: 0;
        left: 12rem;
        top: 0.7rem;
        transform: scale(0.5, 0.5);
      }
    }
  }
}

.nav-list--active {
  transform: translateX(0) translateY(5.5rem);
}

.nav-item--active,

/* .nav-item .nuxt-link-active,  */
.nav-item .nuxt-link-exact-active {
  &::after {
    opacity: 1;
  }

  @include extra_small_device {
    &::after {
      background-color: black;
    }
  }
}
</style>