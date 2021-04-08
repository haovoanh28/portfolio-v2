<template>
  <div class="input_group">
    <label class="text-title fw-700">{{ label }}</label>
    <input v-bind="$attrs" v-if="!textarea" />
    <textarea v-bind="$attrs" v-else></textarea>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    value: {
      type: [String, Number],
    },
    textarea: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.input_group {
  label {
    display: block;
    margin-bottom: 0.8rem;
  }

  input,
  textarea {
    outline: none;
    border: 1px solid #ced4da;
    padding: 0.6rem 1.2rem;
    color: var(--color-muted);
    line-height: 2.3rem;
    width: 100%;
    transition: all 0.5s ease-in-out;

    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;

    &:hover,
    &:focus {
      border: 1px solid black;
    }
  }

  input {
    height: 4.4rem;
  }

  textarea {
    min-height: 12rem;
  }
}
</style>