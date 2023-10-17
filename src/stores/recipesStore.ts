import {ref} from 'vue'
import {defineStore} from 'pinia'
import type {Recipe} from "@/types";
import {useRecipe} from "@/composables/recipe";

export const useRecipesStore = defineStore('recipes', () => {
    const allRecipes = ref<Recipe[]>()
    const newRecipe = useRecipe()

    return {allRecipes, newRecipe}
})
