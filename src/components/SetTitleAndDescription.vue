<script setup lang="ts">
  import {useRecipes} from "@/stores/recipes";
  import {storeToRefs} from "pinia";

  const recipes = useRecipes()
  const { newRecipe } = storeToRefs(recipes)
</script>

<template>
  <div class="container">
    <h2>Give your recipe a title</h2>
    <label for="">Enter title</label>
    <input type="text" aria-label="Enter title" v-model="newRecipe.title" placeholder="title">
    <h2>And a description</h2>
    <label for="">Enter description</label>
    <input type="text" aria-label="Enter description" v-model="newRecipe.description" placeholder="description">
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