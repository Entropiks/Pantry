import React, { useState } from 'react';
import './Dash.css';
import KitchenIcon from '@material-ui/icons/Kitchen';
import SingleIngredient from './IngredientList';

function Dash() {

  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState('');

  const addItem = (event) => {
    event.preventDefault();
    setRecipes([...recipes, input]);
    setInput('');
  }

  return (
    <div className="main_wrapper">
      <div className="container">
        <div className="login_logo">
          <KitchenIcon></KitchenIcon>
          <h4>PANTRY</h4>
        </div>
        <div className="startRecipeCard">
          <h1>What ingredients do you have?</h1>
          <p>We realize this may take you a few minutes, but trust us - great meal ideas incoming. We realize this may take you a few minutes, but trust us - great meal ideas incoming.</p>
          <form>
            <input className="user_input" value={input} onChange={event => setInput(event.target.value)} />
            <button type="submit" onClick={addItem}>Add</button>
          </form>
        </div>
      </div>
      {/* Needs to route item name and info */}
      {/* <div className="ingredientWrapper">
        {recipes.map(recipe => (
          <SingleIngredient>{recipe}</SingleIngredient>
        ))}
      </div> */}
      <div className="ingredientWrapper">
        {recipes.map(recipe => (
          <div className="ingredient_name">
            <li>{recipe}</li>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dash;
