<template>
  <div class="small-banner text-center" :style="backgroundImage">
    <div class="bg-overlay"></div>
    <div>
      <p>{{ content }}</p>
      <BaseButton transparent>
        {{ btnContent }}
      </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
    },
    content: {
      type: String,
    },
    btnContent: {
      type: String,
    },
  },
  computed: {
    backgroundImage() {
      return {
        backgroundImage: `url(${this.imgSrc})`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.small-banner {
  width: 100%;
  min-height: 25rem;
  position: relative;
  z-index: 2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  place-items: center;

  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 55%;
  }

  p {
    color: #fff;
    font-size: 3.2rem;
    letter-spacing: 2.5px;
    z-index: 2;
  }

  button {
    z-index: 2;
  }

  @include medium_device {
    button {
      margin-top: 3rem;
    }
  }

  @include extra_small_device {
    div:nth-of-type(2) {
      height: 70%;
    }

    button {
      margin-top: 0;
    }
  }
}
</style>