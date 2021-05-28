<template>
  <div class="admin-pages flex-center">
    <div class="admin-form flex-center">
      <div class="form flex-center">
        <h1 class="left-title text-center">Login to HaoV</h1>
        <BaseInput label="Username" type="text" />
        <BaseInput label="Password" type="password" />
        <div class="form-button">
          <BaseButton noBorder @click="handleLogin"> Login</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      userName: '',
      password: '',
    }
  },
  methods: {
    handleLogin(e) {
      this.$router.push({ path: '/admin' })
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-pages {
  min-height: 100vh;
  overflow: hidden;
  /* background-color: orchid; */
  background-image: url('https://images.unsplash.com/photo-1499088513455-78ed88b7a5b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=671&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.admin-form {
  width: 60%;
  max-width: 60rem;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  padding: 5rem 0;

  @include extra_small_device {
    width: 80%;
  }
}

.form {
  height: 90%;
  flex-direction: column;
  margin: 0 auto;
  align-items: initial;
  width: 80%;
  max-width: 50rem;

  & > * {
    color: inherit !important;
  }

  & > div:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  &-button {
    align-self: flex-end;
  }
}

.left-title {
  margin-bottom: 2rem;
}
</style>