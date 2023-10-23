<script setup lang="ts">
import {useRecipesStore} from "@/stores/recipesStore";
import SetTitleAndDescription from "@/components/SetDescription.vue";
import AddIngredients from "@/components/AddIngredients.vue";
import AddInstructions from "@/components/AddInstructions.vue";
import RecipeStepNavigator from "@/components/StepNavigator.vue";
import {computed, ref} from "vue";
import RecipePreviewer from "@/components/RecipePreviewer.vue";
import SetTitle from "@/components/SetTitle.vue";
import SetDescription from "@/components/SetDescription.vue";

const recipes = useRecipesStore()

const shouldDisplayRecipePreview = ref<boolean>(false)

const toggleRecipePreview = () => {
  shouldDisplayRecipePreview.value = !shouldDisplayRecipePreview.value
}

const stepIs = (step: number) => {
  if (shouldDisplayRecipePreview.value) return false
  else
    return recipes.recipeCreationStep === step
}
</script>
<template>
  <div class="recipe-creator">
    <SetTitle v-if="stepIs(0)"/>
    <SetDescription v-if="stepIs(1)"/>
    <AddIngredients v-if="stepIs(2)"/>
    <AddInstructions v-if="stepIs(3)"/>
    <RecipeStepNavigator v-if="!shouldDisplayRecipePreview"/>
    <RecipePreviewer :on-toggle="toggleRecipePreview" :is-previewing="shouldDisplayRecipePreview"/>
  </div>
</template>

<style scoped>
  .recipe-creator {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
</style>

