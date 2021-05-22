<template>
  <div class="body">
    <template>
      <Header />
      <Nuxt />
      <keep-alive>
        <Footer />
      </keep-alive>
    </template>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
/* @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap'); */
@import '@/assets/scss/main';
</style>
