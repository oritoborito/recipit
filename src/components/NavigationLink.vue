<script setup lang="ts">
defineProps<{
  name: 'home' | 'recipes' | 'create-recipe' | 'about'
}>()
</script>

<template>
  <router-link :to="{ name }">
    <slot/>
  </router-link>
</template>

<style scoped>
  a {
    display: inline-block;
    text-decoration: none;
    background-color: transparent;
    color: var(--color-text);
    border: 1px solid var(--color-text);
    font-size: 12pt;
    padding: 0.5em;
    min-height: 46px;
    border-radius: 1pt;
  }

  @media (min-width: 600px) {
    a {
      font-size: 14pt;
    }
  }
</style>
