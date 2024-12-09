<template>
  <div class="formInput">
    <div
      class="formInput__wrapper"
      :class="[
        { 'formInput__wrapper--clearable': clearable && value },
        { 'formInput__wrapper--focused': focus },
      ]"
    >
      <input
        @focusin="handleFocus({ focus: true })"
        @focusout="handleFocus({ focus: false })"
        class="formInput__input"
        v-bind="{ ...$attrs, type, value }"
        @input="handleInput"
      />
      <button @click="handleClearInput" class="formInput__btnClose" v-if="clearable && value">
        <Icon name="close" />
      </button>
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'FormInput',
  props: {
    clearable: {
      default: true,
      type: Boolean,
    },
    type: {
      default: 'text',
      type: String,
    },
    value: {
      default: '',
      type: [String, Number, undefined, null],
    },
  },
  components: {
    Icon,
  },
  data: () => ({
    focus: false,
  }),
  methods: {
    handleFocus({ focus }) {
      this.focus = focus
    },
    handleClearInput() {
      this.$emit('input', '')
    },
    handleInput(ev) {
      this.$emit('input', ev.target.value || '')
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/utilities/utils/all';
@import '@/assets/styles/utilities/variables/all';

:root {
  --input-min-height: 32px;
}

.formInput {
  position: relative;

  &__wrapper {
    background-color: var(--neutral-color-high-pure);
    border: var(--border-width-md) solid var(--color-purple);
    border-radius: var(--border-radius-sm);
    color: inherit;
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr max-content max-content;
    transition: border-color 0.12s ease-in-out, box-shadow 0.12s ease-in-out;

    &--clearable {
      gap: var(--gap-1);
    }

    &--focused {
      border-color: var(--color-dark-purple);
    }
  }

  &__input {
    @include autofill();
    border: none;
    border-radius: var(--border-radius-sm);
    display: inline-block;
    min-height: var(--input-min-height);
    outline: var(--border-width-md) solid transparent;
    padding: 0 var(--gap-2);

    @include placeholder() {
      border: none;
      outline: var(--border-width-md) solid transparent;
    }
  }

  &__btnClose {
    @extend %reset-btn;
    border-radius: var(--border-radius-sm);
    color: var(--color-red);
    padding: var(--gap-1) var(--gap-1) 0;
  }
}
</style>
