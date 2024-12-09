<template>
  <svg class="todoIcon" :class="[`todoIcon--${size}`]" role="img" v-bind="{ ...$attrs }">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'WrapIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'md',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.todoIcon {
  display: inline-block;
  fill: currentcolor;
  max-height: 100%;
  max-width: 100%;
  transition: color 0.12s linear, fill 0.12s linear;
  will-change: color, fill;

  &--sm {
    height: var(--icon-size-sm);
    width: var(--icon-size-sm);
  }

  &--md {
    height: var(--icon-size-md);
    width: var(--icon-size-md);
  }

  &--lg {
    height: var(--icon-size-lg);
    width: var(--icon-size-lg);
  }
}
</style>
