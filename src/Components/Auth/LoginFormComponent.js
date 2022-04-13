import React from 'react'
import { GoogleButtonComponent } from './GoogleButtonComponent'

export const LoginFormComponent = () => {
  return (
    <div className='auth__login-form-container'>
            <form className='auth__login-form'>
                <h2 className='auth__login-title'>LOGIN TO REACT APPLICATION</h2>
                <div className='auth__login-social-media-buttons'>
                    <GoogleButtonComponent />
                    <GoogleButtonComponent />
                </div>
                
                <div className='auth__login-or'>
                    <span className='auth__login-or-label'>OR</span>
                </div>
                
                <div className='auth__login-inputs'>
                    <input className='auth__login-input' type="email" placeholder='Email' />
                    <input className='auth__login-input' type="password" placeholder='Password' />
                </div>

                <div className='auth__login-forgot'>
                    <span className='auth__login-forgot-label pointer'>Forgot Password?</span>
                </div>

                <div className='auth__login-form-footer'>
                    <button className='auth__login-form-login-btn pointer' type='submit'>LOGIN</button>
                    <p className='auth__login-form-new-user'>If you are a new user, <span className='auth__login-form-new-user-action pointer'>Signup here</span></p>
                </div>

            </form>
    </div>
  )
}
