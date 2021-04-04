<template>
  <button class="btn" :class="classObj">
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: () => false,
    },
    'border-radius': {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      classObj: {
        'bg-transparent': this.transparent,
        'border-radius': this.borderRadius,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 1rem 2rem;
  border: 2px solid #fff;
  outline: none;
  cursor: pointer;
  color: #fff;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: #fff;
    color: black;
  }
}
</style>