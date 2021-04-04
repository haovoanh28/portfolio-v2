<template>
  <div class="container">
    <Banner />
    <About />
  </div>
</template>

<script>
import About from '@/components/home/About'
export default {
  components: {
    About: About,
  },
}
</script>

<style lang="scss">
.container {
}

.home-decor {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;

  span {
    position: relative;
  }

  span::before {
    content: '';
    width: 30px;
    height: 1px;
    background-color: #d0d0d0;
    position: absolute;
    top: 50%;
    transform: translate(-150%, 40%);
  }

  span::after {
    content: '';
    width: 30px;
    height: 1px;
    background-color: #d0d0d0;
    position: absolute;
    top: 50%;
    transform: translate(50%, 40%);
  }
}
</style>
