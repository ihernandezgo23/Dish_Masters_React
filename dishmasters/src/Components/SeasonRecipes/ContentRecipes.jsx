import React, { useEffect, useState } from "react";

export default function ContentRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetch("./json/season.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setRecipes(data.recipes);
          setIsLoading(false);
        }, 700);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <div className="p-4">
      {isLoading ? (
        <p>Loading recipes...</p>
      ) : selectedRecipe ? (
        <div className="p-6 border rounded-lg shadow-md bg-white max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={`./img/seasonRecipes/${selectedRecipe.img}`}
              alt={selectedRecipe.name}
              className="w-full h-80 object-cover rounded-md"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedRecipe.name} - {selectedRecipe.season}
              </h2>
              <p><strong>Calories:</strong> {selectedRecipe.calories} kcal</p>
              <p><strong>Preparation Time:</strong> {selectedRecipe.preparation_time}</p><br />
              {selectedRecipe.showDetails && (
                <>
                  <h3 className="mt-6 text-lg font-semibold">Ingredients:</h3>
                  <ul className="list-disc list-inside mb-4">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </>
              )}
              <div className="flex space-x-4">
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
                >
                  Back to All Recipes
                </button>
                <button
                  onClick={() => setSelectedRecipe({ ...selectedRecipe, showDetails: !selectedRecipe.showDetails })}
                  className={`text-white p-3 rounded-md ${selectedRecipe.showDetails ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}`}
                >
                  {selectedRecipe.showDetails ? "Hide Details" : "Show Details"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center cursor-pointer hover:shadow-xl transition"
              onClick={() => setSelectedRecipe({ ...recipe, showDetails: false })}
            >
              <img
                src={`./img/seasonRecipes/${recipe.img}`}
                alt={recipe.name}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-800">{recipe.name} - {recipe.season}</h2>
                <p>Preparation time: {recipe.preparation_time}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}