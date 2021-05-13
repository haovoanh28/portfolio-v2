<template>
  <div class="select-group">
    <client-only>
      <label class="text-title fw-700">{{ title }}</label>
      <VSelect
        class="vselect"
        :options="postTypes"
        @option:selected="handleChange"
        :value="value.charAt(0).toUpperCase() + value.slice(1)"
      />
    </client-only>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
  components: {
    VSelect: vSelect,
  },
  props: {
    title: {
      type: String,
      default: 'Select',
    },
    postTypes: {
      type: Array,
      default: () => {
        return ['Technology', 'Regular', 'Programming', 'Share']
      },
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleChange(e) {
      console.log(e)
      this.$emit('input', { value: e, name: this.name })
    },
  },
}
</script>

<style lang="scss">
.select-group {
  label {
    display: block;
    margin-bottom: 0.8rem;
  }
}

.v-select .vs__dropdown-toggle {
  padding: 0.6rem 1.2rem;
  height: 4.4rem;
  transition: all 0.5s ease-in-out;

  &:hover {
    border: 1px solid black;
  }
}
.v-select .vs__selected-options,
.v-select .vs__actions,
.v-select .vs__selected,
.v-select .vs__search {
  margin: 0;
  padding: 0;
}

.vs--single.vs--open .vs__selected {
  top: 50%;
  transform: translateY(-50%);
}
</style>