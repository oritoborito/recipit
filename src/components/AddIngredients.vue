<script setup lang="ts">
  import Recipe from "@/components/RecipePreview.vue";
  import {useRecipesStore} from "@/stores/recipesStore";
  const recipes = useRecipesStore();
</script>

<template>
  <div class="container">
    <Recipe />
    <h3 v-text="!recipes.newRecipe.data.ingredients.length ? 'Now, add some ingredients' : 'Nice, add some more stuff' "></h3>
    <label>Enter ingredient name</label>
    <input type="text" aria-label="Ingredient name" v-model="recipes.newRecipe.newIngredient.data.name" placeholder="Ingredient name">
    <label>Select unit of measurement</label>
    <select aria-label="Select unit of measurement" v-model="recipes.newRecipe.newIngredient.data.measurement">
      <option value="grams">grams</option>
      <option value="milliliters">milliliters</option>
      <option value="teaspoons">teaspoons</option>
      <option value="tablespoons">tablespoons</option>
    </select>
    <label>Enter ingredient amount</label>
    <input type="number" pattern="[0-9]*" aria-label="Ingredient amount" v-model="recipes.newRecipe.newIngredient.data.amount"
           placeholder="Ingredient amount">
    <button :disabled="recipes.newRecipe.newIngredient.isEmpty" @click="recipes.newRecipe.newIngredient.addToRecipe()">Add ingredient</button>
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
