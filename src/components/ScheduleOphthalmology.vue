<script setup></script>
<template>
  <div class="scheduleOphthalmology">
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>

<style lang="scss" scoped>
.scheduleOphthalmology {
  width: min(calc(100% - 4rem), 180rem);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0.4rem 2rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  margin: 0 auto;
  padding: 3rem 2rem;
}
</style>
