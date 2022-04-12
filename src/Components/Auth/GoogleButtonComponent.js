import React from 'react'
import GoogleLogin from 'react-google-login'

export const GoogleButtonComponent = () => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <GoogleLogin
            clientId="465022960409-6g48d99585nuim9oml4sdha8v5cjkqpe.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}
