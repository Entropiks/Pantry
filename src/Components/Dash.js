import React from 'react'
import './Dash.css';

function Dash() {
  return (
    <div className="container">
      <div className="topbar">
        <h2 className="logo">PANTRY</h2>
        { /* Create a Search Component */ }
      </div>
      <div className="sidebar">
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
      <div className="main">
        Main
      </div>
      <div className="content1">Content 1</div>
      <div className="content2">Content 2</div>
      <div className="content3">Content 3</div>
    </div>
  )
}

export default Dash
