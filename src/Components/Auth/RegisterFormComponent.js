import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { API_SERVER } from '../../env/dev';
import { useForm } from '../../Hooks/useForm';
import { LoadingComponent } from '../LoadingComponent';

export const RegisterFormComponent = () => {

  const [ formValues, handleInputChange ] = useForm({
    email: '',
    password: '',
    password2: ''
  });

  const [loading, setLoading] = useState(false);

  const [formError, setFormError] = useState(' ');

  const handleRegister = (e) => {
    setLoading(true);
    
    e.preventDefault();
    validateForm();
  }

  const registerUser = async () => {
    const res = await axios.post(`${API_SERVER}/auth/register`, formValues);
    if(res.data.statusCode === 200) {
      setFormError(res.data.message.toLowerCase());
    }
    setLoading(false);
  }

  const validateForm = async () => {
    const { password, password2, email } = formValues;
    
    if( email.length <= 0) {
      setFormError('Email cannot be empty');
      return;
    }

    if( password.length <= 0 || password.length <= 0) {
      setFormError('Passwords cannot be empty');
      return;
    }

    if( password !== password2 ) {
      setFormError('Passwords do not match');
      return;
    } 

    if( password.length < 8 ) {
      setFormError('the password must have at least 8 characters');
      return;
    }

    if( password.length > 20 ) {
      setFormError('the password must have a maximum of 20 characters');
      return;
    }

    setFormError('');
    registerUser();
  }

  return (
    <div className='auth__register-form-container'>
        {
          loading && <LoadingComponent />
        }
        <form className='auth__register-form' onSubmit={handleRegister}>
            <h2 className='auth__register-title'>REGISTER TO REACT APPLICATION</h2>
        
            <div className='auth__register-inputs'>
                    <input className='auth__register-input' onChange= { handleInputChange } type="email" name='email' placeholder='Email' autoComplete='off' />
                    <input className='auth__register-input' onChange= { handleInputChange } type="password" name='password' placeholder='Password' />
                    <input className='auth__register-input' onChange= { handleInputChange } type="password" name='password2' placeholder='Repeat password' />
            
                    <p className='auth__register-error mt-3'>{ formError }</p>
            </div>

            <div className='auth__register-form-footer'>
                    <button className='auth__register-form-register-btn pointer' type='submit' disabled={loading}>SIGNUP</button>
                    <p className='auth__register-form-new-user'>If you aren´t a new user, <Link to="/auth/login" className='auth__register-form-new-user-action pointer'>Signin here</Link></p>
            </div>
        </form>
    </div>
  )
}
