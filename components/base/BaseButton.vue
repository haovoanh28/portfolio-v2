<template>
  <button
    class="btn"
    :class="classObj"
    v-bind="$attrs"
    v-on="$listeners"
    v-ripple
  >
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    transparent: {
      type: Boolean,
      default: () => false,
    },
    small: {
      type: Boolean,
      default: () => false,
    },
    noBorder: {
      type: Boolean,
      default: () => false,
    },
    'border-radius': {
      type: Boolean,
      default: () => false,
    },
    blackBtn: {
      type: Boolean,
      default: () => false,
    },
    successBtn: {
      type: Boolean,
      default: () => false,
    },
    errorBtn: {
      type: Boolean,
      default: () => false,
    },
    blueBtn: {
      type: Boolean,
      default: () => false,
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
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1.5rem;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  /*
  appearance: auto;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
    box-sizing: border-box;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
    border-radius: 2px;
  */

  &:hover {
    background-color: #fff !important;
    color: black;
  }

  a {
    color: inherit;
    text-decoration: none;
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

.border-radius {
  border-radius: 3rem !important;
}
</style>