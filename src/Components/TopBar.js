import React from 'react';

function TopBar() {
    return (
        <div className="topbar">   
            <h2 className="logo">PANTRY</h2>
            <form className="search-bar">
            <label>
                <input type="text" name="name" placeholder="Search recipes..."/>
            </label>
            <input type="submit" value="Submit" />
            </form>
            <div className="icon-wrapper">
                <img className="user-icon" src=""/>
            </div>
            
        </div>
    )
}

export default TopBar
