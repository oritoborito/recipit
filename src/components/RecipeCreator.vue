<script setup lang="ts">
import {useRecipesStore} from "@/stores/recipesStore";
import AddInstructions from "@/components/AddInstructions.vue";
import RecipeStepNavigator from "@/components/StepNavigator.vue";
import {ref} from "vue";
import RecipePreviewer from "@/components/RecipePreviewer.vue";
import InputWithLabelAndDescription from "@/components/InputWithLabelAndDescription.vue";
import Button from "@/components/Button.vue";

const recipes = useRecipesStore()
const isPreviewingRecipe = ref<boolean>(false)
const toggleRecipePreview = () => {
  isPreviewingRecipe.value = !isPreviewingRecipe.value
}
const stepIs = (step: number) => {
  return recipes.recipeCreationStep === step
}

const displayComponent = (atStep: number) => {
  return stepIs(atStep) && !isPreviewingRecipe.value
}
</script>

<template>
  <div class="recipe-creator">
    <InputWithLabelAndDescription
        v-if="stepIs(0)"
        title="Give your recipe a title"
        label="Enter title"
        description="Give your recipe's title some thought"
        placeholder="Fluffy Homemade Ciabatta Rolls"
        :value="recipes.newRecipe.data.title ?? ''"
        v-on:update:value="value => recipes.newRecipe.data.title = value"
    />

    <InputWithLabelAndDescription
        v-if="displayComponent(1)"
        title="And a description"
        label="Enter description"
        description="This is your time to shine, describe your masterpiece"
        placeholder="Alright, my friend. These here, Fluffy Homemade Ciabatta Rolls, they're a taste of the old country. Light as a feather, with a crust that'll make you sing. Perfecto for any spread, capisce?"
        render-as-component-type="textarea"
        :value="recipes.newRecipe.data.description"
        v-on:update:value="value => recipes.newRecipe.data.title = value"
    />

    <InputWithLabelAndDescription
        v-if="displayComponent(2)"
        title="'Now, add some ingredients'"
        label="Enter ingredient name"
        description="Tell me, what makes this dish sing?"
        placeholder="Bread Flour"
        :value="recipes.newRecipe.newIngredient.data.name"
        v-on:update:value="value => recipes.newRecipe.newIngredient.data.name = value"
    />

    <InputWithLabelAndDescription
        v-if="displayComponent(3)"
        title="Alright, choose the unit of measurement"
        render-as-component-type="select"
        label="Select measurement"
        description="Grams, spoons, liters, keep it simple."
        :value="recipes.newRecipe.newIngredient.data.measurement"
        v-on:update:value="value => recipes.newRecipe.newIngredient.data.measurement = value"
    >
      <option value="grams">grams</option>
      <option value="milliliters">milliliters</option>
      <option value="teaspoons">teaspoons</option>
      <option value="tablespoons">tablespoons</option>
    </InputWithLabelAndDescription>

    <template v-if="displayComponent(4)">
      <InputWithLabelAndDescription
          title="Nice, how much?"
          type="number"
          pattern="[0-9]*"
          label="Enter number of units"
          description="Give me some of those delicious digits."
          placeholder="500"
          :value="recipes.newRecipe.newIngredient.data.amount"
          v-on:update:value="value => recipes.newRecipe.newIngredient.data.amount = value"
      />
      <Button :disabled="recipes.newRecipe.newIngredient.isEmpty"
              @click="recipes.newRecipe.newIngredient.addToRecipe()">
        Add ingredient
      </Button>
    </template>
    <AddInstructions v-if="displayComponent(5)"/>
    <RecipeStepNavigator v-if="!isPreviewingRecipe"/>
    <RecipePreviewer :on-toggle="toggleRecipePreview" :is-previewing="isPreviewingRecipe"/>
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

