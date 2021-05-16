<template>
  <div
    class="skill-card"
    :style="{
      border: `2px solid ${color}`,
      boxShadow: `0 0 .5px ${color}`,
    }"
  >
    <p class="text-center fw-700 level" :style="{ backgroundColor: color }">
      {{ skillLevel }}
    </p>
    <div class="src">
      <img
        :src="require(`@/assets/svg/${this.skillSrc}`)"
        :alt="`${skillName} icon`"
      />
    </div>
    <div class="title">
      <p class="fw-700 text-center" :style="{ color: color }">
        {{ skillName }}
      </p>
    </div>
    <div class="des">
      <p>
        {{ skillDes }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skillName: {
      type: String,
      default: '',
    },
    skillSrc: {
      type: String,
      default: '',
    },
    skillLevel: {
      type: String,
      default: '',
    },
    skillDes: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'black',
    },
  },
}
</script>

<style lang="scss" scoped>
.skill-card {
  align-self: center;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  svg {
    width: 100%;
    height: 80%;
    margin: 0 auto;
  }

  p {
    margin-top: 0.6rem;
    text-align: center;
    font-size: 1.3rem;
  }
}

.skill-card .level {
  padding: 0.3rem 0.8rem;
  position: absolute;
  top: 0;
  left: 0;
  transform: skewX(30deg) skewY(-30deg) translate(-5.4rem, -3rem);
  color: #fff;
  min-width: 15rem;
  letter-spacing: 1.3px;
}

.skill-card .src {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  img {
    width: 8rem;
    height: 8rem;
  }
}

.skill-card .title {
  margin-top: 1.6rem;
  p {
    text-transform: uppercase;
    letter-spacing: 1.4px;
  }
}
</style>