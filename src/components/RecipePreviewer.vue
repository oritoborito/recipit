<script setup lang="ts">
import Recipe from "@/components/Recipe.vue";
import {computed} from "vue";

const props = defineProps<{
  onToggle: () => void
  isPreviewing: boolean
}>()

const toggleRecipeText = computed(() => {
  return props.isPreviewing ? 'Close preview' : 'Preview recipe'
})
</script>

<template>
  <Recipe v-if="isPreviewing" />
  <button @click="onToggle">{{toggleRecipeText}}</button>
</template>

<style scoped>

</style>
