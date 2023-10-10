import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import {faker} from "@faker-js/faker";
import type {Ingredient, Instruction, Recipe} from "@/types";

export const useRecipes = defineStore('recipes', () => {

  const step = ref(0);
  const allRecipes = ref<Recipe[]>()

  const newRecipe = ref<Recipe>({
    id: faker.string.uuid(),
    title: faker.lorem.words({max:3, min: 1}),
    description: faker.lorem.paragraph({max: 3, min: 1 }),
    ingredients: [],
    instructions: []
  })

  const newIngredient = ref<Ingredient>({
    id: faker.string.uuid(),
    measurement: 'grams',
    amount: faker.number.int({max: 250, min: 1}),
    name: faker.lorem.words(1)
  })

  const newInstruction = ref<Instruction>({
      id: faker.string.uuid(),
      action: '',
      followUp: '',
      ingredient: null
  })

  const newIngredientIsEmpty = computed(() => {
    return !newIngredient.value.name || !newIngredient.value.amount || !newIngredient.value.measurement
  })

  const newInstructionIsEmpty = computed(() => {
    return !newInstruction.value.action || !newInstruction.value.followUp || !newInstruction.value.ingredient
  })

  const stepIsEmpty = computed(() => {
    if (step.value === 0) {
      return !newRecipe.value.title || !newRecipe.value.description
    }

    if (step.value === 1) {
      return !newRecipe.value.ingredients.length
    }
  })

  const nextStep = () => {
    step.value++
  }

  const previousStep = () => {
    step.value--
  }

  const addInstruction = () => {
    newRecipe.value.instructions.push(newInstruction.value)
    newInstruction.value = {
      id: faker.string.uuid(),
      action: '',
      followUp: '',
      ingredient: null
    }
  }

  const addIngredient = () => {
    newRecipe.value.ingredients.push(newIngredient.value)
    newIngredient.value = {
      id: faker.string.uuid(),
      measurement: 'grams',
      amount: faker.number.int({max: 250, min: 1}),
      name: faker.lorem.words(1),
    }
  }

  const removeIngredient = (id: string) => {
    newRecipe.value.ingredients = newRecipe.value.ingredients.filter(ingredient => ingredient.id !== id)
  }

  return {
    step,
    allRecipes,
    newRecipe,
    newIngredient,
    newInstruction,
    stepIsEmpty,
    newIngredientIsEmpty,
    newInstructionIsEmpty,
    nextStep,
    previousStep,
    addIngredient,
    addInstruction,
    removeIngredient,
  }

})
