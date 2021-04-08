<template>
  <footer class="footer bg-light">
    <p class="footer-copyright text-muted fw-500">2021 &#169; Hao</p>
    <div class="footer-icons">
      <div
        class="icon"
        v-for="(icon, index) in footerIcons"
        :key="`footerIcon-${index}`"
      >
        <v-icon :name="icon"></v-icon>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerIcons: [
        'brands/facebook-f',
        'brands/google-plus-g',
        'brands/twitter',
        'brands/github',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  padding: 3rem 1.5rem;
  display: flex;
  justify-content: space-between;
}

.footer-copyright {
  align-self: center;
}

.footer-icons {
  display: flex;
  justify-content: space-between;
  width: 22%;

  .icon {
    border-radius: 50%;
    border: 2px solid var(--color-muted);
    width: 4.2rem;
    height: 4.2rem;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: all 0.35s linear;
    svg {
      color: var(--color-muted);
    }

    &:hover {
      transform: rotate(360deg);
      border: 2px solid black;

      svg {
        color: black;
      }
    }
  }
}
</style>