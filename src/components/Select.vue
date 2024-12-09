<template>
  <select class="formSelect" @change="handleChange" v-bind="{ ...$attrs, value }">
    <option value="">{{ $attrs?.placeholder ? $attrs.placeholder : 'Select priority' }}</option>
    <option class="formSelect__option" v-for="(item, ind) in list" :key="ind">
      {{ item[titleText] }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'FormSelect',
  props: {
    label: {
      default: 'Select',
      type: String,
    },
    list: {
      default: () => [],
      type: Array,
    },
    titleText: {
      default: '',
      type: String,
    },
    titleValue: {
      default: '',
      type: String,
    },
    value: {
      default: '',
      type: [String, Number, undefined, null],
    },
  },
  methods: {
    handleChange(ev) {
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

.formSelect {
  background-color: var(--neutral-color-high-pure);
  border: var(--border-width-md) solid var(--color-purple);
  border-radius: var(--border-radius-sm);
  color: inherit;
  transition: border-color 0.12s ease-in-out, box-shadow 0.12s ease-in-out;
  min-height: var(--input-min-height);
  outline: var(--border-width-md) solid transparent;
  padding: 0 var(--gap-2);

  @include placeholder() {
    border: none;
    outline: var(--border-width-md) solid transparent;
  }

  &__option {
    position: relative;
  }
}
</style>
