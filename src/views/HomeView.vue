<template>
  <div class="home">
    <h1 class="titleHome">TODO LIST</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/views/ToDos/TodoList.vue'

export default {
  name: 'HomeView',
  data: () => ({
    search: '',
  }),
  components: {
    TodoList,
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/utilities/variables/all';

.titleHome {
  font-size: var(--font-size-md);
  margin: var(--gap-2);
  text-align: center;

  @media (min-width: 568px) {
    font-size: var(--font-size-xl);
    margin: var(--gap-4);
  }
}
</style>
