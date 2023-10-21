<template>
  <div :class="{ 'has-background': hasBg }">
    <component
      :is="tag"
      v-if="tag"
      :style="{ height: h + 'px', width: w + 'px', fill: f }"
    ></component>
  </div>
</template>

<script setup>
import { shallowRef } from "vue";
const props = defineProps({
  svg: {
    type: String,
    required: true,
  },
  w: {
    type: String,
    required: false,
    default: "30",
  },
  h: {
    type: String,
    required: false,
    default: "30",
  },
  f: {
    type: String,
    required: false,
    default: "#fff",
  },
  hasBg: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const tag = shallowRef("");

// Note this: `@` or `~` wont work
import(`../../assets/svg/${props.svg}.svg`).then((module) => {
  tag.value = module.default;
});
</script>
<style scoped lang="scss">
.has-background {
  background: #2c353d;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: $gray-hover;
    transition: all 0.3s ease;
  }
}
</style>
// Usage
<base-icon name="svg-name.svg" />
