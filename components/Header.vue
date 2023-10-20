<template>
  <header>
    Header
    <div class="menu-left__side">
      <UiSvg v-for="(e, i) in menu" v-bind="e" />
    </div>
    <div class="menu-right__side">
      <UiSvg svg="bell-badge" />
      <UiSvg svg="brightness" @click="toggleDarkMode()" />
      <UiSvg svg="logout" />
      {{ isDark }} isDark {{ isDarkMode }} darkMode
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDarkModeStore } from "@/store/modules/darkMode/darkMode";
const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.getDarkMode);
const isDark = inject("isDark");
const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode();
};
const menu = ref([
  {
    title: "Календарь",
    svg: "calendar-month-outline",
    link: "",
    f: "#fff",
  },
  {
    title: "Главная",
    svg: "home",
    link: "",
    f: "#fff",
  },
  {
    title: "Обучение",
    svg: "school-outline",
    link: "",
    f: "#fff",
  },
  {
    title: "Обсуждения",
    svg: "comment-multiple",
    link: "",
    f: "#fff",
  },
]);
</script>

<style lang="scss">
header {
  background-color: $black-2;
  color: $white;
  height: 80px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 20px 22px;
}
svg {
  height: 24px;
  width: 24px;
}
.menu-right__side,
.menu-left__side {
  display: flex;
  width: 100%;
  gap: 20px;
}
.menu-right__side {
  justify-content: flex-end;
}
</style>
