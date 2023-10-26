<template>
  <div class="chip-container">
    <p v-for="(e,i) in labels" :key="i" class="chip-label">
      {{ e }}
    </p>
  </div>
</template>
<script setup lang="ts">
type Props = {
  labels: String[];
};
const props = defineProps<Props>();
</script>
<style scoped lang="scss">
.chip {
  &-container {
    width: fit-content;
    padding: 4px 10px;
    font-size: 14px;
    border-radius: 20px;
    color: $gray-2;
    background: $black-3;
    cursor: pointer;
    &:hover{
        background-color: $gray-hover;
    }
  }
}
</style>
