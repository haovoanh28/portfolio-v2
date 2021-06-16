<template>
  <div class="spinner-container" :class="classObj">
    <div class="spinner">
      <AtomSpinner color="#f0050d" />
    </div>
    <h2 class="spinner-title" v-if="title">
      {{ title }}
    </h2>
  </div>
</template>

<script>
import { AtomSpinner } from 'epic-spinners'
export default {
  components: {
    AtomSpinner,
  },
  props: {
    fullScreen: {
      type: Boolean,
      default: () => false,
    },
    title: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    classObj() {
      return {
        'full-screen': this.fullScreen,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.spinner-container {
  position: relative;
}

.spinner {
  position: absolute;
}

.spinner-title {
  margin-bottom: 13.85rem;
}

.full-screen {
  position: sticky;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 100;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
}
</style>