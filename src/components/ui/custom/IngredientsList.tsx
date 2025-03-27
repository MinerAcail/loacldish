

interface Ingredient {
  name: string;
  amount?: string;
}

interface IngredientsListProps {
  ingredients: Ingredient[]
}

const IngredientsList = ({ ingredients }: IngredientsListProps) => {
  return (
    <div className="bg-amber-50 rounded-lg p-4 md:p-6">
      <h3 className="text-lg font-semibold text-amber-900 mb-4">Ingredients</h3>
      <ul className="space-y-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-600 mt-1.5 mr-2"></span>
            <span>
              <span className="font-medium">{ingredient.name}</span>
              {ingredient.amount && <span className="text-gray-600"> - {ingredient.amount}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IngredientsList

