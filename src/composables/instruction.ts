
import type {Instruction, Recipe} from "@/types";
import {faker} from "@faker-js/faker";
import type {Ref} from "vue";
import {computed, ref} from "vue";

export function useInstruction(recipe: Ref<Recipe>) {
    const instruction = ref<Instruction>({
        id: faker.string.uuid(),
        action: '',
        followUp: '',
        ingredient: {
            id: '',
            measurement: 'tablespoons',
            amount: 42,
            name: 'Testbuds'
        }
    })

    const isEmpty = computed(() => {
        return !instruction.value.action || !instruction.value.followUp || !instruction.value.ingredient
    })

    const reset = () => instruction.value = {
        id: faker.string.uuid(),
        action: '',
        followUp: '',
        ingredient: {
            id: '',
            measurement: 'tablespoons',
            amount: 42,
            name: 'Testbuds'
        }
    }

    const addToRecipe = () => {
        if (!instruction.value.ingredient) return
        recipe.value.instructions.push(instruction.value as Instruction)
        reset()
    }

    const removeFromRecipe = (instruction: Instruction) => {
        recipe.value.instructions = recipe.value.instructions.filter(i => i.id !== instruction.id)
    }

    return {
        instruction,
        isEmpty,
        addToRecipe,
        removeFromRecipe
    }
}
