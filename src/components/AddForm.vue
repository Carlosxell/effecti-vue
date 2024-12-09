<template>
  <form @submit.prevent="handleSubmit" class="addForm" :class="{ 'addForm--active': formIsOpen }">
    <div class="addForm__grid">
      <FormInput v-model="form.title" placeholder="Title" />
      <FormSelect
        title-text="text"
        title-value="value"
        :list="priorityList"
        placeholder="Priority"
        v-model="form.priority"
      />
    </div>

    <FormTextArea v-model="form.description" placeholder="Description" />
    <FormButton
      class="addForm__submitBtn"
      :disabled="!form.description || !form.priority || !form.title"
      type="submit"
    >
      {{ getEditStatus ? 'Update' : 'Add' }}
    </FormButton>
  </form>
</template>

<script>
import FormInput from '@/components/Input.vue'
import FormTextArea from '@/components/TextArea.vue'
import FormSelect from '@/components/Select.vue'
import FormButton from '@/components/Button.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AddForm',
  components: { FormButton, FormSelect, FormTextArea, FormInput },
  data: () => ({
    form: {
      title: '',
      description: '',
      priority: 'LOW',
    },
    priorityList: [
      { text: 'LOW', value: 'LOW' },
      { text: 'MEDIUM', value: 'MEDIUM' },
      { text: 'HIGH', value: 'HIGH' },
    ],
  }),
  computed: {
    ...mapGetters({
      formIsOpen: 'TodoModule/getFormStatus',
      getEditStatus: 'TodoModule/getEditStatus',
      getTransitionData: 'TodoModule/getTransitionData',
    }),
  },
  methods: {
    ...mapActions({
      addTransitionData: 'TodoModule/addTransitionData',
      addTask: 'TodoModule/addTask',
      editTask: 'TodoModule/editTask',
      setFormStatus: 'TodoModule/setFormStatus',
      setEditStatus: 'TodoModule/setEditStatus',
    }),
    generateCustomID() {
      const timestamp = Date.now().toString(36)
      const random = Math.random().toString(36).substr(2, 5)
      const userID = 'user123' // Replace this with the user's ID or any relevant data
      return `${userID}-${timestamp}-${random}`
    },
    handleSubmit() {
      const form = { ...this.form, id: this.generateCustomID(), completed: false }

      if (this.getEditStatus) {
        this.editTask({ ...this.form })
        this.setEditStatus(false)
        this.addTransitionData({})
      } else {
        this.addTask(form)
      }

      this.setFormStatus(false)
    },
  },
  watch: {
    getTransitionData(current) {
      this.form = { ...current }
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/utilities/utils/all';
@import '@/assets/styles/utilities/variables/all';

.addForm {
  border: var(--border-width-md) solid var(--color-dark-lightest);
  border-radius: var(--border-radius-sm);
  height: 0;
  padding: var(--gap-2);
  margin: var(--gap-2) 0;
  transition: transform 0.12s linear, height 0.12s linear;
  transform: scaleY(0);
  will-change: transform, height;

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap-2);
    padding-bottom: var(--gap-2);
  }

  &__submitBtn {
    display: block;
    margin: var(--gap-2) 0 0 auto;
    padding: var(--gap-1) var(--gap-3);
  }

  &--active {
    height: 100%;
    transform: scaleY(1);
  }
}
</style>
