<template>
  <div class="taskItem" :class="{ 'taskItem--completed': completed }">
    <div class="taskItem__content">
      <h4 class="taskItem__title">{{ title || '-' }}</h4>
      <p class="taskItem__description">{{ description || '-' }}</p>
    </div>

    <div class="taskItem__actionsBox">
      <span @click="changeTaskStatus({ id, status: completed })" class="">
        <WrapIcon
          class="taskItem__icon taskItem__icon--check"
          :class="{ 'taskItem__icon--checked': completed }"
          name="check"
        />
      </span>
      <span class="">
        <WrapIcon class="taskItem__icon taskItem__icon--edit" name="edit" />
      </span>
      <span @click="deleteTask(id)" class="">
        <WrapIcon class="taskItem__icon taskItem__icon--delete" name="delete" />
      </span>
    </div>
  </div>
</template>

<script>
import WrapIcon from '@/components/Icon.vue'
// import FormButton from '@/components/Button.vue'
import { mapActions } from 'vuex'

export default {
  name: 'TodoItem',
  components: { /*FormButton,*/ WrapIcon },
  props: {
    completed: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: '',
    },
    id: {
      type: [String, null, undefined, Number],
    },
    priority: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    ...mapActions({
      changeTaskStatus: 'TodoModule/changeTaskStatus',
      deleteTask: 'TodoModule/deleteTask',
      setDialogStatus: 'TodoModule/setDialogStatus',
    }),
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/utilities/utils/all';
@import '@/assets/styles/utilities/variables/all';

.taskItem {
  border-bottom: var(--border-width-sm) solid currentColor;
  color: var(--color-dark-lightest);
  display: flex;
  gap: var(--gap-2);
  justify-content: space-between;
  padding: var(--gap-2);
  margin-bottom: var(--gap-2);

  &__title {
    font-size: var(--font-size-md);
    line-height: var(--line-height-default);
  }

  &__description {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-xs);
    padding-bottom: var(--gap-2);
  }

  &__actionsBox {
    display: flex;
    gap: var(--gap-2);
  }

  &--completed {
    opacity: 0.75;

    .taskItem__title,
    .taskItem__description {
      text-decoration: line-through;
    }
  }

  &__icon {
    &:hover {
      cursor: pointer;
    }

    &--checked {
      color: var(--color-green);
    }

    &--check {
      &:hover {
        color: var(--color-green);
      }
    }

    &--edit {
      &:hover {
        color: var(--color-purple);
      }
    }

    &--delete {
      &:hover {
        color: var(--color-red);
      }
    }
  }
}
</style>
