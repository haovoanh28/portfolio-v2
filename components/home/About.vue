<template>
  <div class="about flex-center">
    <div class="about-myself text-center">
      <div class="myself-title">
        <p>
          <span class="fw-700 text-title">About</span>
          Me
        </p>
      </div>
      <div class="home-decor">
        <span> <v-icon name="asterisk"></v-icon> </span>
      </div>
      <div class="myself-introduce text-muted">
        Fix the cause, not the symptom
      </div>
    </div>
    <div class="about-name">
      <div>
        <img src="~/assets/images/my-name.png" alt="" loading="lazy" />
      </div>
    </div>
    <div class="about-info">
      <p class="info-name text-center">
        <span>Hello! </span>
        <span class="fw-700 text-title">I'm Anh Hao.</span>
      </p>
      <div class="info-jobs">
        <ul>
          <li v-for="(job, index) in jobs" :key="`job-${index}`">
            <span class="text-muted">
              {{ job }}
            </span>
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
      <h2 class="text-title fw-700 text-center skills-title">What I know</h2>
      <div class="skills-container">
        <SkillCard
          v-for="(skill, index) in skills"
          :key="`skill-${index}`"
          :skillName="skill.name"
          :skillSrc="skill.svg"
          :skillLevel="skill.level"
          :color="skill.color"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from './SkillCard'

export default {
  components: {
    SkillCard,
  },
  data() {
    return {
      jobs: ['Developer', 'Blogger'],
      skills: [
        {
          name: 'HTML',
          level: 'Fresher',
          iconName: 'brands/html5',
          svg: 'html5.svg',
          color: '#ff6600',
        },
        {
          name: 'CSS',
          level: 'Fresher',
          iconName: 'brands/css3',
          svg: 'css3.svg',
          color: '#0000ff',
        },
        {
          name: 'Javascript',
          level: 'Fresher',
          iconName: 'brands/node-js',
          svg: 'logo-javascript.svg',
          color: '#ffcc00',
        },
        {
          name: 'VueJS',
          level: 'Fresher',
          iconName: 'brands/vuejs',
          svg: 'vue-js-1.svg',
          color: '#33cc33',
        },
        {
          name: 'ReactJS',
          level: 'Fresher',
          iconName: 'brands/react',
          svg: 'react-2.svg',
          color: '#00e6e6',
        },
        {
          name: 'Angular',
          level: 'Fresher',
          svg: 'angular-icon-1.svg',
          color: '#ff0000',
        },
        {
          name: 'NodeJS',
          level: 'Fresher',
          iconName: 'brands/node',
          svg: 'nodejs-1.svg',
          color: '#009900',
        },
        {
          name: 'Database',
          level: 'Fresher',
          iconName: 'database',
          svg: 'sql-server.svg',
          color: '#6600cc',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.about {
  --element-margin-top: 5.8rem;
  flex-direction: column;

  [class^='about-'] {
    margin-top: var(--element-margin-top);
  }
}

.about-myself {
  .myself-title p {
    font-size: var(--title-font-size);
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
  }

  .info-jobs {
    margin-top: 1.5rem;

    ul {
      list-style-type: none;
      display: flex;
      justify-content: center;

      li {
        font-size: 1.85rem;

        span {
          display: inline-block;
          font-size: inherit;
        }
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
    line-height: 1.5;
  }
}

.about-skills {
  width: 100%;
}

.skills-title {
  font-size: var(--title-font-size);
}

.skills-container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: 15rem;
  grid-gap: 40px;

  width: 100%;
  padding: 0 4%;
  padding-top: 2.5rem;

  @include extra_small_device {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
}
</style>