<template>
  <div>
    <Header />
  </div>
</template>
<script setup lang="ts">
import { useDarkModeStore } from "@/store/modules/darkMode/darkMode";
const darkModeStore = useDarkModeStore();
provide(
  "isDark",
  computed(() => darkModeStore.getDarkMode)
);
</script>
<style lang="scss">
@import "@/assets/index.scss";
</style>
