<template>
  <button
    class="formButton"
    v-on="{ ...$listeners }"
    :aria-label="text"
    :disabled="disabled"
    :aria-disabled="disabled"
  >
    <span class="formButton__prepend" v-if="$scopedSlots['left']">
      <slot name="left"></slot>
    </span>

    <span class="formButton__text">
      <slot>{{ text }}</slot>
    </span>

    <span class="formButton__append" v-if="$scopedSlots['right']">
      <slot name="right"></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    full: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/utilities/utils/all';
@import '@/assets/styles/utilities/variables/all';

.formButton {
  @extend %reset-btn;
  align-items: center;
  background-color: var(--color-purple);
  border: var(--border-width-md) solid var(--color-dark-purple);
  box-sizing: border-box;
  border-radius: var(--border-radius-xs);
  color: var(--color-light);
  display: inline-flex;
  justify-content: center;
  transition: background-color 0.12s linear, border-color 0.12s linear;
  padding: 0 var(--gap-1);

  &__prepend,
  &__append {
    align-items: center;
    display: inline-flex;
    flex-direction: column;
  }

  &__prepend {
    + .csButton__text {
      margin-left: var(--gap-1);
    }
  }

  &__append {
    margin-left: var(--gap-1);
  }

  &__text {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }

  &:hover {
    background-color: var(--color-dark-purple);
  }

  &[disabled] {
    cursor: not-allowed;
  }
}
</style>
