import type {Ref} from "vue";
import type {Ingredient, Recipe} from "@/types";
import {computed, ref} from "vue";
import {faker} from "@faker-js/faker";


export function useIngredient(recipe: Ref<Recipe>) {
    const data = ref<Ingredient>({
        id: faker.string.uuid(),
        measurement: 'grams',
        amount: faker.number.int({max: 250, min: 1}),
        name: faker.lorem.words(1)
    })

    const isEmpty = computed(() => {
        return !data.value.name || !data.value.amount || !data.value.measurement
    })

    const resetIngredient = () => {
        data.value = {
            id: faker.string.uuid(),
            measurement: 'grams',
            amount: faker.number.int({max: 250, min: 1}),
            name: faker.lorem.words(1),
        }
    }

    const addToRecipe = () => {
        recipe.value.ingredients.push(data.value)
        resetIngredient()
    }

    const removeFromRecipe = (ingredient: Ingredient) => {
        recipe.value.ingredients = recipe.value.ingredients.filter(i => i.id !== ingredient.id)
    }


    return {
        data,
        isEmpty,
        addToRecipe,
        removeFromRecipe
    }
}
