import React from 'react';
import KitchenIcon from '@material-ui/icons/Kitchen';
import FacebookIcon from '@material-ui/icons/Facebook';
// import TextField from '@material-ui/core/TextField';

import { auth, provider } from '../firebase';

import './Login.css';
import '../App.css';

function Login() {
    const user_login = () => {
      auth.signInWithPopup(provider)
          .then(result => console.log(result))
          .catch(error => alert(error.message));
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
              <btn onClick={user_login} className="btn btn_facebook"><FacebookIcon />Login with Google</btn>&nbsp;
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
