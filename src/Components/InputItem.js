import React from 'react';
import icon_flour from '../images/flour.svg';
import './InputItem.css';

function InputItem(props) {
    return (
      <div className="ingredient_wrapper">
        <div className="ingredient_name">
         <img src={icon_flour} />
         <p>{props.text}</p>
        <div>
        </div>
        </div>
        <div className="ingredient_actions">
         <p>X</p>
        </div>
      </div>
       
    )
}

export default InputItem;
