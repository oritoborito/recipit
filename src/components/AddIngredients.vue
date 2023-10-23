<script setup lang="ts">
  import Recipe from "@/components/RecipePreview.vue";
  import {useRecipesStore} from "@/stores/recipesStore";
  import InputWithLabelAndDescription from "@/components/InputWithLabelAndDescription.vue";
  import {computed} from "vue";
  const recipes = useRecipesStore();

  const readableIngredient = computed(() => {
    const {newRecipe} = recipes
    const {newIngredient} = newRecipe
    const {data} = newIngredient
    console.log(data.name)
    return `${data.name}, ${data.name} ${data.measurement}`
  })

</script>

<template>
  <div class="container">
    <h2 v-text="!recipes.newRecipe.data.ingredients.length ? 'Now, add some ingredients' : 'Nice, add some more stuff' "></h2>
    <InputWithLabelAndDescription
        label="Enter ingredient name"
        description="Tell me, what makes this dish sing?"
        placeholder="Bread Flour"
        :value="recipes.newRecipe.newIngredient.data.name"
        v-on:update:value="value => recipes.newRecipe.newIngredient.data.name = value"
    />
    <InputWithLabelAndDescription
      render-as-component-type="select"
      label="Alright, choose the unit of measurement"
      description="Grams, spoons, liters, keep it simple."
      :value="recipes.newRecipe.newIngredient.data.measurement"
      v-on:update:value="value => recipes.newRecipe.newIngredient.data.measurement = value"
    >
      <option value="grams">grams</option>
      <option value="milliliters">milliliters</option>
      <option value="teaspoons">teaspoons</option>
      <option value="tablespoons">tablespoons</option>
    </InputWithLabelAndDescription>
    <InputWithLabelAndDescription
        type="number"
        pattern="[0-9]*"
        label="How much of the good stuff?"
        description="Give me some of those delicious digits."
        placeholder="500"
        :value="recipes.newRecipe.newIngredient.data.amount"
        v-on:update:value="value => recipes.newRecipe.newIngredient.data.amount = value"
    />
    <button :disabled="recipes.newRecipe.newIngredient.isEmpty" @click="recipes.newRecipe.newIngredient.addToRecipe()">Add ingredient</button>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
