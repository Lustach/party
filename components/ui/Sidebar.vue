<template>
  <div class="sidebar">
    <UiList :list="list" />
    <!-- <UiList title="Find the latest update" description="Find the latest update"/>
    <UiList title="Find the latest update" description="Find the latest update"/> -->
  </div>
</template>
<script setup lang="ts">
const list = [
  { title: "Newest and Recent", description: "Find the latest update" },
  {
    title: "Popular of the day",
    description: "Shots featured today by curators"
  },
  {
    title: "Following",
    description: "Explore from your favorite person"
  }
];
</script>
<style scoped lang="scss">
.sidebar {
  max-width: 336px;
  width: 100%;
  height: 100%;
  padding: 0 24px 16px 24px;
  /* background: $black-1; */
}
</style>
