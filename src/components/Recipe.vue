<script setup lang="ts">
import type {Instruction, Recipe} from "@/types";

  defineProps<{recipe: Recipe, onDeleteIngredient: (id: string) => void}>()

  const createInstuctionString = (instruction: Instruction) => {
    return `${instruction.action} ${instruction.ingredient.amount} ${instruction.ingredient.measurement} ${instruction.ingredient.name}, ${instruction.followUp}`
  }
</script>

<template>
  <h2>{{recipe.title}}</h2>
  <p>{{recipe.description}}</p>
  <hr>
  <ul>
    <h3>Ingredients</h3>
    <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">
      {{ingredient.amount}} {{ingredient.measurement}} {{ingredient.name}}
      <button @click="onDeleteIngredient(ingredient.id)">Remove ingredient</button>
    </li>
  </ul>
  <hr>
  <ol v-if="recipe.instructions.length">
    <h3>Instructions</h3>
    <li v-for="instruction in recipe.instructions" :key="instruction.id">
      {{createInstuctionString(instruction)}}
    </li>
  </ol>
  <hr>
</template>

<style scoped>
 hr {
    margin: 0.5rem 0;
 }

</style>