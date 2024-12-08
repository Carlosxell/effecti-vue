<template>
  <!-- prettier-ignore -->
  <svg aria-hidden="true" class="spriteSVG" xmlns="http://www.w3.org/2000/svg">
    <symbol id="add" viewBox="0 0 24 24">
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </symbol>

    <symbol id="add_circle" viewBox="0 0 24 24">
      <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
    </symbol>

    <symbol id="close" viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
    </symbol>

    <symbol id="delete" viewBox="0 0 24 24">
      <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" />
    </symbol>

    <symbol id="edit" viewBox="0 0 24 24">
      <path d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02V9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3V3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19V6.19Z" />
    </symbol>

    <symbol id="undo" viewBox="0 0 24 24">
      <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/>
    </symbol>
  </svg>
</template>

<script>
export default {
  name: 'SpriteSVG',
}
</script>

<style lang="scss">
.spriteSVG {
  display: none;
}
</style>
