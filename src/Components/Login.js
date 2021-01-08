import React, { useContext, createContext, useState } from 'react';
import KitchenIcon from '@material-ui/icons/Kitchen';
import FacebookIcon from '@material-ui/icons/Facebook';
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

        <div className="loginPanel">
          <div class="panel_left">
            <div className="login_logo">
              <KitchenIcon />
              <h2>PANTRY</h2>
            </div>
            <div className="login_header">
              <h1>Welcome, Please login or signup for a new account!</h1>
              <button onClick={user_login} className="btn btn_facebook">Login with Google</button>&nbsp;
            </div>

            <div className="login_footer">
                <p>By signing up, you agree to Pantry's <br></br>Terms and Conditions + Privacy Policy</p>
            </div>
        </div>

        <div class="panel_right">
          <div className="login_intro">
            <h1>HOW THIS WORKS...</h1>
            <p>Here's how it works... Create your ingredient / grocery list and we will give you a curated list of meals and snacks you can already make.</p>
          </div>


        </div>


      </div>

    );
}

export default Login;
