import React from 'react';
import './Dash.css';
import MainContent from './MainContent';
import SideMenu from './SideMenu';
import RecipeCard from './RecipeCard';

function Dash() {
  return (
    <div className="container">
      <div className="topbar">
        <h2 className="logo">PANTRY</h2>
      </div>
      <div className="sidebar">
        <SideMenu></SideMenu>
      </div>
      <div className="main">
        <MainContent></MainContent>
      </div>
    
      
      <div className="content1">
        <RecipeCard></RecipeCard>
      </div>
      <div className="content2">
        <RecipeCard></RecipeCard>
      </div>
      <div className="content3">
        <RecipeCard></RecipeCard>
      </div>
    </div>
  )
}

export default Dash;
