import React from "react";

export default function Recipes({ recipes, setRecipes }) {
    
    function deleteHandler(targetIndex) {
        const newRecipes = recipes.filter((recipe, index) => {
          if(targetIndex === index) {
            return false;
            
          } else{ 
            return true;
          }
        })
        setRecipes(newRecipes);
      }

    return (
        <>
        {recipes.map((recipe, index) => (
            <tr key={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img src={recipe.photo} /></td>
                <td className='content_td'><p>{recipe.ingredients}</p></td>
                <td className='content_td'><p>{recipe.preparation}</p></td>
                <td><button type='button' name='delete' onClick={() => deleteHandler(index)}>Delete</button></td>
            </tr>
          ))}
        </>
    );
}