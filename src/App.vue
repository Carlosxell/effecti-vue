<template>
  <main id="app" class="app">
    <!--     <router-link to="/about">About</router-link> -->
    <div class="app__container">
      <router-view />
    </div>

    <SpriteSVG />
  </main>
</template>

<script>
import SpriteSVG from '@/components/SpriteSVG.vue'

export default {
  components: { SpriteSVG },
}
</script>

<style lang="scss">
@import '@/assets/styles/app.scss';
@import '@/assets/styles/utilities/utils/all';
@import '@/assets/styles/utilities/variables/all';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  &:after,
  &:before {
    box-sizing: border-box;
  }
}

body {
  margin: 0;
}

#app {
  color: var(--color-dark-lightest);
  display: inline-block;
  font-family: $font-family-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  min-height: 100vh;
  max-width: 100vw;
  width: 100%;
}

.app {
  &__container {
    max-width: 768px;
    margin: 0 auto;
    padding: var(--gap-4);
  }
}
</style>
