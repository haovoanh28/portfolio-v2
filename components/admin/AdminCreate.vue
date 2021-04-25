<template>
  <div class="post-create">
     <div class="create-title">
        <BaseInput label="Title" placeholder="Type in your post's title" />
     </div>
     <div class="create-editor">
        <AdminEditor />
     </div>
  </div>
</template>

<script>
import AdminEditor from "./AdminEditor";

export default {
   components: {
      AdminEditor
   }
}
</script>

<style lang="scss">

</style>