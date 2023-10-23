<script setup lang="ts">
import {useRoute} from "vue-router";
import {computed} from "vue";

const props = defineProps<{
  name: 'home' | 'recipes' | 'create-recipe' | 'about'
}>()

const route = useRoute()

const active = computed(() => {
  return route.name === props.name
})
</script>

<template>
  <router-link :to="{ name }" :class="{ active }">
    <slot/>
  </router-link>
</template>

<style scoped>
  .active {
    border-bottom: 2px solid var(--color-text);
  }
</style>
