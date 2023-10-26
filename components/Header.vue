<template>
  <header>
    Logo
    <div class="menu-left__side">
      <NuxtLink v-for="(e, i) in menu" :key="i" :to="e.to">
        <UiSvg v-bind="e" />
      </NuxtLink>
    </div>
    <div style="max-width: 440px;width: 100%;margin: 10px;height: 40px;">
      <Input
        id="input"
        v-model="customFirst"
        class="input-mini"
        type="text"
        spellcheck="false"
        placeholder="Поиск..."
        :with-copy="true"
        style="width: 100%;"
        icon="magnify"
        @blur="setCustomPath"
      />
    </div>
    <div class="menu-right__side">
      <UiSvg svg="bell-badge" title="Уведомления" />
      <UiSvg svg="brightness" title="Цветовая тема" @click="toggleDarkMode()" />
      <UiSvg svg="logout" title="Выйти" />
      <!-- {{ isDark }} isDark {{ isDarkMode }} darkMode -->
    </div>
  </header>
</template>

<script setup lang="ts">
import Input from "@/components/ui/Input/Input.vue";
import { useDarkModeStore } from "@/store/modules/darkMode/darkMode";

const setCustomPath = (e: string) => {
  console.log(e)
}
const customFirst = ref("")

const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.getDarkMode);
const isDark = inject("isDark");
const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode();
};
const menu = ref([
  {
    title: "Главная",
    svg: "home",
    to: "/test",
    f: "#fff"
  },
  {
    title: "Календарь",
    svg: "calendar-month-outline",
    to: "/calendar",
    f: "#fff"
  },
  {
    title: "Обучение",
    svg: "school-outline",
    to: "/education",
    f: "#fff"
  },
  {
    title: "Обсуждения",
    svg: "comment-multiple",
    to: "/discussion",
    f: "#fff"
  }
]);
</script>

<style lang="scss" scoped>
header {
  background-color: $black-2;
  color: $white;
  height: 64px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 20px 22px;
  margin-bottom: 20px;
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
.menu-left__side {
  &:first-child{
    margin-left: 40px;
  }
}
/* .menu-left__side{
  width: auto;
} */
a.router-link-active {
  font-weight: bold;
  fill: red;
}
/* exact link will show the primary color for only the exact matching link */
a.router-link-exact-active div {
  background: $orange;
}
</style>
