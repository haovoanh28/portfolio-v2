<template>
  <div class="spinner" :class="classObj">
    <AtomSpinner color="#f0050d" />
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
      default: false,
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