<script setup lang="ts">
import {useRecipesStore} from "@/stores/recipesStore";
import {computed} from "vue";

const recipes = useRecipesStore()

const isOnFirstStep = computed(() => {
  return recipes.recipeCreationStep === 0
})

const next = () => recipes.increaseStep()
const previous = () => recipes.decreaseStep()
</script>

<template>
  <div class="step-navigator">
    <button @click="next()">Next</button>
    <button :disabled="isOnFirstStep" @click="previous()">Previous</button>
  </div>
</template>
<style scoped>
.step-navigator {
  display: flex;
  gap: 3rem;
}
</style>
