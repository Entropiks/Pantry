import React, { useState, useEffect } from 'react';
import './Dash.css';
import KitchenIcon from '@material-ui/icons/Kitchen';
import InputItem from './InputItem';

import firebase from 'firebase';
import db from '../firebase';

function Dash() {

  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState('');

  // when app loads, listen to server, add and remove.
  useEffect(() => {
    db.collection('ingredients').onSnapshot(snapshot => {
      setRecipes(snapshot.docs.map(doc => ({id: doc.id, ingredients: doc.data().recipe})))
    })
  }, []);
  
  const addItem = (event) => {
    event.preventDefault();

    // add to server
    db.collection('ingredients').add({
      recipe: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setRecipes([...recipes, input]);
    setInput('');
  }

  return (
    <div className="main_wrapper">
      <div className="container">
        <div className="login_logo">
          <KitchenIcon></KitchenIcon>
          <h4>PANTRY</h4>
        </div>
        <div className="startRecipeCard">
          <h1>What ingredients do you have?</h1>
          <p>We realize this may take you a few minutes, but trust us - great meal ideas incoming. We realize this may take you a few minutes, but trust us - great meal ideas incoming.</p>
          <form>
            <input className="user_input" value={input} onChange={event => setInput(event.target.value)} />
            <button disabled={!input} type="submit" onClick={addItem} >Add</button>
          </form>
        </div>
      </div>
      <div className="ingredientWrapper">
        {recipes.map(recipe => (
          <InputItem ingredient={recipe}/>
        ))}
      </div>
    </div>
  )
}

export default Dash;
