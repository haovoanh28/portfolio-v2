<template>
  <section class="banner-wrapper section" id="home">
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
        <a
          href="https://www.facebook.com/profile.php?id=100020713613057"
          target="_blank"
        >
          <v-icon name="brands/facebook-f"></v-icon
        ></a>
        <a href="https://github.com/haovoanh28" target="_blank"
          ><v-icon name="brands/github"></v-icon
        ></a>
        <a
          href="https://www.facebook.com/profile.php?id=100020713613057"
          target="_blank"
          ><v-icon name="brands/google-plus-g"></v-icon
        ></a>
        <a href="https://www.linkedin.com/in/hao-vo-14267020b/" target="_blank"
          ><v-icon name="brands/linkedin-in"></v-icon
        ></a>
      </div>
      <div class="banner-button">
        <BaseButton transparent border-radius>
          <a href="https://i.topcv.vn/voanhhao?ref=3336088" target="_blank"
            >Download CV</a
          >
        </BaseButton>
      </div>
      <div class="banner-scoll_down">
        <nuxt-link to="/#about"></nuxt-link>
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

.banner {
  z-index: 2; /**higher than bg-overlay */
  color: #fff;
  width: 100%;
  text-align: center;
  padding-bottom: 5rem;
}

.banner-welcome {
  font-size: 2.6rem;
  letter-spacing: 1px;
}

.banner-introduce {
  margin-top: 1rem;
  text-transform: capitalize;
  font-size: 7rem;
  font-weight: 300;

  span {
    font-size: inherit;
    font-weight: 700;
  }

  .blink {
    animation: blink 0.5s infinite;
    font-weight: 300;
    font-size: 6rem;
    display: inline-block;
    transform: translateY(-7px);
  }

  @include medium_device {
    font-size: 5.5rem;
  }

  @include extra_small_device {
    font-size: 5rem;
    margin-top: 2rem;
  }
}

.banner-icons {
  width: 20%;
  margin: 1.5rem auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  svg {
    cursor: pointer;
  }

  @include extra_small_device {
    width: 30%;
    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
    margin: 3.3rem auto 0 auto;
  }
}

.banner-button {
  margin-top: 3.5rem;

  @include extra_small_device {
    margin-top: 4.5rem;
  }
}

.banner-scoll_down {
  position: absolute;
  bottom: 1.2rem;
  left: 50%;
  transform: translatex(-50%);

  a {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    height: 52px;
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

  @include extra_small_device {
    height: 52px;
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