import React from "react";

function RecipeList({currentRecipe,handleDelete}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div className="recipe-list">
      {currentRecipe.length === 0 ? (
        <p className="empty-message"> There currently no Recipe. Wanna create new one ?</p>
      ) : (
      <table>
      <thead>
                <tr>
                  <th>Name</th>
                  <th>Cuisine</th>
                  <th>Photo</th>
                  <th>Ingredients</th>
                  <th>Preparation</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentRecipe.map((recipe) => (
                  <tr key={recipe.id}>
                    <td className="content">{recipe.name}</td>
                    <td className="content">{recipe.cuisine}</td>
                    <td className="content"> <img src={recipe.photo} alt="{recipe.photo}" className="content-img"></img></td>
                    <td className="content_td"><p>{recipe.ingredients}</p></td>
                    <td className="content_td"><p>{recipe.preparation}</p></td>
                    <td className="content"><button name='delete' onClick={() => handleDelete(recipe.id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
      </table>
        )} 
    </div>
  );
}

export default RecipeList;
