import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {
  const DEFAULT_FORM_STATE = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  };
  const [formdata, setFormData] = useState(DEFAULT_FORM_STATE);

  function createHandler(event) {
    event.preventDefault();
    setRecipes([...recipes, formdata])
    setFormData(DEFAULT_FORM_STATE)
  }

  function changeHandler({ target }) {
    const data = target.value;
    setFormData({
      ...formdata,
      [target.name]: data
    })
  }

  return (
    <form onSubmit={createHandler} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name='name' onChange={changeHandler} value={formdata.name} placeholder="Name"/>
            </td>
            <td>
              <input id="cuisine" name='cuisine' onChange={changeHandler} value={formdata.cuisine} placeholder="Cuisine"/>
            </td>
            <td>
              <input id="photo" name='photo' onChange={changeHandler} value={formdata.photo} placeholder="URL"/>
            </td>
            <td>
              <textarea id="ingredients" name='ingredients' onChange={changeHandler} value={formdata.ingredients} placeholder="Ingredients"/>
            </td>
            <td>
              <textarea id="preparations" name='preparation' onChange={changeHandler} value={formdata.preparation} placeholder="Preparation"/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
