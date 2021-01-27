import React from 'react';
import './Dash.css';
import KitchenIcon from '@material-ui/icons/Kitchen';
import AddItem from './AddItem';
import IngredientList from './IngredientList';

function Dash() {
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
          <AddItem />
        </div>
      </div>
      <div className="ingredientWrapper">
        <IngredientList />
        <IngredientList />
        <IngredientList />
      </div>
    </div>
  )
}

export default Dash;
