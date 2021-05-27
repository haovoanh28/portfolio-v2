<template>
  <div class="admin-pages">
    <div class="admin-left flex-center">
      <h1 class="left-title">Login to HaoV</h1>
      <div class="form">
        <BaseInput label="Username" type="text" />
        <BaseInput label="Password" type="password" />
        <div class="form-button">
          <BaseButton noBorder @click="handleLogin"> Login</BaseButton>
        </div>
      </div>
    </div>
    <div class="admin-right flex-center">
      <p>Everything will be fine. Don't worry &#128079;</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  methods: {
    handleLogin(e) {
      this.$router.push({ path: '/admin' })
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-pages {
  display: flex;
  min-height: 100vh;
  overflow: hidden;
}

.admin-left {
  flex: 0 1 auto;
  width: 40%;
  min-width: 35rem;
  /* background-color: cyan; */
  background-image: url('https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80');
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  & > * {
    color: inherit !important;
  }
}
.left-title {
  position: absolute;
  top: 10%;
}

.form {
  & > div {
    margin-bottom: 2.6rem;
  }

  &-button {
    float: right;
  }
}

.admin-right {
  flex: 1 1 auto;
  /* background-color: darkorange; */
  background-image: url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80');
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  p {
    color: antiquewhite;
    font-size: 8rem;
    width: 80%;
    margin: 0 auto;
  }
}
</style>