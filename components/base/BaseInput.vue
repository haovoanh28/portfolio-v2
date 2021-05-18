<template>
  <div class="input_group" :class="classObj">
    <label class="text-title fw-700" :for="label">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="value"
      v-if="!textarea"
      @input="handleInput"
      :id="label"
      :style="isError ? { borderColor: 'rgb(232, 21, 21) !important' } : {}"
    />
    <textarea
      v-bind="$attrs"
      @input="handleInput"
      :value="value"
      :style="isError ? { borderColor: 'rgb(232, 21, 21) !important' } : {}"
      v-else
    ></textarea>
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
    isError: {
      type: Boolean,
      default: false,
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
      this.$emit('input', { value: e.target.value, name: e.target.name })
    },
  },
}
</script>

<style lang="scss" scoped>
.input_group {
  label {
    display: block;
    margin-bottom: 0.8rem;
    transition: color 0.3s ease-out;
  }

  input,
  textarea {
    outline: none;
    border: 1px solid #ced4da;
    padding: 0.6rem 1.2rem;
    /* color: var(--color-muted); */
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
    fill: var(--color-muted);
  }
}

.isError {
  border-color: rgb(232, 21, 21);
}
</style>