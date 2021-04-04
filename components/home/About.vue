<template>
  <div class="about">
    <div class="about-myself">
      <p>
        <span class="fw-600">About</span>
        Me
      </p>
      <div class="home-decor">
        <span> <v-icon name="asterisk"></v-icon> </span>
      </div>
      <div class="myself-introduce text-muted">
        Fix the cause, not the symptom
      </div>
    </div>
    <div class="about-name">
      <div>
        <img src="~/assets/images/my-name.png" alt="" />
      </div>
    </div>
    <div class="about-info">
      <p class="info-name">
        <span>Hello! </span>
        <span class="fw-600">I'm Anh Hao. </span>
      </p>
      <div class="info-jobs">
        <ul>
          <li v-for="job in jobs" :key="job" class="text-muted">{{ job }}</li>
        </ul>
      </div>
      <div class="info-content">
        <p class="text-muted">
          I'm a senior student at HUFI. I have a passionate on developing
          softwares to meet user's needs. My next goal is to become a full-stack
          senior developer.
        </p>
      </div>
    </div>
    <div class="about-skills"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: ['Developer', 'Blogger'],
    }
  },
}
</script>

<style lang="scss" scoped>
.about {
  --element-margin-top: 5.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  [class^='about-'] {
    margin-top: var(--element-margin-top);
  }
}

.about-myself {
  font-size: 3.5rem;
  text-align: center;
  p {
    font-size: inherit;
  }
  span {
    font-size: inherit;
  }
}

.about-name {
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.about-info {
  .info-name {
    font-size: 3.2rem;
    text-align: center;

    span {
      font-size: inherit;
    }
  }

  .info-jobs {
    margin-top: 1rem;

    ul {
      list-style-type: none;
      display: flex;
      justify-content: center;

      li {
        font-size: 1.65rem;
      }

      li:not(:last-child) {
        &::after {
          content: '';
          width: 5px;
          height: 5px;
          background-color: #6c757d;
          border-radius: 10px;
          display: inline-block;
          transform: translateY(-2px);
          margin: 0 2rem;
        }
      }
    }
  }

  .info-content {
    max-width: 55%;
    margin: 1rem auto 0 auto;

    p {
      text-align: justify;
    }
  }
}
</style>