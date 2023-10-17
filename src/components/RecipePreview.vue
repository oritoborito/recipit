<script setup lang="ts">
import type {Instruction} from "@/types";
import {useRecipesStore} from "@/stores/recipesStore";


const recipes = useRecipesStore()
const createInstuctionString = ({action, followUp, ingredient}: Instruction) => {
  return `${action} ${ingredient.name}, ${followUp}`
}

</script>

<template>
  <h2>{{ recipes.newRecipe.data.title }}</h2>
  <p>{{ recipes.newRecipe.data.description }}</p>
  <hr>
  <ul>
    <h3>Ingredients</h3>
    <li v-for="ingredient in recipes.newRecipe.data.ingredients" :key="ingredient.id">
      {{ ingredient.amount }} {{ ingredient.measurement }} {{ ingredient.name }}
      <button @click="recipes.newRecipe.removeIngredient(ingredient)">Remove ingredient</button>
    </li>
  </ul>
  <hr>
  <ol v-if="recipes.newRecipe.data.instructions.length">
    <h3>Instructions</h3>
    <li v-for="instruction in recipes.newRecipe.data.instructions" :key="instruction.id">
      {{ createInstuctionString(instruction) }}
    </li>
  </ol>
  <hr>
</template>

<style scoped>
hr {
  margin: 0.5rem 0;
}

</style>
