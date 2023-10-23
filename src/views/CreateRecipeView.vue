<script setup lang="ts">
import RecipeCreator from "@/views/RecipeCreator.vue";
</script>

<template>
  <div class="app">
    <h1>recipit - makes it easy</h1>

    <RecipeCreator/>

  </div>
</template>

<style scoped>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
</style>
