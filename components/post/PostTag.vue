<template>
  <div class="tag">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    editable: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.tag {
  background-color: var(--color-light);
  border-radius: 0.2rem;
  border: 1px solid #e7e7e7;
  color: #9c9c9c;
  display: inline-block;
  transition: all 0.5s;
  font-size: 9px !important;
  letter-spacing: 1px;
  margin: 5px 10px 5px 0;
  padding: 7px 8px 5px 10px;
  text-transform: uppercase;
  cursor: pointer;

  & > * {
    font-size: inherit;
    color: inherit;
    font-family: inherit;
  }

  &:hover,
  &:focus {
    text-decoration: none !important;
    outline: none !important;
    box-shadow: none !important;
    border: 1px solid black;
  }
}
</style>