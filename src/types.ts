export interface Ingredient {
    name: string
    amount?: string
  }
  
  export interface Food {
    id: string
    name: string
    region: string
    description: string
    imageUrl: string
    ingredients: Ingredient[]
    preparationSteps: string[]
    cookTime?: string
    servings?: number
    culturalSignificance?: string
  }
  
  