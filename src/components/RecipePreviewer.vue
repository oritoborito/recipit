<script setup lang="ts">
import Recipe from "@/components/Recipe.vue";
import {computed} from "vue";
import Button from "@/components/Button.vue";

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
  <Button @click="onToggle">{{toggleRecipeText}}</Button>
</template>

<style scoped>

</style>
