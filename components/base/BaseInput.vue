<template>
  <div class="input_group" :class="classObj">
    <label class="text-title fw-700">{{ label }}</label>
    <input v-bind="$attrs" v-if="!textarea" @input="handleInput" />
    <textarea v-bind="$attrs" @input="handleInput" v-else></textarea>
    <v-icon :name="iconName" v-if="hasIcon && iconName"></v-icon>
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
    hasIcon: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: '',
    },
  },
  computed: {
    classObj() {
      return {
        hasIcon: this.hasIcon,
      }
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
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
    border-radius: 4px;

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
    transition: none;
  }

  svg {
    cursor: pointer;
  }
}

.hasIcon {
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    right: 5%;
    width: 1.7rem;
    height: 1.7rem;
    transform: translate(-50%, -50%);
  }
}
</style>