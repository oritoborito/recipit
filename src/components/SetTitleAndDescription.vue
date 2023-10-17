<script setup lang="ts">
import {useRecipesStore} from "@/stores/recipesStore";
import {watch} from "vue";

const recipes = useRecipesStore()

watch(recipes, () => {
  console.log({ recipes })
})
</script>

<template>
  <div class="container">
    <h2>Give your recipe a title</h2>
    <label for="">Enter title</label>
    <input type="text" aria-label="Enter title" v-model="recipes.newRecipe.data.title" placeholder="title">
    <h2>And a description</h2>
    <label for="">Enter description</label>
    <input type="text" aria-label="Enter description" v-model="recipes.newRecipe.data.description" placeholder="description">
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
