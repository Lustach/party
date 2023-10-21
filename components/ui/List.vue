<template>
  <div class="card-container">
    <div class="list-container" v-for="(e, i) in list">
      <UiSvg svg="home" class="list-icon" w="20" h="20" />
      <div class="list-info">
        <p class="info__title">{{ e.title }}</p>
        <p class="info__description">{{ e.description }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
type listItem = {
  title: string;
  description: string;
};
type Props = {
  list: listItem[];
};
const props = defineProps<Props>();
</script>
<style scoped lang="scss">
.card-container {
  background: $black-2;
  border-radius: 16px;
  padding: 10px;
  min-width: 210px;
  min-height: 180px;
}
.list {
  &-container {
    padding: 6px;
    border-radius: 6px;
    min-height: 46px;
    margin: 10px;
    display: flex;
    &:hover {
      transition: all 0.3s ease;
      cursor: pointer;
      background-color: $gray-hover;
    }
    /* width: 100%; */
  }
  &-info {
    display: flex;
    flex-direction: column;
  }
  &-icon {
    margin: 3px 6px 3px 0;
    width: 28px;
    height: 28px;
  }
}
.info {
  &__title {
    font-size: 16px;
    /* color: #97989d; */
  }
  &__description {
    font-size: 12px;
    color: #97989d;
  }
}
</style>
