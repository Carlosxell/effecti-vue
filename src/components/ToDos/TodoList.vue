<template>
  <div class="todoList">
    <div class="todoList__form">
      <div class="todoList__form__search">
        <FormInput placeholder="Search Note" v-model="search" />
        <FormButton @click="openModal">
          <template #default>
            <WrapIcon name="add_circle" />
          </template>
        </FormButton>
      </div>
    </div>

    <AddForm />

    <div class="todoList__listWrapper" v-if="todoList.length">
      <TodoItem
        :completed="item.completed"
        :id="item.id"
        :description="item.description"
        :priority="item.priority"
        :title="item.title"
        v-for="(item, ind) in todoList"
        :key="ind"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FormInput from '@/components/Input.vue'
import TodoItem from '@/components/ToDos/TodoItem.vue'
import { mapGetters, mapActions } from 'vuex'
import FormButton from '@/components/Button.vue'
import WrapIcon from '@/components/Icon.vue'
import AddForm from '@/components/AddForm.vue'

export default {
  name: 'TodoList',
  components: { AddForm, WrapIcon, FormButton, FormInput, TodoItem },
  data: () => ({
    search: '',
  }),
  computed: {
    ...mapGetters({
      formIsOpen: 'TodoModule/getFormStatus',
      editing: 'TodoModule/getEditStatus',
      todoList: 'TodoModule/getTodoList',
    }),
  },
  methods: {
    ...mapActions({
      setFormStatus: 'TodoModule/setFormStatus',
    }),
    openModal() {
      const status = !this.formIsOpen
      this.setFormStatus(status)
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/utilities/utils/all';
@import '@/assets/styles/utilities/variables/all';

.todoList {
  padding-top: var(--gap-10);
  position: relative;

  &__form {
    &__search {
      display: grid;
      gap: var(--gap-2);
      grid-template-columns: 1fr max-content;
      width: 100%;
    }
  }

  &__listWrapper {
    max-height: calc(100vh - var(--gap-10));
  }
}
</style>
