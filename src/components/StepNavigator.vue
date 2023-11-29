<script setup lang="ts">
import {useRecipesStore} from "@/stores/recipesStore";
import {computed} from "vue";
import Button from "@/components/SimpleButton.vue";

const recipes = useRecipesStore()

const isOnFirstStep = computed(() => {
  return recipes.recipeCreationStep === 0
})

const next = () => recipes.increaseStep()
const previous = () => recipes.decreaseStep()
</script>

<template>
  <div class="step-navigator">
    <Button @click="next()">Next</Button>
    <Button :disabled="isOnFirstStep" @click="previous()">Previous</Button>
  </div>
</template>
<style scoped>
.step-navigator {
  display: flex;
  gap: 3rem;
}
</style>
