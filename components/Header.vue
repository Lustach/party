<template>
  <header>Header 
    <Svg name="calendar-month-outline" w="30" h="30" f="#fff"/>
  </header>
</template>

<script setup>
// import Calendar from "@/assets/svg/calendar-month-outline.svg?component";
import Svg from "@/components/ui/SvgComponent.vue"
const isMobileMenu = ref(false);
const showMobileMenu = () => {
  // if (window.innerWidth <= 767) {
  //   isMobileMenu.value = !isMobileMenu.value;
  //   isMobileMenu.value ? setBodyOverflow() : deleteBodyOverflow();
  // }
};
const { x, y } = useMouse()
</script>

<style  lang="scss">
header {
  background-color: $black-2;
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
