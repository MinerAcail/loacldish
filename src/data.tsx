import type { Food } from "./types";
import IM9 from "./assets/9/1.jpg";
import IMG1 from "./assets/1/1.jpg";
import IMG2 from "./assets/2/1.jpg";
import IMG8 from "./assets/8/1.jpg";
import IMG3 from "./assets/3/1.jpg";
import IMG4 from "./assets/4/1.webp";
import IMG5 from "./assets/5/1.jpg";
import IMG6 from "./assets/6/1.jpg";
import IMG7 from "./assets/7/1.jpg";

// Mock data for Ghanaian foods
const mockFoods: Food[] = [
  {
    id: "1",
    name: "Nwenbisah (Kpaakpuli)",
    region: "Upper East and Upper West",
    description:
      "A staple food mostly eaten by the people of Northern Ghana, made from millet and beans leaves, traditionally steamed and eaten with salt and oil or stew.",
    imageUrl: IMG1,
    ingredients: [
      { name: "Millet", amount: "As needed" },
      { name: "Beans leaves", amount: "As needed" },
      { name: "Oil", amount: "To taste" },
      { name: "Bitter Salt", amount: "To taste" },
      { name: "Salt", amount: "To taste" },
      { name: "Water", amount: "As needed" },
    ],
    preparationSteps: [
      "Parch the millet for about 10 minutes.",
      "Grind the millet into a rough flour.",
      "Knead the flour with pounded fresh beans leaves for about 5 minutes until uniform.",
      "Sprinkle dissolved salt water into the dough and mould into preferred shapes.",
      "Line the steaming pot with millet leaves or any other leaves and pour in water.",
      "Place the moulded Nwenbisah (Kpaakpuli) on the leaves and steam for about 30 minutes.",
      "Dish out and enhance taste with salt and oil, or serve with stew.",
    ],
    cookTime: "40",
    servings: 4,
    culturalSignificance:
      "Nwenbisah (Kpaakpuli) is a traditional dish mostly eaten in Northern Ghana. It was originally consumed between June and October when beans leaves were abundant, but irrigation farming has made it available year-round.",
  },
  {
    id: "2",
    name: "Boiled Plantain with Kontomire Stew",
    region: "Akan",
    description:
      "A favorite Ghanaian local dish consisting of boiled plantain paired with a rich Kontomire (cocoyam leaves) stew. Kontomire is traditionally used in soups, stews, and as a wrapper for steaming foods. The dish is rich in essential vitamins, minerals, and fiber.",
    imageUrl: IMG2,
    ingredients: [
      { name: "Plantain", amount: "As needed" },
      { name: "Kontomire (cocoyam leaves)", amount: "As needed" },
      { name: "Onions", amount: "To taste" },
      { name: "Pepper", amount: "To taste" },
      { name: "Palm oil", amount: "As needed" },
      { name: "Eggs", amount: "2-3" },
      { name: "Garlic", amount: "To taste" },
      { name: "Salt", amount: "To taste" },
      { name: "Koobi (salted tilapia)", amount: "As needed" },
      { name: "Ginger", amount: "To taste" },
      { name: "Smoked Herring", amount: "As needed" },
      { name: "Turkey berries", amount: "As needed" },
    ],
    preparationSteps: [
      "Wash and rinse all utensils. Wash hands with soap under running water.",
      "Clean all ingredients thoroughly.",
      "Peel and slice the plantains.",
      "Pour water into a saucepan, add salt, sliced plantain, Kontomire, turkey berries, and eggs. Place on fire.",
      "Boil for 15-20 minutes.",
      "Chop onions, ginger, garlic, and pepper, then grind them in an earthenware bowl.",
      "Check if the plantains are cooked. If done, remove from heat and drain excess water.",
      "Take out the boiled Kontomire and turkey berries and grind them together with the chopped ingredients.",
      "Place boiled plantains in a warm container to prevent cooling.",
      "Heat palm oil in a pan and add Koobi (salted tilapia). Let it heat slightly.",
      "Pour the heated palm oil and salted fish over the ground Kontomire mixture and stir well to form a stew.",
      "Clean the smoked herrings by removing scales and bones.",
      "Mix the smoked herring and Koobi into the Kontomire stew.",
      "Peel boiled eggs and add them to the Kontomire stew.",
      "Serve boiled plantain with the Kontomire stew, garnished with boiled eggs, salted fish, and onions.",
    ],
    cookTime: "30",
    servings: 4,
    culturalSignificance:
      "Boiled plantain with Kontomire stew is a traditional dish among the Akan people of Ghana. The combination provides a nutritious meal rich in carbohydrates, vitamins, and minerals. It is also believed to have medicinal properties, and some traditional healers use it to treat ailments such as wound healing.",
  },
  {
    id: "3",
    name: "Mpotompto (Yam Porridge)",
    region: "Akan",
    description:
      "A traditional Ghanaian dish enjoyed primarily in the southern regions, made from garden eggs, palm oil, and smoked fish. It has a smooth and slightly viscous texture and is often served with yam or cocoyam.",
    imageUrl: IMG3,
    ingredients: [
      { name: "Fresh garden eggs (eggplants)", amount: "As needed" },
      { name: "Tomatoes", amount: "As needed" },
      {
        name: "Pepper (scotch bonnet or local chili varieties)",
        amount: "To taste",
      },
      { name: "Onions", amount: "As needed" },
      { name: "Palm oil", amount: "As needed" },
      { name: "Salted fish or smoked fish", amount: "Optional" },
      { name: "Salt", amount: "To taste" },
      { name: "Seasonings (local spices)", amount: "As needed" },
      { name: "Meat or seafood", amount: "Optional" },
    ],
    preparationSteps: [
      "Boil garden eggs, tomatoes, and onions until soft.",
      "Blend or pound them into a smooth consistency.",
      "Heat palm oil in a separate pan and fry onions, fish, and seasonings.",
      "Add the blended mixture to the fried ingredients and simmer until well combined.",
      "Serve hot, often accompanied by boiled cocoyam or yam.",
    ],
    cookTime: "40",
    servings: 4,
    culturalSignificance:
      "Mpotompto has been a staple of Ghanaian cuisine for centuries, particularly among the Akan people. It represents resilience and tradition, as it has been passed down through generations. Many believe it aids digestion and supports heart health due to its nutritious ingredients.",
  },
  {
    id: "4",
    name: "Tubaani",
    region: "Northern Ghana & Zongo Communities",
    description:
      "Tubaani, also known as steamed black-eyed peas pudding, is a traditional Ghanaian dish made from black-eyed pea flour, wrapped in leaves, and steamed. It is often served with spicy tomato sauce or shea butter.",
    imageUrl: IMG4,
    ingredients: [
      { name: "Black-eyed peas (cowpeas)", amount: "2 cups" },
      { name: "Salt", amount: "1 teaspoon" },
      { name: "Water", amount: "As needed" },
      {
        name: "Banana leaves, corn husks, or parchment paper",
        amount: "For wrapping",
      },
      { name: "String or foil", amount: "For tying wraps" },
      { name: "Shea butter or palm oil", amount: "For serving" },
      { name: "Spicy tomato sauce", amount: "Optional" },
    ],
    preparationSteps: [
      "Soak the black-eyed peas in water for 2-4 hours (or overnight) to soften.",
      "Rub the peas between your hands to remove the skins, then rinse and drain.",
      "Blend the peeled peas with a little water until smooth. The mixture should be thick, not watery.",
      "Add salt to taste and mix well.",
      "Cut banana leaves, corn husks, or parchment paper into large pieces.",
      "Scoop some of the blended pea mixture onto each leaf or paper and wrap it tightly.",
      "Secure the wraps with string or foil.",
      "Arrange the wrapped Tubaani in a pot with a steaming rack or place them on top of a layer of banana leaves.",
      "Add water to the pot, cover, and steam for about 45-60 minutes until firm.",
      "Check if it's done by pressing lightly; if it holds its shape, it's ready.",
      "Unwrap the Tubaani, slice it, and serve it with shea butter or palm oil drizzled on top.",
      "You can also add a spicy tomato sauce for extra flavor.",
    ],
    cookTime: "60",
    servings: 4,
    culturalSignificance:
      "Tubaani is a well-loved dish in Northern Ghana and Zongo communities. It is a nutritious meal made from beans, providing proteins, iron, vitamin B9, and fiber. It is often enjoyed as a light meal or snack and is commonly prepared for family gatherings and festive occasions.",
  },
  {
    id: "5",
    name: "Fante Fante (Fisherman’s Dish)",
    region: "Central Region, Ghana",
    description:
      "Fante Fante is a popular fish stew from the Central Region of Ghana, particularly among the Fante people. It is a rich and flavorful dish made with fresh fish, tomatoes, and palm oil. The stew is traditionally served with rice, banku, or kenkey.",
    imageUrl: IMG5,
    ingredients: [
      { name: "Fresh fish (mackerel preferred)", amount: "As needed" },
      { name: "Onion", amount: "As needed" },
      { name: "Habanero pepper", amount: "To taste" },
      { name: "Ginger", amount: "To taste" },
      { name: "Garlic", amount: "To taste" },
      { name: "Fresh tomatoes", amount: "As needed" },
      { name: "Palm oil (zomi)", amount: "As needed" },
      { name: "Seasoning (rosemary, salt, etc.)", amount: "To taste" },
    ],
    preparationSteps: [
      "Wash and cut the fresh fish into smaller pieces and set them aside in a bowl.",
      "Blend onions, ginger, garlic, and seasoning (rosemary) to create a marinade.",
      "Use the marinade to coat the fish and let it sit for about 30 minutes.",
      "Blend fresh tomatoes, onions, and habanero pepper and set aside.",
      "Heat palm oil (zomi) in a saucepan over medium heat.",
      "Add chopped onions and stir for about a minute, then add the blended tomato mixture.",
      "Allow the stew to simmer for about 30 minutes.",
      "Add the marinated fresh fish to the stew and stir gently.",
      "Add salt and additional seasoning to taste and let the stew simmer for another 10 minutes.",
      "Serve hot with rice, banku, kenkey, or etew.",
    ],
    cookTime: "45",
    servings: 4,
    culturalSignificance:
      "Fante Fante is a beloved dish among the Fante people, symbolizing their close connection to the sea. It highlights their resourcefulness in making flavorful meals using fresh, locally available ingredients. The dish is commonly enjoyed by fishermen and their families after a day’s catch.",
  },
  {
    id: "6",
    name: "Konkonte and Groundnut Soup",
    region: "Ghana",
    description:
      "Konkonte and Groundnut Soup is a classic Ghanaian dish made from dried cassava flour and peanut-based soup. It is a nutritious and flavorful meal that is widely enjoyed across Ghana.",
    imageUrl: IMG6,
    ingredients: [
      { name: "Cassava flour", amount: "As needed" },
      { name: "Water", amount: "As needed" },
      { name: "Roasted peanuts (or peanut butter)", amount: "As needed" },
      { name: "Onions", amount: "To taste" },
      { name: "Tomatoes", amount: "As needed" },
      { name: "Palm oil", amount: "Optional" },
      { name: "Salt", amount: "To taste" },
      { name: "Seasonings", amount: "To taste" },
      {
        name: "Protein (chicken, fish, goat meat, or mushrooms)",
        amount: "As needed",
      },
    ],
    preparationSteps: [
      "Mix cassava flour with water to form a smooth paste.",
      "Slowly pour the mixture into boiling water while stirring continuously to avoid lumps.",
      "Keep stirring until it thickens and becomes dough-like. Serve warm.",
      "For the soup, blend roasted peanuts into a smooth paste or use pre-made peanut butter.",
      "Sauté onions, tomatoes, and spices in a pot until fragrant.",
      "Add the peanut paste and enough water to create the desired soup consistency.",
      "Let it simmer and add your choice of protein (e.g., chicken, fish, or goat meat).",
      "Add salt to taste and cook until the flavors meld together.",
      "Serve the Konkonte with Groundnut Soup.",
    ],
    cookTime: "60",
    servings: 4,
    culturalSignificance:
      "Konkonte and Groundnut Soup is a beloved Ghanaian dish that represents resilience and culinary innovation. The earthy taste of Konkonte balances the creamy richness of the soup, making it a staple for many families. It is affordable, easy to make, and packed with nutrients like protein, healthy fats, and carbohydrates.",
  },
  {
    id: "7",
    name: "Fufu",
    region: "West Africa",
    description:
      "Fufu is a traditional Ghanaian dish made by pounding boiled cassava and plantains (or sometimes yams). It is often served with various soups such as light soup, groundnut soup, or palm nut soup.",
    imageUrl: IMG7,
    ingredients: [
      { name: "Cassava", amount: "As needed" },
      { name: "Plantains (or yam)", amount: "As needed" },
    ],
    preparationSteps: [
      "Peel and boil the cassava and plantains until soft.",
      "Pound them together in a mortar and pestle until smooth and stretchy.",
      "Mold into a round shape and serve with soup.",
    ],
    cookTime: "30",
    servings: 4,
    culturalSignificance:
      "Fufu is a staple dish in Ghana and other West African countries like Nigeria, Ivory Coast, and Togo. It symbolizes unity and togetherness, as it is traditionally eaten with family. The meal is prepared using a large wooden mortar and pestle, reflecting cultural heritage and communal effort.",
  },
  {
    id: "8",
    name: "Dawadawa Jollof",
    region: "West Africa (Ghana, Nigeria)",
    description:
      "A flavorful variation of Jollof rice infused with Dawadawa (locust bean) paste, giving it a unique and rich taste. This dish is popular in Ghana and Nigeria and is enjoyed with or without protein additions like chicken, beef, or fish.",
    imageUrl: IMG8,
    ingredients: [
      { name: "Uncooked rice", amount: "1 cup" },
      { name: "Water", amount: "2 cups" },
      { name: "Vegetable oil", amount: "2 tablespoons" },
      { name: "Onion", amount: "1, chopped" },
      { name: "Garlic", amount: "2 cloves, minced" },
      { name: "Ginger", amount: "1 teaspoon, grated" },
      { name: "Tomato puree", amount: "1 cup" },
      { name: "Dawadawa (locust bean) paste", amount: "1 cup" },
      { name: "Salt", amount: "1 teaspoon" },
      { name: "Black pepper", amount: "½ teaspoon" },
      { name: "Cumin powder (optional)", amount: "½ teaspoon" },
    ],
    preparationSteps: [
      "Rinse the rice and soak it in water for about 30 minutes. Drain and set aside.",
      "Heat the oil in a large pot over medium heat. Add the onion, garlic, and ginger. Sauté until the onion becomes translucent.",
      "Add the tomato puree and stir well. Cook for about 5 minutes, stirring occasionally.",
      "Add the dawadawa paste, salt, black pepper, and cumin powder (if using). Stir well to combine.",
      "Add the soaked rice to the pot and mix thoroughly with the tomato-dawadawa mixture.",
      "Pour in the water and bring to a boil. Reduce the heat to low, cover, and let simmer for 20-25 minutes, or until the rice is cooked and the liquid has been absorbed.",
      "Serve hot and enjoy!",
    ],
    cookTime: "30",
    servings: 4,
    culturalSignificance:
      "Dawadawa Jollof is a nutritious dish rich in protein, fiber, and essential minerals. It holds cultural significance in Ghanaian and Nigerian cuisine, showcasing the use of traditional locust beans for their distinct umami flavor.",
  },
  {
    id: "10",
    name: "Boiled Plantain and Abomu",
    region: "Ghana",
    description: `
      A traditional Ghanaian dish made with boiled plantain served with a flavorful abomu sauce, which includes tomatoes, onions, roasted groundnuts, and palm oil. 

      - Rich in carbohydrates from plantains, providing energy.  
      - High in fiber from tomatoes and peppers, aiding digestion.  
      - Contains essential vitamins and minerals like Vitamin C, calcium, and iron for immune support.  
      - Healthy fats from palm oil and groundnuts help the body function properly.
    `,
    imageUrl: IM9,
    ingredients: [
      { name: "Plantain", amount: "As needed" },
      { name: "Fresh Tomatoes", amount: "As needed" },
      { name: "Kpakpotsitor (Pepper)", amount: "To taste" },
      { name: "Onions", amount: "As needed" },
      { name: "Roasted Groundnut", amount: "As needed" },
      { name: "Palm Oil", amount: "As needed" },
      { name: "Salt", amount: "To taste" },
    ],
    preparationSteps: [
      "Peel and rinse the plantain with water.",
      "Boil the plantain with salt to taste.",
      "Rinse the pepper, tomatoes, and onions, then peel the onions.",
      "Chop the onions and tomatoes.",
      "Grind the pepper, onions, and tomatoes together in an asanka.",
      "Add the roasted groundnut to the mixture and grind further.",
      "Add salt to taste.",
      "Heat palm oil and pour it over the mixture, then mix well.",
      "Serve the boiled plantain with the abomu sauce.",
      "Can be eaten with any protein of your choice.",
    ],
    cookTime: "30",
    servings: 4,
    culturalSignificance: `
      Boiled Plantain and Abomu is a staple Ghanaian dish enjoyed across various regions. 
      It is known for its balanced nutrition and flavorful combination of local ingredients.
    `,
  },
];

// Simulate API calls with promises
export const getFoods = (): Promise<Food[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFoods);
    }, 500);
  });
};

export const getFoodById = (id: string): Promise<Food | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const food = mockFoods.find((food) => food.id === id) || null;
      resolve(food);
    }, 500);
  });
};
