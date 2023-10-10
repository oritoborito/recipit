import {ref} from "vue";

import {faker} from "@faker-js/faker";

import {useRouter} from "vue-router";

import type {Recipe} from "@/types";


const recipeData: Recipe[] = [
  {
    id: faker.string.uuid(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraph(),
    ingredients: [
      {
        id: faker.string.uuid(),
        measurement: 'grams',
        amount: faker.number.int(),
        name: faker.lorem.words(1)
      }
    ],
    instructions: [
      {
        id: faker.string.uuid(),
        description: faker.lorem.paragraph(),
        ingredient: {
          id: faker.string.uuid(),
          measurement: 'grams',
          amount: faker.number.int(),
          name: faker.lorem.words()
        }
      }
    ]
  }
]

export function useRecipes() {
  const recipes = ref<Recipe[]>()
  const newRecipe = ref<Recipe>({
    id: faker.string.uuid(),
    title: '',
    description: '',
    ingredients: [],
    instructions: []
  })

  const getRecipes = async () => {

    await new Promise(resolve => setTimeout(resolve, 1000))

    recipes.value = recipeData
  }

  return {recipes, newRecipe, getRecipes}
}



