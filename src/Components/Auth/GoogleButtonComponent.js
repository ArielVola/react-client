import axios from 'axios';
import React from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_DATA, API_SERVER, googleClientId } from '../../env/dev';

export const GoogleButtonComponent = () => {

    const navigate = useNavigate();

    const clientId = googleClientId;

    const signWithGoogle = async (response) => {
        const { accessToken, googleId, profileObj } = response;

        const body = {
          name: profileObj.name,
          email: profileObj.email,
          imgUrl: profileObj.imageUrl,
          isGoogleAccount: true,
          googleId: googleId
        }

        const res = await axios.post(`${API_SERVER}/auth/register`, body);

        if(!res.status === 200 ||!res.status === 201) return;

        localStorage.setItem(ACCOUNT_DATA, JSON.stringify({
          accessToken,
          googleId,
          profileObj
        }));
  
        navigate('/home', { replace: true });
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
              onSuccess={signWithGoogle}
              onFailure={signWithGoogle}
          />
    )

}
