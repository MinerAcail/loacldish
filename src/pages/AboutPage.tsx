const AboutPage = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-amber-900 mb-6">About Ghana Foods</h1>
  
          <div className="prose prose-amber max-w-none">
            <p className="text-gray-700 mb-6">
              Welcome to Ghana Foods, your ultimate guide to the rich and diverse culinary heritage of Ghana. Our mission
              is to showcase the authentic flavors, ingredients, and cooking techniques that make Ghanaian cuisine one of
              Africa's most celebrated food cultures.
            </p>
  
            <h2 className="text-xl font-semibold text-amber-800 mt-8 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Ghana Foods was created out of a passion for preserving and sharing traditional Ghanaian recipes. We believe
              that food is an essential part of cultural identity, and through our platform, we aim to document and
              celebrate the culinary traditions that have been passed down through generations.
            </p>
  
            <h2 className="text-xl font-semibold text-amber-800 mt-8 mb-4">Ghanaian Cuisine</h2>
            <p className="text-gray-700 mb-6">
              Ghanaian cuisine is characterized by its bold flavors, vibrant colors, and nutritious ingredients. From the
              spicy jollof rice of the south to the hearty tuo zaafi of the north, each region of Ghana offers unique
              dishes that reflect local agriculture, history, and cultural influences.
            </p>
            <p className="text-gray-700 mb-6">Common ingredients in Ghanaian cooking include:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Cassava and plantains</li>
              <li>Rice and various grains</li>
              <li>Palm oil and coconut</li>
              <li>Fresh fish and seafood</li>
              <li>Groundnuts (peanuts)</li>
              <li>Spices like ginger, garlic, and chili peppers</li>
            </ul>
  
            <h2 className="text-xl font-semibold text-amber-800 mt-8 mb-4">Our Commitment</h2>
            <p className="text-gray-700 mb-6">We are committed to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Providing authentic recipes with detailed instructions</li>
              <li>Documenting the cultural significance of traditional dishes</li>
              <li>Showcasing the diversity of regional Ghanaian cuisines</li>
              <li>Promoting sustainable cooking practices and local ingredients</li>
            </ul>
  
            <div className="bg-amber-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Get Involved</h3>
              <p className="text-gray-700 mb-4">
                We welcome contributions from food enthusiasts, chefs, and cultural historians. If you have a traditional
                recipe to share or a story about Ghanaian food culture, please get in touch with us.
              </p>
              <a href="mailto:contact@ghanafoods.com" className="text-amber-700 hover:text-amber-800 font-medium">
                contact@ghanafoods.com
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default AboutPage
  
  