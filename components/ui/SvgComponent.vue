<template>
  <component
    v-if="tag"
    :is="tag"
    :style="{ height: h + 'px', width: w + 'px', fill: f, }"
  ></component>
</template>

<script setup>
import { shallowRef } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  w: {
    type: String,
    required: false,
  },
  h: {
    type: String,
    required: false,
  },
  f: {
    type: String,
    required: false,
  }
});

let tag = shallowRef("");

// Note this: `@` or `~` wont work
import(`../../assets/svg/${props.name}.svg`).then((module) => {
  tag.value = module.default;
});
</script>

// Usage
<base-icon name="svg-name.svg" />
