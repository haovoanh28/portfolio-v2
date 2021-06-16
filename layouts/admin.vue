<template>
  <div class="admin">
    <AdminHeader />
    <div class="admin-main">
      <div class="admin-verify flex-center" v-if="isVerifying">
        <BaseSpinner fullScreen title="Verifying before continue ..." />
      </div>
      <Nuxt v-else />
    </div>
  </div>
</template>

<script>
import AdminHeader from '@/components/admin/AdminHeader'
import { mapState, mapActions } from 'vuex'

export default {
  middleware: 'auth',
  components: {
    AdminHeader,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  computed: {
    ...mapState('user/auth', ['user']),
    ...mapState('user/verify', ['isVerifying']),
  },
  methods: {
    ...mapActions('user/verify', ['verifyUserAsync']),
  },
  fetch() {
    this.verifyUserAsync(this.user._id)
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
}

.admin-verify {
  flex-direction: column;
  height: 100vh;
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