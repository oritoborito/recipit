<script setup lang="ts">
import {useRecipesStore} from "@/stores/recipesStore";
import InputWithLabelAndDescription from "@/components/InputWithLabelAndDescription.vue";

const recipes = useRecipesStore()

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
  </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
