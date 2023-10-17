export type Ingredient = {
  id: string
  measurement: 'grams' | 'milliliters' | 'teaspoons' | 'tablespoons'
  amount: number
  name: string
}

export type Instruction = {
  id: string
  action: string
  followUp: string
  ingredient: Ingredient
}

export type Recipe = {
  id: string
  title: string
  description: string
  ingredients: Ingredient[]
  instructions: Instruction[]
}
