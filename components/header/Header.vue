<template>
  <div class="header">
    <nav class="nav">
      <a href="#" class="nav-brand">Brand</a>
      <ul class="nav-list">
        <div class="nav-list-overlay"></div>
        <li v-for="item in nav" :key="item" class="nav-item">
          <a href="#">
            {{ item }}
          </a>
        </li>
      </ul>
      <div class="nav-responsive_logo" @click.capture="handleResponsiveClick">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: ['home', 'about', 'education', 'blog', 'contact'],
    }
  },
  methods: {
    handleResponsiveClick() {
      const logo = document.querySelector('.nav-responsive_logo')
      const navList = document.querySelector('.nav-list')
      const header = document.querySelector('.header')

      if (window.scrollY <= 50) {
        header.classList.add('header--scroll')
      }

      logo.classList.toggle('nav-responsive_logo--active')
      navList.classList.toggle('nav-list--active')
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: transparent;
  position: fixed;
  top: 0;
  transition: background-color 0.5s ease-in-out;
  transition-property: background-color;
  width: 100vw;
  z-index: 999;
}

.header--scroll {
  background-color: #fff;

  .nav {
    min-height: 8vh;
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
  min-height: 10vh;
  display: grid;
  grid-template-columns: 40% 58%;
  height: 100%;
  align-items: center;
  transition: all 0.5s linear;

  a {
    text-decoration: none;
    text-transform: capitalize;
    color: white;
    font-weight: 600;
  }

  @include extra_small_device {
    grid-template-columns: 40% 55.5%;
    min-height: 8vh;
    background-color: #fff;

    .nav-responsive_logo {
      div {
        background-color: black !important;
      }

      div:nth-of-type(1) {
        height: 1.9px;
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
    height: 2px;
    background-color: #fff;
    position: relative;
    border-radius: 1.8rem;
    transition: all 0.1s linear;
    align-self: flex-end;
  }

  div:nth-of-type(1) {
    border-radius: 1.8rem;
    width: 80%;
    height: 2px;
    background-color: #fff;
    display: block;
    transform: translateY(-6px);
    transition: all 0.1s linear;
  }

  div:nth-of-type(3) {
    border-radius: 1.8rem;
    width: 40%;
    height: 2px;
    background-color: #fff;
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
    transform: translateY(1.8px) rotate(135deg);
    width: 60%;
  }

  div:nth-of-type(3) {
    transform: translateY(-1px) rotate(-135deg);
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
  justify-content: space-between;
  margin-right: var(--nav-margin);
  font-size: 1.4rem;

  @include extra_small_device {
    position: absolute;
    transform: translateX(-100%) translateY(7.9vh);
    z-index: 1000;
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: calc(var(--nav-margin) + 2.4px);
    transition: all 0.2s linear;
    box-shadow: 5px 2.5px 1px rgba(0, 0, 0, 0.2);

    li {
      &:not(:first-child) {
        margin: 2rem 0;
      }
      a {
        color: black;
      }
    }
  }
}

.nav-list--active {
  transform: translateX(0) translateY(7.9vh);
}
</style>