import React from 'react'
import GoogleLogin from 'react-google-login'
import { googleClientId } from '../../env/dev';

export const GoogleButtonComponent = () => {

    const clientId = googleClientId;

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <GoogleLogin
        clientId={clientId}
        render={renderProps => (
          <div 
            className="media-btn"
            onClick={renderProps.onClick} disabled={renderProps.disabled}
          >
          <div className="media-icon-wrapper">
              <img className="media-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
          </div>
            <p className="media-btn-text">
                <span>Continue with Google</span>
            </p>
          </div>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        
      />
    )

}
