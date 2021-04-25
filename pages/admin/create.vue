<template>
  <div class="admin-create">
    <client-only>
      <AdminCreate />
    </client-only>
  </div>
</template>

<script>
import AdminCreate from '@/components/admin/AdminCreate'

export default {
  layout: 'admin',
  components: {
    AdminCreate,
  },
}
</script>

<style>
</style>