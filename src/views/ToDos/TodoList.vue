<template>
  <div class="">
    <FormInput placeholder="Search Note" v-model="search" />
  </div>
</template>

<script>
// @ is an alias to /src
import FormInput from '@/components/Input.vue'

export default {
  name: 'TodoList',
  components: { FormInput },
  data: () => ({
    search: '',
  }),
}
</script>

<style lang="scss"></style>
