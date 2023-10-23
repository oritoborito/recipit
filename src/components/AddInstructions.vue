<script setup lang="ts">
import {useRecipesStore} from "@/stores/recipesStore";
import InputWithLabelAndDescription from "@/components/InputWithLabelAndDescription.vue";

const recipes = useRecipesStore()
console.log({recipes})
</script>

<template>
  <div class="container">
    <h2>Finally, add some instructions</h2>
    <InputWithLabelAndDescription
      render-as-component-type="select"
      label="Select ingredient"
      description="Which ingredient do you want to add an instruction for?"
      :value="recipes.newRecipe.newInstruction.instruction.ingredient.name"
      v-on:update:value="value => recipes.newRecipe.newInstruction.instruction.ingredient = value"
    >
      <option v-for="ingredient in recipes.newRecipe.data.ingredients" :key="ingredient.id" :value="ingredient">
        {{ ingredient.name }}
      </option>
    </InputWithLabelAndDescription>


    <InputWithLabelAndDescription
        label="Action"
        description="What do you want to do with this ingredient?"
        placeholder="Add to bowl, slice, dice, etc."
        :value="recipes.newRecipe.newInstruction.instruction.action ?? ''"
        v-on:update:value="value => recipes.newRecipe.newInstruction.instruction.action = value"
    />

    <InputWithLabelAndDescription
        label="Follow-up"
        description="What do you want to do with this ingredient after the action?"
        placeholder="Stir in the rest of the ingredients"
        :value="recipes.newRecipe.newInstruction.instruction.followUp ?? ''"
        v-on:update:value="value => recipes.newRecipe.newInstruction.instruction.followUp = value"
    />

    <button  @click="recipes.newRecipe.newInstruction.addToRecipe()">Add instruction</button>
  </div>
</template>

<style scoped>


.container {
  display: grid;
  gap: 2rem;
}

</style>
