<script setup lang="ts">
import {useRecipesStore} from "@/stores/recipesStore";

const recipes = useRecipesStore()
</script>

<template>
  <div>
<!--    <p v-text="stepIsEmpty ? 'You need to fill out the form before you can continue': 'Press next when you have a nice title and description'"/>-->
    <button @click="recipes.newRecipe.step.next()">Next</button>
    <button v-if="recipes.newRecipe.data.currentStep > 0" @click="recipes.newRecipe.step.previous()">Previous</button>
  </div>
</template>
<style scoped>
@media (min-width: 1024px) {

}
</style>
