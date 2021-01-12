import React from 'react';
import './RecipeCard.css';

function RecipeCard() {
  return (
    <div className="contentWrapper">
      <img src="https://www.thespruceeats.com/thmb/9wGyNFEsTZGdPhPcKed8Mp9o3k4=/3072x2304/smart/filters:no_upscale()/authentic-neapolitan-margherita-pizza-157507884-582612543df78c6f6acb5a8a.jpg"/>
      <div className="recipeContent">
        <h4>Recipe Title</h4>
        <p> recipe ingredients here recipe ingredients here recipe ingredients here</p>
      </div>
    </div>
  )
}

export default RecipeCard;