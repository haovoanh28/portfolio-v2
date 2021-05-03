<template>
  <div class="admin-create">
    <template v-if="isLoading">
      <BaseSpinner fullScreen />
    </template>
    <template v-show="!isLoading">
      <client-only>
        <AdminCreate @ed-loaded="handleEdLoaded" />
      </client-only>
    </template>
  </div>
</template>

<script>
import AdminCreate from '@/components/admin/AdminCreate'

export default {
  layout: 'admin',
  components: {
    AdminCreate,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
    handleEdLoaded() {
      this.isLoading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-create {
  position: relative;
  padding: 0;
}
</style>