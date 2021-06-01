<template>
  <div class="logout flex-center" v-if="isLoading">
    <BaseSpinner fullSrceen />
    <h1>Loging out . . .</h1>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  layout: 'admin',
  computed: {
    ...mapState('user/auth', ['isLoading']),
  },
  methods: {
    ...mapActions('user/auth', ['logoutAsync']),
  },
  mounted() {
    this.$swal
      .fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        target: document.querySelector('.admin-main')[0],
      })
      .then((choice) => {
        if (choice.isConfirmed) {
          console.log('ok logout')
          this.logoutAsync()
        } else {
          console.log('oh no')
          this.$router.go(-1)
        }
      })
  },
}
</script>

<style lang="scss" scoped>
.logout {
  height: 100vh;
  overflow: hidden;
  flex-direction: column;

  h1 {
    margin-top: 1.6rem;
  }
}
</style>