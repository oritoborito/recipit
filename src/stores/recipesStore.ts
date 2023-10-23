import {ref} from 'vue'
import {defineStore} from 'pinia'
import type {Recipe} from "@/types";
import {useRecipe} from "@/composables/recipe";

export const useRecipesStore = defineStore('recipes', () => {
    const allRecipes = ref<Recipe[]>()
    const newRecipe = useRecipe()
    const recipeCreationStep = ref<number>(0);

    const increaseStep = () => recipeCreationStep.value++
    const decreaseStep = () => recipeCreationStep.value--

    return {allRecipes, newRecipe, recipeCreationStep, increaseStep, decreaseStep}
})
