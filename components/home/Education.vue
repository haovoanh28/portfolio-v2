<template>
  <div class="education bg-light">
    <h1 class="education-title fw-700 text-title text-center">
      Education & Experience
    </h1>
    <div class="home-decor">
      <span> <v-icon name="asterisk"></v-icon> </span>
    </div>
    <p class="education-quote text-muted">
      Your talent determines what you can do. Your motivation determines how
      much you’re willing to do. Your attitude determines how well you do it
    </p>
    <div class="education-board">
      <div class="board-box--wrapper">
        <div
          class="board-box"
          v-for="(board, index) in boards"
          :key="`board-${index}`"
        >
          <p class="box-year fw-700">{{ board.year }}</p>
          <p class="box-job fw-700">{{ board.job }}</p>
          <p class="box-content">
            {{ board.content }}
          </p>
        </div>
      </div>
    </div>
    <SmallBanner
      :imgSrc="formattedSrc"
      content="I Am Available For Freelancer"
      btnContent="Hire Me!"
    />
  </div>
</template>


<script>
import SmallBanner from './SmallBanner'

export default {
  components: {
    SmallBanner,
  },
  data() {
    return {
      boards: [
        {
          year: '2017 - 2021',
          job: 'Studied at Ho Chi Minh University Of Food Industry',
          content:
            'I learned a lot of basic knowledge about technology in HUFI. This  lay out a solid foundation on my developer career ',
        },
        {
          year: '4/2020 - 6/2020',
          job: 'Intern at Apps Cyclone',
          content:
            'Apps Cyclone helps me to recognize my weakness about myself and my skills. They also taught me how to work with other members in a team, manage workflow, solve problems effectively.',
        },
      ],
    }
  },
  computed: {
    formattedSrc() {
      if (this.$device.isMobile) {
        return '/images/hired-bg-500w.jpg'
      } else {
        return '/images/hired-bg-1000w.jpg'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.education {
  margin-top: var(--section-margin);
  padding-top: var(--section-margin);

  & .education-title {
    font-size: var(--title-font-size);
  }

  & .education-quote {
    max-width: 55%;
    margin: 0 auto;
    line-height: 1.5;
  }
}

.education-board {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 15rem;
  justify-content: center;
  position: relative;
  padding: 0 20%;
  margin-bottom: 3.5rem;

  & .board-box--wrapper {
    position: relative;
    padding: 2.5rem 0 3.5rem 0;
  }

  & .board-box--wrapper::after {
    content: '';
    height: 100%;
    width: 1px;
    background-color: var(--color-gray);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  @include extra_small_device {
    padding: 0 10%;
  }
}

.board-box {
  padding: 2rem;
  border: 1px solid var(--color-gray);
  border-radius: 5px;
  margin: 1.8rem 0 0 2.3rem;

  & p:not(:first-of-type) {
    margin-top: 1rem;
  }
}

.box-year {
  position: relative;

  &::before {
    content: '';
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 10rem;
    background-color: black;
    position: absolute;
    top: 0;
    left: -5.299999rem;
    z-index: 1;
  }
}

.box-job {
  font-size: 1.8rem;
}

.box-content {
  line-height: 2.6rem;
  font-size: 1.6rem;
}
</style>