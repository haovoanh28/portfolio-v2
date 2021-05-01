<template>
  <div class="editor-container">
    <client-only>
      <div class="editor">
        <label class="text-title fw-700">{{ title }}</label>
        <Editor
          :init="editorConfig"
          :api-key="tinymceApiKey"
          @onInit="handleEditorInit"
        />
      </div>
    </client-only>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  components: {
    Editor,
  },
  props: {
    title: {
      type: String,
      default: 'Editor',
    },
  },
  data() {
    return {
      editorConfig: {
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | preview code help',
        content_css:
          'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap',
        content_style:
          "@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap'; html { font-size: 10px; word-spacing: 1px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; box-sizing: border-box; scroll-behavior: smooth; }); body { font-family: Roboto, Nunito, san-serif !important; font-size: inherit; margin: 1rem } *, *::before, *::after { box-sizing: inherit; margin: 0; padding: 0; font-family: inherit; font-weight: inherit } *::selection { background: rgba(166, 175, 189, 0.3);}",
      },
      tinymceApiKey: 'zkr4z6fnh3osmkkm1h95whkoy62b5rvfewo6u83ac96mmm3k',
    }
  },
  methods: {
    handleEditorInit() {
      this.$emit('ed-loaded')
    },
  },
}
</script>

<style lang="scss" scoped>
.editor {
  label {
    display: block;
    margin-bottom: 0.8rem;
  }
}
</style>