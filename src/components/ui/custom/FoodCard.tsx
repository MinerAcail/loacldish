import { Food } from "@/types"
import { Link } from "react-router"
// import type { Food } from "../types"

interface FoodCardProps {
  food: Food
}

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <Link to={`/food/${food.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img
            src={food.imageUrl || "/placeholder.svg"}
            alt={food.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-amber-900">{food.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{food.region}</p>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">{food.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default FoodCard


