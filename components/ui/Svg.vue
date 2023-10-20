<template>
  <component
    v-if="tag"
    :is="tag"
    :style="{ height: h + 'px', width: w + 'px', fill: f }"
  ></component>
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
});

let tag = shallowRef("");

// Note this: `@` or `~` wont work
import(`../../assets/svg/${props.svg}.svg`).then((module) => {
  tag.value = module.default;
});
</script>

// Usage
<base-icon name="svg-name.svg" />
