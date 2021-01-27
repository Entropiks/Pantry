import React, { useContext, createContext, useState } from 'react';
import KitchenIcon from '@material-ui/icons/Kitchen';
import Dash from './Dash';

import { auth, provider } from '../firebase';

import './Login.css';
import '../App.css';

function Login() {

    const user_login = () => {
      auth.signInWithPopup(provider)
          .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(result);
          })
          // .then(result => console.log(result))
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
          // When user is logged in, redirect to the Dash
          auth.onAuthStateChanged(user => {
            if(user) {
              window.location = 'Dash';
            }
          });
      };

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
            <button onClick={user_login} className="btn btn_google">Sign in with Google&nbsp;&nbsp;&rarr;</button>&nbsp;
            {/* Input ingredients */}
          </div>
        </div>
      </div>
    );
}

export default Login;
