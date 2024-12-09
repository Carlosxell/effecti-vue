<template>
  <div class=""></div>
</template>

<script>
export default {
  name: 'AddForm',
  methods: {
    generateCustomID() {
      const timestamp = Date.now().toString(36)
      const random = Math.random().toString(36).substr(2, 5)
      const userID = 'user123' // Replace this with the user's ID or any relevant data
      return `${userID}-${timestamp}-${random}`
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/utilities/utils/all';
@import '@/assets/styles/utilities/variables/all';
</style>
