<template>
  <div class="post-container">
    <h2 class="title">
      Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок
      <IconBookmark />
    </h2>
    <div class="info-container">
      <div class="tags">
        <UiChip :labels="['Экономика']" />
      </div>
      <div class="actions">
        <div class="profile">profileInfo</div>
        <div class="actions-panel">
          <p><span>2131</span><IconEye /></p>
          <p><span>4412</span><IconArrowUp /></p>
          <p><span>124</span><IconArrowDown /></p>
          <p><span>124</span><IconComment /></p>
          <p><span>1</span><IconGavel /></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconEye from "~/assets/svg/eye-outline.svg";
import IconArrowUp from "~/assets/svg/post-preview/arrow-up-bold-box-outline.svg";
import IconArrowDown from "~/assets/svg/post-preview/arrow-down-bold-box-outline.svg";
import IconComment from "~/assets/svg/post-preview/comment-text-multiple-outline.svg";
import IconGavel from "~/assets/svg/post-preview/gavel.svg";
import IconBookmark from "~/assets/svg/post-preview/bookmark-multiple-outline.svg";

// import ArrowUp from "~/assets/svg/post-preview/arrow-up-bold-box-outline.svg"
</script>
<style lang="scss" scoped>
.post-container {
  display: flex;
  flex-direction: column;
  background: $black-2;
  padding: 20px 40px 20px 20px;
  height: 162px;
  /* max-width: 785px; */
  width: 100%;
  max-height: 162px;
  height: auto;
  border-radius: 16px;
  margin-bottom: 20px;
}
.title {
  font-size: 18px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tags {
  margin-bottom: 8px;
}
.actions {
  &-panel {
    display: flex;
    justify-content: flex-end;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        margin: 0 8px;
        font-size: 14px;
      }
      margin-left: 0 12px;
    }
  }
}
svg {
  width: 24px;
  height: 24px;
  fill: $gray-2;
  cursor: pointer;
  &:hover {
    fill: $light-gray-3;
  }
}
</style>
