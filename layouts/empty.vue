<template>
  <Nuxt />
</template>

<script>
// Use for pages that don't need layout
export default {
  middleware: ['auth']
}
</script>

<style lang="scss">
@import '@/assets/scss/main';
</style>