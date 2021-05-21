<template>
  <button
    class="btn link"
    :class="classObj"
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="isLoading"
    v-ripple
  >
    <template v-if="isLoading">
      <HalfCircleSpinner :animation-duration="1000" :size="20" color="#fff" />
    </template>
    <template v-else-if="isIcon">
      <span>
        <slot></slot>
      </span>
    </template>
    <template v-else>
      <slot>button</slot>
    </template>
  </button>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners'

export default {
  inheritAttrs: false,
  components: {
    HalfCircleSpinner,
  },
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    noBorder: {
      type: Boolean,
      default: false,
    },
    'border-radius': {
      type: Boolean,
      default: false,
    },
    blackBtn: {
      type: Boolean,
      default: false,
    },
    successBtn: {
      type: Boolean,
      default: false,
    },
    errorBtn: {
      type: Boolean,
      default: false,
    },
    blueBtn: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classObj: {
        'bg-transparent': this.transparent,
        'border-radius': this.borderRadius,
        small: this.small,
        noBorder: this.noBorder,
        blackBtn: this.blackBtn,
        successBtn: this.successBtn,
        errorBtn: this.errorBtn,
        blueBtn: this.blueBtn,
        isIcon: this.isIcon,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 1.2rem 2.6rem;
  border: 2px solid #fff;
  outline: none;
  cursor: pointer;
  color: #fff;
  background-color: black;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1.5rem;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #fff !important;
    color: black;
  }
}

.small {
  padding: 0.6rem 1.5rem;
}

.noBorder {
  border: none !important;

  &:hover {
    border: none !important;
  }
}

.blackBtn {
  background-color: black;
  border: 2px solid transparent;

  &:hover {
    background-color: #fff !important;
    border: 2px solid black;
  }
}

.successBtn {
  --bg-color: #33cc33;
  background-color: var(--bg-color);
  border: 2px solid var(--bg-color);

  &:hover {
    background-color: darken(#33cc33, 15) !important;
    border: 2px solid darken(#33cc33, 15);
    color: #fff;
  }
}

.errorBtn {
  --bg-color: #df2121;

  background-color: var(--bg-color);
  border: 2px solid var(--bg-color);

  &:hover {
    background-color: darken(#df2121, 8) !important;
    border: 2px solid darken(#df2121, 8);
    color: #fff;
  }
}

.blueBtn {
  --bg-color: #0000cc;

  background-color: var(--bg-color);
  border: 2px solid var(--bg-color);

  &:hover {
    background-color: darken(#0000cc, 8) !important;
    border: 2px solid darken(#0000cc, 8);
    color: #fff;
  }
}

.isIcon {
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
  }
}

.border-radius {
  border-radius: 3rem !important;
}

button:disabled,
button[disabled],
button:disabled:hover,
button[disabled]:hover {
  background-color: rgb(96, 96, 96) !important;
  cursor: not-allowed;
}
</style>