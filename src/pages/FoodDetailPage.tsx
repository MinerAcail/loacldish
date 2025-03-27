"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router"
import { ArrowLeft, Clock, Users } from "lucide-react"
// import IngredientsList from "../components/IngredientsList"
// import PreparationSteps from "../components/PreparationSteps"
import type { Food } from "../types"
import { getFoodById } from "@/data"
import IngredientsList from "@/components/ui/custom/IngredientsList"
import PreparationSteps from "@/components/ui/custom/PreparationSteps"
// import { getFoodById } from "../api/foodsApi"

const FoodDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const [food, setFood] = useState<Food | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFood = async () => {
      if (!id) return

      try {
        const foodData = await getFoodById(id)
        setFood(foodData)
        setLoading(false)
      } catch (error) {
        console.error("Error loading food details:", error)
        setLoading(false)
      }
    }

    loadFood()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-700"></div>
      </div>
    )
  }

  if (!food) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Food not found</h2>
        <p className="text-gray-600 mb-6">The dish you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/"
          className="inline-flex items-center text-white bg-amber-700 hover:bg-amber-800 px-4 py-2 rounded-md transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/" className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all foods
      </Link>

      <div className="mb-8">
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
          <img src={food.imageUrl || "/placeholder.svg"} alt={food.name} className="w-full h-full object-cover" />
        </div>

        <div className="md:flex md:justify-between md:items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-amber-900 mb-2">{food.name}</h1>
            <p className="text-gray-600 mb-4">{food.region} Region</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            {food.cookTime && (
              <div className="flex items-center text-gray-700">
                <Clock className="h-5 w-5 mr-1 text-amber-700" />
                <span>{food.cookTime} mins</span>
              </div>
            )}
            {food.servings && (
              <div className="flex items-center text-gray-700">
                <Users className="h-5 w-5 mr-1 text-amber-700" />
                <span>Students {food.servings}</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-700 mb-8 max-w-3xl">{food.description}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-1">
            <IngredientsList ingredients={food.ingredients} />
          </div>
          <div className="md:col-span-2">
            <PreparationSteps steps={food.preparationSteps} />
          </div>
        </div>

        {food.culturalSignificance && (
          <div className="bg-amber-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-amber-900 mb-3">Cultural Significance</h3>
            <p className="text-gray-700">{food.culturalSignificance}</p>
          </div>
        )}

      
      </div>
    </div>
  )
}

export default FoodDetailPage

