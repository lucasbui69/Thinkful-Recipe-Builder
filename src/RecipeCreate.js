import React, { useState } from "react";

function RecipeCreate({initialRecipeForm,currentRecipe,setRecipe}) {


  // Setting new recipe state
  const [newRecipe,setNewRecipe] = useState({...initialRecipeForm });
  // const [newRecipeContent,setNewRecipeContent] = useState(currentRecipe)

  // Create new recipe 
  const createNewRecipe = (newRecipeContent) => setRecipe([
      ...currentRecipe,
      newRecipeContent
  ])

  // Change handler
  const handleChange = ({target}) => {
    setNewRecipe({
      ...newRecipe,
      [target.name] : target.value
    })
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const handleSubmit = (e) =>{
    console.log('Submitted button');
    e.preventDefault();
    console.log('Recipe created !');
    // console.log(newRecipe);
    newRecipe.id = currentRecipe.length + 1
    console.log(newRecipe);
    createNewRecipe(newRecipe);
    setNewRecipe({...initialRecipeForm});
  };
  
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td><input name="name" placeholder="Name" onChange={handleChange} value={newRecipe.name}></input></td>
            <td><input name="cuisine" placeholder="Cuisine" onChange={handleChange} value={newRecipe.cuisine}></input></td>
            <td><input name="photo" placeholder="URL" onChange={handleChange} value={newRecipe.photo} ></input></td>
            <td><textarea name="ingredients" placeholder="Ingredents" onChange={handleChange} value={newRecipe.ingredients}></textarea></td>
            <td><textarea name="preparation" placeholder="Preparation" onChange={handleChange} value={newRecipe.preparation}></textarea></td>
            <td>
              <button type="submit" onClick={handleSubmit}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
