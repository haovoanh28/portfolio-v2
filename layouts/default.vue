<template>
  <div class="body">
    <template>
      <Header />
      <Nuxt keep-alive />
      <keep-alive>
        <Footer />
      </keep-alive>
    </template>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$toast.fire({
      position: 'top-left',
      title: '<h3>&#9996; Welcome to my website &#9996; </h3>',
    })
  },
}
</script>

<style lang="scss">
/* @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap'); */
@import '@/assets/scss/main';
:root {
}
</style>
