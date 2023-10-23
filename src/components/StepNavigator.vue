<script setup lang="ts">
import {useRecipesStore} from "@/stores/recipesStore";
import {computed} from "vue";

const recipes = useRecipesStore()

const isOnFirstStep = computed(() => {
  console.log('lopa', recipes.recipeCreationStep > 0)
  return recipes.recipeCreationStep === 0
})

const next = () => recipes.increaseStep()
const previous = () => recipes.decreaseStep()
</script>

<template>
  <div>
<!--    <p v-text="stepIsEmpty ? 'You need to fill out the form before you can continue': 'Press next when you have a nice title and description'"/>-->
    <button @click="next()">Next</button>
    <button :disabled="isOnFirstStep" @click="previous()">Previous</button>
  </div>
</template>
<style scoped>
@media (min-width: 1024px) {

}
</style>
