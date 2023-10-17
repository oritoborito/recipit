<script setup lang="ts">
import {useRecipesStore} from "@/stores/recipesStore";
import Recipe from "@/components/RecipePreview.vue";
import InputWithLabelAndDescription from "@/components/InputWithLabelAndDescription.vue";

const recipes = useRecipesStore()
console.log({recipes})
</script>

<template>
  <div class="container">
    <Recipe />

    <h3>Now, add some instructions</h3>
    <label>Select ingredient</label>
    <p>Which ingredient do you want to add an instruction for?</p>
    <select aria-label="Select ingredient" v-model="recipes.newRecipe.newInstruction.instruction.ingredient">
      <option v-for="ingredient in recipes.newRecipe.data.ingredients" :key="ingredient.id" :value="ingredient">{{ ingredient.name }}
      </option>
    </select>


    <InputWithLabelAndDescription
        label="Action"
        description="What do you want to do with this ingredient?"
        placeholder="Chop, dice, etc."
        :value="recipes.newRecipe.newInstruction.instruction.action ?? ''"
        v-on:update:value="value => recipes.newRecipe.newInstruction.instruction.action = value"
    />

    <InputWithLabelAndDescription
        label="Follow-up"
        description="What do you want to do with this ingredient after the action?"
        placeholder="Add to pan, etc."
        :value="recipes.newRecipe.newInstruction.instruction.followUp ?? ''"
        v-on:update:value="value => recipes.newRecipe.newInstruction.instruction.followUp = value"
    />

    <button :disabled="recipes.newRecipe.newInstruction.isEmpty" @click="recipes.newRecipe.newInstruction.addToRecipe()">Add instruction</button>
  </div>
</template>

<style scoped>


.container {
  display: grid;
  gap: 2rem;
}

</style>
