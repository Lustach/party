<template>
  <Header />
  <main>
    <NuxtPage id="app" />
  </main>
  <UiAlert v-show="alert" type="info" title="title title" @close="closeAlert" />
</template>
<script setup lang="ts">
import { useDarkModeStore } from "@/store/modules/darkMode/darkMode";
const darkModeStore = useDarkModeStore();
provide(
  "isDark",
  computed(() => darkModeStore.getDarkMode)
);
const alert = ref(true);
const closeAlert = () => {
  alert.value = false;
};
</script>
<style lang="scss">
@import "@/assets/index.scss";
#__nuxt {
  min-height: calc(100vh);
  // - 64px
  background-color: $black-1;
}
main {
  /* margin-top: 64px; */
  height: 100%;
  display: flex;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  /* background-color: $black-1; */
}
</style>
