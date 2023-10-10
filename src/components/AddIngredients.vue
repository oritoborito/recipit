<script setup lang="ts">
  import Recipe from "@/components/Recipe.vue";
  import {useRecipes} from "@/stores/recipes";
  import {storeToRefs} from "pinia";

  const recipes = useRecipes();
  const { newRecipe, newIngredient } = storeToRefs(recipes);
  const {removeIngredient, addIngredient} = recipes
</script>

<template>
  <div class="container">
    <Recipe :recipe="newRecipe" :on-delete-ingredient="removeIngredient"/>
    <h3 v-text="!newRecipe.ingredients.length ? 'Now, add some ingredients' : 'Nice, add some more stuff' "></h3>
    <label>Enter ingredient name</label>
    <input type="text" aria-label="Ingredient name" v-model="newIngredient.name" placeholder="Ingredient name">
    <label>Select unit of measurement</label>
    <select aria-label="Select unit of measurement" v-model="newIngredient.measurement">
      <option value="grams">grams</option>
      <option value="milliliters">milliliters</option>
      <option value="teaspoons">teaspoons</option>
      <option value="tablespoons">tablespoons</option>
    </select>
    <label>Enter ingredient amount</label>
    <input type="number" pattern="[0-9]*" aria-label="Ingredient amount" v-model="newIngredient.amount"
           placeholder="Ingredient amount">
    <button :disabled="newIngredientIsEmpty" @click="addIngredient">Add ingredient</button>
  </div>
</template>

<style scoped>
  @media (min-width: 1024px) {
    .container {
      display: flex;
      flex-direction: column;
      gap: .2rem;
    }
  }
</style>