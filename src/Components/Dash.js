import React from 'react';
import './Dash.css';
import MainContent from './MainContent';
import SideMenu from './SideMenu';
import RecipeCard from './RecipeCard';
import TopBar from './TopBar';
import AddItem from './AddItem';
import KitchenIcon from '@material-ui/icons/Kitchen';

function Dash() {
  return (
    <div className="container">
      <div className="login_logo">
        <KitchenIcon></KitchenIcon>
        <h4>PANTRY</h4>
      </div>
      <div className="startRecipeCard">
        <h1>What ingredients do you have?</h1>
        <p>We realize this may take you a few minutes, but trust us - great meal ideas incoming. We realize this may take you a few minutes, but trust us - great meal ideas incoming.</p>
        <AddItem></AddItem>
        {/* Input ingredients */}
      </div>
    </div>
  )
}

export default Dash;
