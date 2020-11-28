import React from 'react';
import KitchenIcon from '@material-ui/icons/Kitchen';

import './Login.css';

function Login() {
    return (
        <div className="loginPanel">
            <div className="login_header">
                <KitchenIcon />
                <h4>PANTRY</h4>
                

            </div>
            <div className="login_footer"></div>
        </div>
    );
}

export default Login;
