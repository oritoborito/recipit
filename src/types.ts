export interface Ingredient {
  id: string
  measurement: 'grams' | 'milliliters' | 'teaspoons' | 'tablespoons'
  amount: number
  name: string
}

export interface Instruction {
  id: string
  action: string
  followUp: string
  ingredient: Ingredient | null
}

export interface Recipe {
  id: string
  title: string
  description: string
  ingredients: Ingredient[]
  instructions: Instruction[]
}