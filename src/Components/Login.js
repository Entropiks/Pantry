import React, { useEffect, useContext, createContext, useState } from 'react';
import KitchenIcon from '@material-ui/icons/Kitchen';
import {signInWithGoogle} from '../firebase';

import './Login.css';
import '../App.css';

function Login() {

    return (
      <div className="main_wrapper">
        <div className="container">
          <div className="login_logo">
            <KitchenIcon></KitchenIcon>
            <h4>PANTRY</h4>
          </div>
          <div className="startRecipeCard">
            <h1>Welcome to Pantry!</h1>
            <p>An app that helps you waste less food by recommending meals, snack etc. using ingredients you already have in your house.</p>
            
            <button onClick={signInWithGoogle} className="btn btn_google">Sign in with Google&nbsp;&nbsp;&rarr;</button>&nbsp;
            {/* Input ingredients */}
          </div>
        </div>
      </div>
    );
}

export default Login;
