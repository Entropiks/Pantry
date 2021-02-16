import React from 'react';
import icon_flour from '../images/flour.svg';
import './InputItem.css';
import db from '../firebase.js';

function InputItem(props) {

    const removeItem = (event) => {
      event.preventDefault();
      db.collection("ingredients").doc(props.ingredient.id).delete();
    }

    return (
      <div key={props.ingredient.id} className="ingredient_wrapper">
        <div className="ingredient_name">
         <img src={icon_flour} />
         <p>{props.ingredient.ingredients}</p>
         {/* need to switch id for whatever props user text is */}
        <div>
        </div>
        </div>
        <div className="ingredient_actions">
         <p onClick={removeItem}>X</p>
        </div>
      </div>
       
    )
}

export default InputItem;
