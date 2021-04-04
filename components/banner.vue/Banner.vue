<template>
  <section class="banner-wrapper">
    <div class="bg-overlay">
      <vue-particles
        color="#fff"
        :particlesNumber="150"
        shapeType="circle"
        :particleSize="5"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="bubble"
      >
      </vue-particles>
    </div>
    <div class="banner">
      <p class="banner-welcome">Hello & Welcome</p>
      <p class="banner-introduce">
        i am <span class="introduce-key"></span>
        <span class="blink">|</span>
      </p>
      <div class="banner-icons">
        <v-icon name="brands/facebook-f"></v-icon>
        <v-icon name="brands/git"></v-icon>
        <v-icon name="brands/google-plus-g"></v-icon>
        <v-icon name="brands/twitter"></v-icon>
      </div>
      <div class="banner-button">
        <BaseButton transparent border-radius>Download CV</BaseButton>
      </div>
      <div class="banner-scoll_down">
        <a href="#about"></a>
      </div>
    </div>
  </section>
</template>

<script>
import typeWriter from '~/assets/js/typeWriter'

export default {
  mounted() {
    if (process.browser) {
      const span = document.querySelector('.introduce-key')
      typeWriter(span)
    }
  },
}
</script>

<style lang="scss" scoped>
.banner-wrapper {
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
  position: relative;

  background-image: url('~/assets/images/banner-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  #particles-js {
    height: 100%;
  }
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.banner {
  z-index: 2; /**higher than bg-overlay */
  color: #fff;
  height: 50%;
  width: 100%;
  text-align: center;
}

.banner-welcome {
  font-size: 2.6rem;
  letter-spacing: 1px;
}

.banner-introduce {
  margin-top: 1.5rem;
  text-transform: capitalize;
  font-size: 7rem;
  font-weight: 300;

  span {
    font-size: inherit;
    font-weight: 500;
  }

  .blink {
    animation: blink 0.5s infinite;
    font-weight: 300;
    font-size: 6rem;
    display: inline-block;
    transform: translateY(-7px);
  }
}

.banner-icons {
  width: 20%;
  margin: 2.5rem auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.banner-button {
  margin-top: 3rem;
}

.banner-scoll_down {
  margin-top: 6rem;

  a {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    height: 50px;
    width: 30px;
    line-height: 60px;
    border: 2px solid #fff;
    border-radius: 15px;

    animation: bounce 2s infinite;
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

    &::before {
      content: '';
      width: 8.5px;
      height: 1px;
      background-color: #fff;
      position: absolute;
      top: 30px;
      left: 5px;
      transform: rotate(30deg);
    }

    &::after {
      content: '';
      width: 8.5px;
      height: 1px;
      background-color: #fff;
      position: absolute;
      top: 30px;
      right: 5px;
      transform: rotate(-30deg);
    }
  }
}

@keyframes blink {
  to {
    opacity: 0;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-35px);
  }
  20% {
    transform: translateY(-30px);
  }
  23% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(0);
  }
  45% {
    transform: translateY(-15px);
  }
  55% {
    transform: translateY(-15px);
  }
  58% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
</style>