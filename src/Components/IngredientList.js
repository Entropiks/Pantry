import React from 'react';
import './IngredientList.css';

// ICONS
import icon_flour from '../images/flour.svg';

function IngredientList() {
    return (
        <div className="ingredient_wrapper">
            <div className="ingredient_name">
                <img src={icon_flour} />
                <p>White Flour</p>
            </div>
            <div className="ingredient_actions">
                <p>X</p>
            </div>
        </div>
    )
}

export default IngredientList;
