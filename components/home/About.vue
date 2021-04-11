<template>
  <div class="about section" id="about">
    <div class="about-myself">
      <p>
        <span class="fw-600 text-title">About</span>
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
          <li
            v-for="(job, index) in jobs"
            :key="`job-${index}`"
            class="text-muted"
          >
            {{ job }}
          </li>
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
    <div class="about-skills">
      <div
        class="skill-detail"
        v-for="(skill, index) in skills"
        :key="`skill-${index}`"
      >
        <v-icon :name="skill.iconName"></v-icon>
        <p class="text-muted">Level: {{ skill.level }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: ['Developer', 'Blogger'],
      skills: [
        {
          name: 'HTML',
          level: 'Fresher',
          iconName: 'brands/html5',
        },
        {
          name: 'CSS',
          level: 'Fresher',
          iconName: 'brands/css3',
        },
        {
          name: 'Javascript',
          level: 'Fresher',
          iconName: 'brands/node-js',
        },
        {
          name: 'VueJS',
          level: 'Fresher',
          iconName: 'brands/vuejs',
        },
        {
          name: 'ReactJS',
          level: 'Fresher',
          iconName: 'brands/react',
        },
        {
          name: 'NodeJS',
          level: 'Fresher',
          iconName: 'brands/node',
        },
        {
          name: 'Database',
          level: 'Fresher',
          iconName: 'database',
        },
      ],
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
  font-size: var(--title-font-size);
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
    font-size: var(--title-font-size);
    text-align: center;

    span {
      font-size: inherit;
    }
  }

  .info-jobs {
    margin-top: 1.5rem;

    ul {
      list-style-type: none;
      display: flex;
      justify-content: center;

      li {
        font-size: 1.85rem;
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
    margin: 1.5rem auto 0 auto;

    p {
      text-align: justify;
    }
  }
}

.about-skills {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 15rem;
  grid-gap: 40px;
  grid-row-gap: 8rem;

  width: 100%;
  padding: 0 5%;
  padding-top: 2rem;

  @include extra_small_device {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

.skill-detail {
  svg {
    width: 100%;
    height: 80%;
    margin: 0 auto;
  }

  p {
    margin-top: 0.6rem;
    text-align: center;
    font-size: 1.3rem;
  }
}
</style>