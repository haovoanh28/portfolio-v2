<template>
   <div clsas="post-card">
      <h1>post card</h1>
   </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
</style>