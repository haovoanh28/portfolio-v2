<template>
  <div class="about">
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
        <img :src="skill.imgSrc" alt="aaaaa" />
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
          imgSrc:
            'https://www.hostinger.vn/huong-dan/wp-content/uploads/sites/10/2018/12/html-la-gi.jpg',
        },
        {
          name: 'CSS',
          level: 'Fresher',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
        },
        {
          name: 'Javasript',
          level: 'Fresher',
          imgSrc:
            'https://techvccloud.mediacdn.vn/zoom/650_406/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png',
        },
        {
          name: 'VueJS',
          level: 'Fresher',
          imgSrc: 'https://vi.vuejs.org/images/logo.png',
        },
        {
          name: 'NuxtJS',
          level: 'Fresher',
          imgSrc:
            'https://images.viblo.asia/696c5301-3440-45a6-a9e9-0972725f3c5f.png',
        },
        {
          name: 'NodeJS',
          level: 'Fresher',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/vi/a/a7/Nodejs_logo_light.png',
        },
        {
          name: 'MongoDB',
          level: 'Fresher',
          imgSrc:
            'https://miro.medium.com/max/8334/1*Ta4qktHtO--RMUpnR08mBg.jpeg',
        },
        {
          name: 'MSSQL',
          level: 'Fresher',
          imgSrc:
            'https://www.engisv.info/wp-content/uploads/2017/06/sqlserver-1.png',
        },
        {
          name: 'C#',
          level: 'Intern',
          imgSrc:
            'https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png',
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
    font-size: 3.2rem;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 15rem;
  grid-gap: 40px;
  grid-row-gap: 8rem;

  width: 100%;
  padding: 0 5%;
  padding-top: 2rem;
}

.skill-detail {
  img {
    width: 100%;
    height: 80%;
    object-fit: contain;
  }

  p {
    margin-top: 0.6rem;
    text-align: center;
    font-size: 1.3rem;
  }
}
</style>