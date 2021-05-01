<template>
  <div class="tag">
    <span>
      <span class="tag-content">{{ tag }}</span>
      <span class="tag-delete" @click.self="handleDelete">x</span>
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
    tag: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleDelete() {
      this.$emit('tag-delete', this.tag)
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
  white-space: nowrap;

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

.tag-content {
  font-size: inherit;
}

.tag-delete {
  font-size: inherit;
  border-radius: 50%;
  height: 12px;
  width: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  transition: all 0.3s linear;

  &:hover {
    transform: rotate(180deg);
  }
}
</style>