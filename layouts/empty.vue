<template>
  <Nuxt />
</template>

<script>
// Use for pages that don't need layout
export default {
  middleware: ['no-auth'],
}
</script>

<style lang="scss">
@import '@/assets/scss/main';
</style>