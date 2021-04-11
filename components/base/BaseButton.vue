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
    blackBtn: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      classObj: {
        'bg-transparent': this.transparent,
        'border-radius': this.borderRadius,
        blackBtn: this.blackBtn,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 1.2rem 2.6rem;
  border: 2px solid #fff;
  outline: none;
  cursor: pointer;
  color: #fff;
  background-color: black;
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1.5rem;

  &:hover {
    background-color: #fff !important;
    color: black;
  }
}

.blackBtn {
  background-color: black;
  border: 2px solid transparent;

  &:hover {
    background-color: #fff !important;
    border: 2px solid black;
  }
}

.border-radius {
  border-radius: 3rem !important;
}
</style>