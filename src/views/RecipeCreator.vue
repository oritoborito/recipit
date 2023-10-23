<script setup lang="ts">
  import {useRecipesStore} from "@/stores/recipesStore";
  import SetTitleAndDescription from "@/components/SetTitleAndDescription.vue";
  import AddIngredients from "@/components/AddIngredients.vue";
  import AddInstructions from "@/components/AddInstructions.vue";
  import RecipeStepNavigator from "@/components/StepNavigator.vue";
  import Recipe from "@/components/RecipePreview.vue";
  import {computed, ref} from "vue";

  const recipes = useRecipesStore()

  const shouldDisplayRecipePreview = ref<boolean>(false)

  const toggleRecipeText = computed(() => {
    return shouldDisplayRecipePreview.value ? 'Close preview' : 'Preview recipe'
  })
  const toggleRecipePreview = () => {
    shouldDisplayRecipePreview.value = !shouldDisplayRecipePreview.value
  }

  const shouldDisplayComponentOnStep = (step: number) => {
    if (shouldDisplayRecipePreview.value) return false
    else
    return recipes.recipeCreationStep === step
  }
</script>
<template>
  <SetTitleAndDescription v-if="shouldDisplayComponentOnStep(0)" />
  <AddIngredients v-if="shouldDisplayComponentOnStep(1)"/>
  <AddInstructions v-if="shouldDisplayComponentOnStep(2)"/>
  <RecipeStepNavigator v-if="!shouldDisplayRecipePreview"/>
  <Recipe v-if="shouldDisplayRecipePreview" />
  <button @click="toggleRecipePreview">{{toggleRecipeText}}</button>
</template>
<style scoped>
@media (min-width: 1024px) {

}
</style>
