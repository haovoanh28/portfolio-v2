<template>
  <div class="admin-header-wrapper">
    <div class="admin-header--reponsive" ref="admin-header--responsive">
      <p class="header-head--responsive fw-700 text-center">
        <a href="/">{{ brand }}</a>
      </p>
      <div class="header-bars--responsive">
        <v-icon name="bars" @click="toggleHeader"></v-icon>
      </div>
    </div>
    <div class="responsive-bg" ref="responsive-bg" @click="toggleHeader"></div>
    <div class="admin-header" :style="styleObj" ref="admin-header">
      <div class="header-head">
        <p class="fw-700 text-center">
          <a href="/">{{ brand }}</a>
        </p>
      </div>
      <div class="header-main">
        <div class="header-post">
          <p class="header-tag">post</p>
          <div class="post-menu">
            <p
              class="menu-item"
              v-for="item in postMenu"
              :key="item.text"
              @click.capture="handleMenuItemClick"
            >
              <NuxtLink :to="item.link" v-ripple>
                {{ item.text }}
              </NuxtLink>
            </p>
          </div>
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
          link: '/admin/post',
        },
        {
          text: 'create',
          link: '/admin/post/create',
        },
      ],
      brand: 'HAOV',
    }
  },
  computed: {
    styleObj() {
      return {
        backgroundColor: this.bgColor,
      }
    },
  },
  methods: {
    toggleHeader() {
      if (process.browser) {
        const adminHeader = this.$refs['admin-header']
        const responsiveBg = this.$refs['responsive-bg']
        adminHeader.classList.toggle('admin-header--active-response')
        const getResponsiveBgStyles = window.getComputedStyle(responsiveBg)
        if (getResponsiveBgStyles.display == 'none') {
          responsiveBg.style.display = 'block'
        } else {
          responsiveBg.style.display = 'none'
        }
      }
    },
    handleMenuItemClick() {
      const adminHeader = this.$refs['admin-header--responsive']
      const getAdminHeaderComputedStyle = window.getComputedStyle(adminHeader)

      if (getAdminHeaderComputedStyle.display === 'none') {
        return
      }

      this.toggleHeader()
    },
  },
}
</script>

<style lang="scss" scoped>
// --- RESET CLASSES ---

// ---------------------

.admin-header {
  height: 100vh;
  width: var(--menu-width);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1600;
  transition: transform 0.3s ease-in;

  & > * {
    color: #fff;
  }

  @include medium_device {
    transform: translateX(calc(var(--menu-width) * -1));
  }
}

.header-head {
  padding: 2.4rem;

  p {
    font-size: 3rem;
    color: #fff;

    a {
      font-size: inherit;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 3.5px;
      cursor: pointer;
      color: inherit;
    }
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
}

.menu-item {
  text-transform: capitalize;
  font-size: 1.4rem;
  /* transition: all 0.3s; */

  a {
    font-size: inherit;
    text-decoration: none;
    color: inherit;
    padding: 0.8rem 0.6rem;
    display: block;
    transition: all 0.3s;
  }
}

.admin-header--reponsive {
  display: none;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 5rem;
  background-color: #fff;
  border-bottom: 1px solid var(--color-light);

  & > * {
    align-self: center;
  }

  a {
    font-size: inherit;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    color: inherit;
  }

  @include medium_device {
    display: grid;
  }
}

.header-head--responsive {
  grid-column: 2 / 3;
}

.header-bars--responsive {
  justify-self: flex-end;
  margin-right: 2rem;
}

.admin-header--active-response {
  transform: translateX(0);
  z-index: 1600;
}

.responsive-bg {
  display: none;
  width: 150vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1500;
}
</style>