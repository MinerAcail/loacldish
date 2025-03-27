import { Food } from "@/types";
import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
import { getFoods } from "@/data";
import { useLocation } from "react-router";

const FoodGrid = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
  const location = useLocation();

  useEffect(() => {
    const loadFoods = async () => {
      try {
        const foodsData = await getFoods();
        setFoods(foodsData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading foods:", error);
        setLoading(false);
      }
    };

    loadFoods();
  }, []);

  useEffect(() => {
    // Extract search query from URL
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search')?.toLowerCase() || '';

    if (searchQuery) {
      // Filter foods based on search query
      const filtered = foods.filter(food => 
        food.name.toLowerCase().includes(searchQuery) || 
        food.description.toLowerCase().includes(searchQuery)
      );
      setFilteredFoods(filtered);
    } else {
      setFilteredFoods(foods);
    }
  }, [location.search, foods]);

  if (loading) {
    return <div className="text-center text-gray-600">Loading foods...</div>;
  }

  return (
    <div>
      {filteredFoods.length === 0 ? (
        <div className="text-center text-gray-600 p-4">
          No foods found matching your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodGrid;