import React, { useState } from 'react';
import './Dash.css';
import KitchenIcon from '@material-ui/icons/Kitchen';

function Dash() {

  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState('');
  const addItem = (event) => {
    setRecipes([...recipes, input])
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
          <input className="user_input" value={input} onChange={event => setInput(event.target.value)} />
          <button onClick={addItem}>Add</button>
        </div>
      </div>
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
