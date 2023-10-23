<script setup lang="ts">
import {useRecipesStore} from "@/stores/recipesStore";
import {watch} from "vue";
import InputWithLabelAndDescription from "@/components/InputWithLabelAndDescription.vue";

const recipes = useRecipesStore()

watch(recipes, () => {
  console.log({ recipes })
})
</script>

<template>
  <div class="container">
    <h2>Give your recipe a title</h2>
    <InputWithLabelAndDescription
        label="Enter title"
        description="Give your recipe's title some thought"
        placeholder="Fluffy Homemade Ciabatta Rolls"
        :value="recipes.newRecipe.data.title ?? ''"
        v-on:update:value="value => recipes.newRecipe.data.title = value"
    />
    <h2>And a description</h2>
    <InputWithLabelAndDescription
        label="Enter description"
        description="This is your time to shine, describe your masterpiece"
        placeholder="Alright, my friend. These here, Fluffy Homemade Ciabatta Rolls, they're a taste of the old country. Light as a feather, with a crust that'll make you sing. Perfecto for any spread, capisce?"
        render-as-component-type="textarea"
       :value="recipes.newRecipe.data.description"
        v-on:update:value="value => recipes.newRecipe.data.title = value"
    />
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
