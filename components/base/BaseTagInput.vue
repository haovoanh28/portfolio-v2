<template>
  <div class="tag-input">
    <label class="text-title fw-700" for="tag-input">{{ title }}</label>
    <div class="tag-container">
      <div class="tag" v-for="tag in tags" :key="`${tag}-tag`">
        <PostTag>{{ tag }}</PostTag>
      </div>
      <input type="text" id="tag-input" class="tag-input" />
    </div>
  </div>
</template>

<script>
import PostTag from '@/components/post/PostTag'

export default {
  props: {
    tags: {
      type: Array,
      default: () => ['html', 'css'],
    },
    title: {
      type: String,
      default: '',
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
  display: flex;
}

.tag {
  display: flex;
  align-items: center;

  &:not(:first-of-type) {
  }

  span {
    display: inline-block;

    &:first-child {
      font-size: 1.4rem;
    }

    &:last-child {
      margin-left: 0.4rem;
      font-size: 1.6rem;
    }
  }
}

#tag-input {
  border: none;
  outline: none;
  padding: 0.6rem 1.2rem;
}
</style>