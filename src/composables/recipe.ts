import type {Ingredient, Recipe} from "@/types";
import {faker} from "@faker-js/faker";
import {useIngredient} from "@/composables/ingredient";
import {useInstruction} from "@/composables/instruction";
import {ref} from "vue";
import {useStep} from "@/composables/step";

export function useRecipe() {
    const data = ref<Recipe>({
        id: faker.string.uuid(),
        title: faker.lorem.words({max: 3, min: 1}),
        description: faker.lorem.paragraph({max: 3, min: 1}),
        ingredients: [],
        instructions: [],
    })

    const newIngredient = useIngredient(data)
    const newInstruction = useInstruction(data)
    const step = useStep()

    const removeIngredient = (ingredient: Ingredient) => {
        data.value.ingredients = data.value.ingredients.filter(i => i.id !== ingredient.id)
    }

    return {
        data,
        newIngredient,
        newInstruction,
        step,
        removeIngredient,
    }
}
