<template>
  <div class="tag-input">
    <label class="text-title fw-700" for="tag-input">{{ title }}</label>
    <div class="tag-container">
      <div class="tag">
        <BaseTag
          editable
          v-for="tag in hashtags"
          :key="`${tag}-tag`"
          :tag="tag"
          @tag-delete="handleTagDelete"
        />
      </div>
      <input
        type="text"
        id="tag-input"
        class="tag-input"
        v-bind="$attrs"
        @keydown="handleInput"
        :value="inputValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      inputValue: '',
    }
  },
  props: {
    hashtags: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    handleTagDelete(tag) {
      this.$emit('delete-tag', tag)
    },
    handleInput(e) {
      this.inputValue = e.target.value
      if (e.keyCode == 32 || e.keyCode == 13) {
        e.preventDefault()
        if (!e.target.value || !this.inputValue) {
          return false
        }

        this.$emit('add-tag', e.target.value)
        this.inputValue = ''
        return false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.tag-input {
  label {
    display: block;
    margin-bottom: 0.8rem;
  }
}

.tag-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
}

.tag {
  &:not(:first-of-type) {
  }

  span {
    display: inline-block;

    &:first-child {
      font-size: 1.4rem;
    }

    &:last-child {
      margin-left: 0.4rem;
      /* font-size: 1.6rem; */
    }
  }
}

#tag-input {
  border: none;
  outline: none;
  padding: 0.6rem 1.2rem;
  width: 100%;
  font-size: 1.4rem;
}
</style>