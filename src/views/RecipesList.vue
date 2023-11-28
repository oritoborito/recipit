<script setup lang="ts">

import {useRouter} from "vue-router";
import {useRecipesStore} from "@/stores/recipesStore";
import {storeToRefs} from "pinia";
import Button from "@/components/Button.vue";
import AppNavigationLink from "@/components/NavigationLink.vue";

const router = useRouter()

const recipes = useRecipesStore()
const {allRecipes} = storeToRefs(recipes)

const navigateToCreateRecipe = () => {
  router.push('/create-recipe')
}

</script>

<template>
  <ul v-if="allRecipes !== undefined">
    <li v-for="recipe in allRecipes" :key="recipe.id">
      <div>
        <h3>{{ recipe.title }}</h3>
        <p>{{ recipe.description }}</p>
        <Button @click="navigateToCreateRecipe">edit recipe</Button>
      </div>
    </li>
  </ul>
  <div v-else>
    <p>looks like you don't have any recipes yet</p>
    <p>click the button below to get started</p>
    <AppNavigationLink name="create-recipe">create Recipe</AppNavigationLink>
  </div>
</template>

<style scoped>
  a {
    margin-top: 2em;
  }
</style>
