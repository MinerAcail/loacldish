import { useState, useEffect, useRef } from "react";
import Lect from "../assets/lecturer/1.jpg";
import IAshantiMG from "../assets/ashanti.png";
import Kenkey from "../assets/kenkey.jpg";
import Tuo from "../assets/Tuo.jpg";
import Akple from "../assets/Akple.jpg";
import Fante from "../assets/Fante.jpeg";
import Aprapransa from "../assets/Aprapransa.jpg";
import Omo from "../assets/Omo.webp";
import Tubani from "../assets/Tubaani.webp";

import type { Food } from "../types";
import { getFoods } from "@/data";
import FeaturedFood from "@/components/ui/custom/FeaturedFood";
import FoodCard from "@/components/ui/custom/FoodCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
const regions = [
  {
    id: 1,
    name: "Ashanti",
    description: "Known for fufu and palm nut soup",
    famousDish: "Fufu & Light Soup",
    image: IAshantiMG,
  },
  {
    id: 2,
    name: "Greater Accra",
    description: "Home of Ga kenkey and fried fish",
    famousDish: "Ga Kenkey & Fish",
    image: Kenkey,
  },
  {
    id: 3,
    name: "Northern",
    description: "Famous for tuo zaafi and ayoyo soup",
    famousDish: "Tuo Zaafi",
    image: Tuo,
  },
  {
    id: 4,
    name: "Volta",
    description: "Known for akple and okro soup",
    famousDish: "Akple & Okro Soup",
    image: Akple,
  },
  {
    id: 5,
    name: "Central",
    description: "Home of fante kenkey and pepper sauce",
    famousDish: "Fante Kenkey",
    image: Fante,
  },
  {
    id: 6,
    name: "Western",
    description: "Known for aprapransa and palm wine",
    famousDish: "Aprapransa",
    image: Aprapransa,
  },
  {
    id: 7,
    name: "Eastern",
    description: "Famous for omo tuo and groundnut soup",
    famousDish: "Omo Tuo",
    image: Omo,
  },
  {
    id: 8,
    name: "Upper East",
    description: "Known for tubani and kooko",
    famousDish: "Tubani",
    image: Tubani,
  },
];
const HomePage = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [featuredFood, setFeaturedFood] = useState<Food | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadFoods = async () => {
      try {
        const foodsData = await getFoods();
        setFoods(foodsData);

        // Set the first food as featured for now
        if (foodsData.length > 0) {
          setFeaturedFood(foodsData[0]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error loading foods:", error);
        setLoading(false);
      }
    };

    loadFoods();
  }, []);

  const getVisibleItems = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 640) return 1;
      if (width < 1024) return 2;
      return 3;
    }
    return 3; // Default for server-side rendering
  };

  // Auto-scroll effect
  useEffect(() => {
    if (foods.length === 0) return;

    const timer = setInterval(() => {
      const maxIndex = foods.length - getVisibleItems();
      setCurrentIndex((prevIndex) =>
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [foods.length]);

  // Update slider position when currentIndex changes
  useEffect(() => {
    if (sliderRef.current && foods.length > 0) {
      const cardWidth = sliderRef.current.offsetWidth / getVisibleItems();
      sliderRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, foods]);

  // Manual navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? 0 : prevIndex - 1));
  };

  const handleNext = () => {
    const maxIndex = foods.length - getVisibleItems();
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? maxIndex : prevIndex + 1
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-700"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
      {featuredFood && (
        <div className="mb-12">
          <FeaturedFood />
        </div>
      )}
      <div className="mb-8">
        <div className="relative">
          {/* Navigation bButtonttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white shadow-md rounded-full p-2 text-amber-600 hover:text-amber-800"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Slider container */}
          <div ref={sliderRef} className="overflow-hidden">
            <div
              className="flex transition-all duration-300 gap-6"
              style={{
                width: `${foods.length * (100 / getVisibleItems())}%`,
              }}
            >
              {foods.map((food) => (
                <div
                  key={food.id}
                  className="flex-shrink-0"
                  style={{ width: `${100 / foods.length}%` }}
                >
                  <FoodCard food={food} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white shadow-md rounded-full p-2 text-amber-600 hover:text-amber-800"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-4 gap-2">
          {foods.length > 0 &&
            Array.from({
              length: Math.ceil(foods.length / getVisibleItems()),
            }).map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === Math.floor(currentIndex / getVisibleItems())
                    ? "w-6 bg-amber-600"
                    : "w-2 bg-amber-300"
                }`}
                onClick={() => setCurrentIndex(index * getVisibleItems())}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
        </div>
        <Link to="/foods">
          <Button className=" text-white  mt-4">View More</Button>
        </Link>
      </div>
      <div className=" ">
        <div className="bg-gray-100 rounded-lg p-6 md:p-8 mb-12 shadow-lg">
          <div className="md:flex items-center">
            {/* Text Section */}
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Dr. Jovia Salifu
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Dr. Jovia Salifu is a lecturer at the{" "}
                <span className="font-semibold">
                  Centre for African Studies
                </span>
                , specializing in African history, colonialism, and economic
                transformations. He holds a{" "}
                <span className="font-semibold">PhD in African Studies</span>{" "}
                from the University of Birmingham and is an honorary research
                fellow.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                Teaching & Research
              </h3>
              <p className="text-gray-700">
                Dr. Salifu's work focuses on slavery, post-colonial economies,
                and financialisation in Africa. He teaches courses on
                colonialism, globalization, and African economic systems.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                Professional Memberships
              </h3>
              <p className="text-gray-700">
                Member of the African Studies Association, Ghana Studies
                Association, and more.
              </p>
              <Link to={"lecturer"}>
              
              <Button className="mt-5 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-md transition-colors">
                Learn More
              </Button>
              </Link>
            </div>

            {/* Image Section */}
            <div className="md:w-1/3">
              <img
                src={Lect} // Replace with actual image URL
                alt="Dr. Jovia Salifu"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-amber-900 mb-6">
          Explore By Region
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {regions.map((region) => (
            <div
              key={region.id}
              className="relative h-32 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={region.image}
                alt={region.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-3">
                <h3 className="text-white font-medium">{region.name}</h3>
                <p className="text-white text-xs opacity-90 truncate">
                  {region.famousDish}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
