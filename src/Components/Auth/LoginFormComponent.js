import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';
import { LoadingComponent } from '../LoadingComponent';
import { FacebookButtonComponent } from './FacebookButtonComponent'
import { GoogleButtonComponent } from './GoogleButtonComponent'

export const LoginFormComponent = () => {

    const [loading, setLoading] = useState(false);

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        setLoading(true);
        e.preventDefault();
        setLoading(false);
    }

    return (
        <div className='auth__login-form-container'>
            {
                loading && <LoadingComponent/>
            }
                <form className='auth__login-form' onSubmit={ handleLogin }>
                    <h2 className='auth__login-title'>LOGIN TO REACT APPLICATION</h2>
                    <div className='auth__login-social-media-buttons'>
                        <FacebookButtonComponent />
                        <GoogleButtonComponent />
                    </div>
                    
                    <div className='auth__login-or'>
                        <span className='auth__login-or-label'>OR</span>
                    </div>
                    
                    <div className='auth__login-inputs'>
                        <input className='auth__login-input' type="email" name='email' value={email} placeholder='Email' onChange= { handleInputChange } autoComplete='off' />
                        <input className='auth__login-input' type="password" name='password' value={password} placeholder='Password' onChange= { handleInputChange } />
                    </div>

                    <div className='auth__login-forgot'>
                        <span className='auth__login-forgot-label pointer'>Forgot Password?</span>
                    </div>

                    <div className='auth__login-form-footer'>
                        <button className='auth__login-form-login-btn pointer' type='submit'>LOGIN</button>
                        <p className='auth__login-form-new-user'>If you are a new user, <Link to="/auth/register" className='auth__login-form-new-user-action pointer'>Signup here</Link></p>
                    </div>

                </form>
        </div>
    )
}
