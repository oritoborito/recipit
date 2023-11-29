<script setup lang="ts">

</script>

<template>
<main>
  <slot></slot>
</main>
</template>

<style scoped>
main {
  overflow: scroll;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  margin: 16px;
}
</style>
