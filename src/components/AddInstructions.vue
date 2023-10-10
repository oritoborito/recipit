<script setup lang="ts">
  import {useRecipes} from "@/stores/recipes";
  import {storeToRefs} from "pinia";
  import Recipe from "@/components/Recipe.vue";

  const recipes = useRecipes()
  const { newRecipe, newInstruction, newInstructionIsEmpty } = storeToRefs(recipes)
  const {removeIngredient,  addInstruction} = recipes
</script>

<template>
  <div class="container">
    <Recipe :recipe="newRecipe" :on-delete-ingredient="removeIngredient"/>

    <h3>Now, add some instructions</h3>
    <label>Select ingredient</label>
    <p>Which ingredient do you want to add an instruction for?</p>
    <select aria-label="Select ingredient" v-model="newInstruction.ingredient">
      <option v-for="ingredient in newRecipe.ingredients" :key="ingredient.id" :value="ingredient">{{ingredient.name}}
      </option>
    </select>
    <label>Action</label>
    <p>What do you want to do with this ingredient?</p>
    <input type="text" aria-label="Action" v-model="newInstruction.action" placeholder="Chop, dice, etc.">

    <label>Follow-up</label>
    <p>What do you want to do with this ingredient after the action?</p>
    <input type="text" aria-label="Follow-up" v-model="newInstruction.followUp" placeholder="Add to pan, etc.">

    <button :disabled="newInstructionIsEmpty" @click="addInstruction">Add instruction</button>
  </div>
</template>

<style scoped>


  .container {
    display: flex;
    flex-direction: column;
    gap: .2rem;
  }

</style>