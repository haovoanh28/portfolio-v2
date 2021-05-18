<template>
  <footer class="footer bg-light">
    <p class="footer-copyright text-muted fw-700">2021 &#169; Hao</p>
    <div class="footer-icons">
      <div
        class="icon"
        v-for="(icon, index) in footerIcons"
        :key="`footerIcon-${index}`"
      >
        <a :href="icon.ref" target="_blank">
          <v-icon :name="icon.iconName"></v-icon>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerIcons: [
        {
          ref: 'https://www.facebook.com/profile.php?id=100020713613057',
          iconName: 'brands/facebook-f',
        },
        {
          ref: 'https://www.facebook.com/profile.php?id=100020713613057',
          iconName: 'brands/google-plus-g',
        },
        {
          ref: 'https://github.com/haovoanh28',
          iconName: 'brands/github',
        },
        {
          ref: 'https://www.linkedin.com/in/hao-vo-14267020b/',
          iconName: 'brands/linkedin-in',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  padding: 3rem;
  display: flex;
  justify-content: space-between;

  @include medium_device {
    flex-direction: column;
  }
}

.footer-copyright {
  align-self: center;

  @include medium_device {
    margin-bottom: 2rem;
  }
}

.footer-icons {
  display: flex;
  justify-content: space-between;
  min-width: 22%;

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

  @include medium_device {
    width: 35%;
    margin: 0 auto;
  }

  @include extra_small_device {
    min-width: 65%;
  }
}
</style>