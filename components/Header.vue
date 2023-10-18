<template>
  <header>Header 
    <Svg name="calendar-month-outline" w="30" h="30" f="#fff"/>
  </header>
</template>

<script setup>
// import Calendar from "@/assets/svg/calendar-month-outline.svg?component";
import Svg from "@/components/ui/SvgComponent.vue"
const isMobileMenu = ref(false);
const menu = ref([
  {
    name: "Проекты",
    to: "#work",
    toShow: true,
  },
  {
    name: "Обо мне",
    to: "#about_me",
    toShow: true,
  },
  // {
  //   name: 'Блог',
  //   to: '#blog',
  //   toShow: false,
  // },
  // {
  //   name: 'Контакты',
  //   to: '#contacts',
  //   toShow: false,
  // }
]);
const showMobileMenu = () => {
  // if (window.innerWidth <= 767) {
  //   isMobileMenu.value = !isMobileMenu.value;
  //   isMobileMenu.value ? setBodyOverflow() : deleteBodyOverflow();
  // }
};
</script>

<style scoped lang="scss">
header {
  background-color: #262d34;
  height: 80px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 20px 22px;
}
svg{
  height: 24px;
  width: 24px;
}
</style>
