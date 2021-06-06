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
      if (process.browser) {
        return {
          backgroundImage: `url(${this.imgSrc})`,
        }
      }

      return {}
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
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  div:nth-of-type(2) {
    z-index: 2;
  }

  p {
    color: #fff;
    font-size: 3.2rem;
    letter-spacing: 2.5px;
    z-index: 2;
  }

  button {
    margin-top: 3rem;
    z-index: 2;
  }
}
</style>