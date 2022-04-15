import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterFormComponent = () => {
  return (
    <div className='auth__register-form-container'>
        <form className='auth__register-form'>
            <h2 className='auth__register-title'>REGISTER TO REACT APPLICATION</h2>
        
            <div className='auth__register-inputs'>
                    <input className='auth__register-input' type="email" name='email' placeholder='Email' autoComplete='off' />
                    <input className='auth__register-input' type="password" name='password' placeholder='Password' />
                    <input className='auth__register-input' type="password" name='password' placeholder='Repeat password' />
            </div>

            <div className='auth__register-form-footer'>
                    <button className='auth__register-form-register-btn pointer' type='submit'>SIGNUP</button>
                    <p className='auth__register-form-new-user'>If you aren´t a new user, <Link to="/login" className='auth__register-form-new-user-action pointer'>Signin here</Link></p>
                </div>

        </form>
    </div>
  )
}
