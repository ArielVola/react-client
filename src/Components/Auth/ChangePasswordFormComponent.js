import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { API_SERVER } from '../../env/dev';
import { useForm } from '../../Hooks/useForm';
import { LoadingComponent } from '../LoadingComponent';

export const ChangePasswordFormComponent = () => {

    const { restoreCode } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [ formValues, handleInputChange ] = useForm({
        password: '',
        password2: ''
    });

    const {password, password2} = formValues;

    const handleChange = async (e) => {
        setLoading(true);
        e.preventDefault();

        if(password !== password2) {
            setError('Passwords not match, try again');
            setLoading(false);
            return;
        }

        const res = await axios.post(`${API_SERVER}/auth/change-password`, { resetCode: restoreCode, newPassword: password})
        .catch((error) => {
            if (error.response) {
                const errorMsg = error.response.data.message;
                setError(errorMsg);
            };
        });

        if(res) {
            setError('');
            toast.success(res.data.msg, {
                position: "bottom-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              navigate('auth/login');
        }

        setLoading(false);
    }

    return (
        <div className='auth__change-password-form-container'>
            {
            loading && <LoadingComponent />
            }
            <form className='auth__change-password-form' onSubmit={ handleChange }>
                <h2 className='auth__change-title'>CHANGE YOUR PASSWORD</h2>
                <p className='auth__change-password-subtitle mt-5'>Please enter your new password</p>
            
                <div className='auth__change-passwords-inputs mt-5'>
                    <input className='auth__change-password-input' type="password" name='password'  onChange= { handleInputChange } placeholder='New password' minLength='8' autoComplete='off' />
                    <input className='auth__change-password-input' type="password" name='password2' onChange= { handleInputChange } placeholder='Repeat password' minLength='8' autoComplete='off' />
                </div>

                <p className='auth__change-password-error mt-3'>{error}</p>

                <div className='auth__register-form-footer'>
                        <button className='auth__register-form-register-btn pointer' type='submit'>CHANGE</button>
                        <p className='auth__register-form-new-user'>If you don't need to change your password, <Link to="/auth/login" className='auth__register-form-new-user-action pointer'>Signin here</Link></p>
                </div>
            </form>
        </div>
    )
}
