import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {

  const initialRecipeForm = {
    id: 0,
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:""
  }

  const [recipes, setRecipes] = useState(RecipeData);
  const newRecipe = recipes.map((item, index) => {
    return {
      ...item,
      id: index + 1,
    };
  });
  console.log(newRecipe);

  const handleDelete = (id) => {
    setRecipes(newRecipe.filter(recipe => recipe.id !== id)); 
  }
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList currentRecipe={newRecipe} handleDelete={handleDelete}/>
      <RecipeCreate initialRecipeForm={initialRecipeForm} currentRecipe={newRecipe} setRecipe={setRecipes}/>
    </div>
  );
}

export default App;
