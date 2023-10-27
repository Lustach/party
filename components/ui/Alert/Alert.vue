<template>
  <div class="alert-container" :class="type">
    <IconInfo class="alert-icon" />
    <p class="alert-title">
      {{ title }}
    </p>
    <IconClose class="alert-close" @click="close" />
  </div>
</template>
<script setup lang="ts">
// import { defineEmits } from "vue";
import IconClose from "~/assets/svg/close.svg";
import IconInfo from "~/assets/svg/information-outline.svg";
type Props = {
  title: string;
  type: "info" | "warning" | "danger" | "success";
};
defineProps<Props>();
const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};
</script>
<style lang="scss" scoped>
.alert {
  &-container {
    width: 364px;
    height: 56px;
    padding: 16px 12px;
    font-size: 16px;
    display: flex;
    align-items: center;
    right: 12px;
    position: fixed;
    bottom: 12px;
    p {
      width: 100%;
    }
    border-radius: 8px;
  }
  &-title {
  }
  &-icon {
    margin-right: 12px;
  }
  &-close {
    margin-left: 8px;
  }
}
.info {
  background: $white;
  color: #307dfb;
  svg {
    fill: #307dfb;
  }
}
.success {
  background: #e1f9f2;
  color: #146354;
  svg {
    fill: #146354;
  }
}
.success {
  background: #d26d2b;
  color: #d26d2b;
  svg {
    fill: #d26d2b;
  }
}
.danger {
  background: #de5e78;
  color: #de5e78;
  svg {
    fill: #de5e78;
  }
}
</style>
