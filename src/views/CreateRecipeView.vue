<script setup lang="ts">
import SetTitleAndDescription from "@/components/SetTitleAndDescription.vue";
import AddIngredients from "@/components/AddIngredients.vue";
import AddInstructions from "@/components/AddInstructions.vue";
import StepNavigator from "@/components/StepNavigator.vue";
import {useRecipesStore} from "@/stores/recipesStore";

const recipes = useRecipesStore()
</script>

<template>
  <div class="app">
    <h1>recipit - makes it easy</h1>

    <SetTitleAndDescription v-if="recipes.newRecipe.step.current === 0"/>

    <AddIngredients v-if="recipes.newRecipe.step.current === 1"/>

    <AddInstructions v-if="recipes.newRecipe.step.current === 2"/>

    <StepNavigator />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

}
</style>
