import React from 'react';
import './Dash.css';
import MainContent from './MainContent';
import SideMenu from './SideMenu';

function Dash() {
  return (
    <div className="container">
      <div className="topbar">
        <h2 className="logo">PANTRY</h2>
        { /* Create a Search Component */ }
      </div>
      <div className="sidebar">
        <SideMenu></SideMenu>
      </div>
      <MainContent></MainContent>
      
      <div className="content1">Content 1</div>
      <div className="content2">Content 2</div>
      <div className="content3">Content 3</div>
    </div>
  )
}

export default Dash;
