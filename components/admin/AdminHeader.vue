<template>
  <div class="admin-header" :style="styleObj">
    <div class="header-head">
      <p class="fw-700 text-center">haov</p>
    </div>
    <div class="header-main">
      <div class="header-post">
        <p class="header-tag">post</p>
        <div class="post-menu">
          <p class="menu-item" v-for="item in postMenu" :key="item.text">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: '#00001a',
    },
  },
  data() {
    return {
      postMenu: [
        {
          text: 'overview',
          link: '',
        },
        {
          text: 'create',
          link: '',
        },
      ],
    }
  },
  computed: {
    styleObj() {
      return {
        backgroundColor: this.bgColor,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-header {
  height: 100vh;
  width: var(--menu-width);
  position: fixed;
  top: 0;
  left: 0;

  & > * {
    color: #fff;
  }
}

.header-head {
  padding: 2.4rem;

  p {
    font-size: 3rem;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 3.5px;
  }
}

.header-main {
  padding: 0 1.6rem;

  .header-tag {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.1rem;
    padding: 0.6rem 0;
    opacity: 0.6;
  }

  .header-tag:not(:first-child) {
  }
}
.menu-item {
  text-transform: capitalize;
  font-size: 1.4rem;
  padding: 0.8rem 0.6rem;
}

.post-menu {
}
</style>