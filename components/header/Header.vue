<template>
  <div class="header">
    <nav class="nav">
      <a href="#" class="nav-brand">Brand</a>
      <ul class="nav-list">
        <li v-for="item in nav" :key="item" class="nav-item">
          <a href="#">
            {{ item }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        'home',
        'about',
        'services',
        'education',
        'work',
        'client',
        'blog',
        'contact',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: transparent;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in-out;
  transition-property: background-color, padding;
  padding: 1.5rem 0;
  width: 100vw;
  z-index: 999;
}

.header--scroll {
  background-color: #fff;
  padding: 1rem 0;

  & a {
    color: black !important;
  }
}

.nav {
  --nav-margin: 10%;

  display: grid;
  grid-template-columns: 40% 60%;
  height: 100%;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    text-transform: capitalize;
    color: white;
    font-weight: 500;
  }
}

.nav-brand {
  margin-left: var(--nav-margin);
  font-size: 3rem;
}

.nav-list {
  margin-right: var(--nav-margin);
  font-size: 1.4rem;
}
</style>