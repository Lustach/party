<template>
  <NuxtLayout :name="'sidebars'">
    <div class="container">
      <UiPostPreview v-for="e in 6" :key="e" />
    </div>
  </NuxtLayout>
</template>
