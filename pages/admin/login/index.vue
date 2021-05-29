<template>
  <div class="admin-pages flex-center">
    <div class="admin-form flex-center">
      <div class="form flex-center">
        <h1 class="left-title text-center">Login to HaoV</h1>
        <BaseInput
          label="Username"
          type="text"
          name="userName"
          :value="userName"
          @input="handleInput"
        />
        <BaseInput
          label="Password"
          type="password"
          name="password"
          :value="password"
          @input="handleInput"
          @keypress.enter="handleLogin"
        />
        <div class="form-button">
          <BaseButton noBorder @click="handleLogin" :isLoading="isLoading">
            Login</BaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  layout: 'empty',
  data() {
    return {
      userName: '',
      password: '',
    }
  },
  computed: {
    ...mapState('user/login', ['isLoading']),
  },
  methods: {
    ...mapActions('user/login', ['loginAsync']),
    handleInput(e) {
      this[e.name] = e.value
    },
    handleLogin(e) {
      this.loginAsync({
        userName: this.userName,
        password: this.password,
      })
      // this.$router.push({ path: '/admin' })
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-pages {
  min-height: 100vh;
  overflow: hidden;
  /* background-color: orchid; */
  background-image: url('@/assets/images/admin-background.jpg');
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