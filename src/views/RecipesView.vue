<script setup lang="ts">
import {useRouter} from "vue-router";
import {useRecipes} from "@/stores/recipes";
import {storeToRefs} from "pinia";

const router = useRouter()

const recipes = useRecipes()
const { allRecipes } = storeToRefs(recipes)

const navigateToCreateRecipe = () => {
  router.push('/create-recipe')
}


</script>

<template>
  <div class="app">
    <h1>recipit - makes it easy</h1>
    <div class="recipes">
      <h2>recipes</h2>
      <ul v-if="allRecipes !== undefined">
        <li v-for="recipe in allRecipes" :key="recipe.id">
          <div>
            <h3>{{recipe.title}}</h3>
            <p>{{recipe.description}}</p>
            <button @click="navigateToCreateRecipe">Edit recipe</button>
          </div>
        </li>
      </ul>
      <div v-else>
        <p>Looks like you don't have any recipes yet</p>
        <p>Click the button below to get started</p>
        <button @click="navigateToCreateRecipe">Create Recipe</button>
      </div>
    </div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
