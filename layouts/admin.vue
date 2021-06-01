<template>
  <div class="admin">
    <AdminHeader />
    <div class="admin-main">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import AdminHeader from '@/components/admin/AdminHeader'

export default {
  middleware: 'auth',
  components: {
    AdminHeader,
  },
}
</script>

<style lang="scss">
/* @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap'); */
@import '@/assets/scss/main';

:root {
  --menu-width: 25rem;
}

.admin {
  display: grid;
  grid-template-columns: 1fr;

  @include medium_device {
  }
}

.admin-main {
  min-height: 100vh;
  grid-column: 1 / -1;
  margin-left: var(--menu-width);
  padding: 2rem;

  @include medium_device {
    margin-left: 0;
  }

  @include extra_large_device {
    padding: 2rem 10%;
  }
}

.tox .tox-dialog-wrap {
  left: 25rem !important;

  @include medium_device {
    left: 0 !important;
  }
}

.nuxt-link-active,
.nuxt-link-exact-active {
  /* color: red !important; */
  background-color: #fff !important;
  color: black !important;
}
</style>