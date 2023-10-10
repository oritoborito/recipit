<script setup lang="ts">
import {useRecipes} from "@/stores/recipes";
import {storeToRefs} from "pinia";

const recipes = useRecipes()
const { stepIsEmpty, step } = storeToRefs(recipes)
const { nextStep, previousStep } = recipes

</script>

<template>
  <div>
    <p v-text="stepIsEmpty ? 'You need to fill out the form before you can continue': 'Press next when you have a nice title and description'"/>
    <button :disabled="stepIsEmpty" @click="nextStep">Next</button>
    <button v-if="step > 0" @click="previousStep">Previous</button>
  </div>
</template>
<style scoped>
@media (min-width: 1024px) {

}
</style>