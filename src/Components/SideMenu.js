import React from 'react';
import sidemenu from './SideMenu.css';

function SideMenu() {
  return (
    <div class="sideWrapper">
      <h2 class="title">SideMenu</h2>
      <ul>
        <li>My Ingredients</li>
        <li>My Recipes</li>
        <li>Browse Recipes</li>
      </ul>
    </div>
  )
}

export default SideMenu;