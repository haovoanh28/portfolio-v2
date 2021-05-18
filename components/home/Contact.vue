<template>
  <div class="contact">
    <p class="contact-title text-title">
      Get In <span class="fw-700">Touch</span>
    </p>
    <div class="home-decor">
      <span> <v-icon name="asterisk"></v-icon> </span>
    </div>
    <p class="contact-p text-muted text-center">
      If you are interested in me, here is my contact :
    </p>
    <div class="contact-main">
      <div class="contact-static">
        <div
          class="static-content"
          v-for="(contact, index) in contacts"
          :key="`contact-${index}`"
        >
          <v-icon :name="contact.iconName" scale="2.5"></v-icon>
          <p class="text-title fw-700">{{ contact.action }}</p>
          <p class="text-muted">{{ contact.info }}</p>
        </div>
      </div>
      <div class="contact-form">
        <form class="form">
          <div class="form-info">
            <BaseInput
              placeholder="Your name ... "
              label="Name"
              type="text"
              name="name"
              :value="name"
              @input="handleInput"
              :isError="name === '' && isTouch"
            />
            <BaseInput
              placeholder="Your email ... "
              label="Email address"
              type="email"
              name="email"
              :value="email"
              @input="handleInput"
              :isError="email === '' && isTouch"
            />
          </div>
          <div class="form-subject">
            <BaseInput
              placeholder="Your Subject ... "
              label="Subject"
              type="text"
              name="subject"
              :value="subject"
              @input="handleInput"
              :isError="subject === '' && isTouch"
            />
          </div>
          <div class="form-message">
            <BaseInput
              placeholder="Your Message ... "
              label="Message"
              textarea
              name="message"
              :value="message"
              @input="handleInput"
              :isError="message === '' && isTouch"
            />
          </div>
          <div class="form-button">
            <BaseButton blackBtn type="submit" @click.prevent="handleClick"
              >Send Message</BaseButton
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      isTouch: false,
      contacts: [
        {
          iconName: 'mobile-alt',
          action: 'Call Me On',
          info: '+84 901 385 336',
        },
        {
          iconName: 'regular/envelope',
          action: 'Email Me At',
          info: 'haovoanh28@gmail.com',
        },
        {
          iconName: 'map-marker-alt',
          action: 'Live In',
          info: 'Ho Chi Minh City, Vietnam',
        },
      ],
    }
  },
  methods: {
    handleClick(e) {
      this.isTouch = true
      if (!this.name || !this.email || !this.subject || !this.message) {
        this.$errorSwal('Please fill out the form ')
      }
    },
    handleInput(e) {
      const { name, value } = e
      this[name] = value
    },
  },
}
</script>

<style lang="scss" scoped>
.contact {
  margin: var(--section-margin) 0;
}

.contact-title {
  font-size: var(--title-font-size);
  text-align: center;
  & > * {
    font-size: inherit;
  }
}

.contact-p {
  padding-top: 0.5rem;
}

.contact-main {
  padding: 7rem 5% 0 5%;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @include medium_device {
    grid-template-columns: 1fr;
    padding: 3rem 5% 0 5%;
  }
}

.contact-static {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  margin-top: 0.5rem;

  p:nth-of-type(1) {
    padding: 0.6rem 0 0.2rem 0;
  }

  & div:not(:first-child) {
    margin-top: 3.2rem;
  }
}

.contact-form {
  @include medium_device {
    margin-top: 5.5rem;
  }
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 3rem;

  &-info {
    grid-column: 1/3;
    display: flex;
    justify-content: space-between;

    .input_group {
      width: 47%;
    }
  }

  &-subject {
    grid-column: 1/3;
  }

  &-message {
    grid-column: 1/3;
  }

  &-button {
    transform: translateY(-2rem);
    grid-column: 2/4;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    justify-self: flex-end;
  }

  @include medium_device {
    grid-template-columns: 1fr;

    &-info {
      grid-column: 1/2;
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 3rem;

      .input_group {
        width: 100%;
        grid-column: 1/2;
      }
    }

    &-subject {
      grid-column: 1/2;
    }

    &-message {
      grid-column: 1/2;
    }

    &-button {
      transform: translateY(-2rem);
      width: 100%;
      display: flex;
      justify-content: flex-end;
      justify-self: flex-end;
      grid-column: 1/2;
    }
  }
}
</style>