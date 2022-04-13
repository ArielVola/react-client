import React from 'react'
import GoogleLogin from 'react-google-login'

export const GoogleButtonComponent = () => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <GoogleLogin
        clientId="465022960409-6g48d99585nuim9oml4sdha8v5cjkqpe.apps.googleusercontent.com"
        render={renderProps => (
            <div 
            className="google-btn"
            onClick={renderProps.onClick} disabled={renderProps.disabled}
          >
          <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
          </div>
            <p className="btn-text">
                <span>Sign in with google</span>
            </p>
          </div>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        
      />
    )

}
