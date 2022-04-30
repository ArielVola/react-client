import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { API_SERVER } from '../../env/dev';
import { useForm } from '../../Hooks/useForm';
import { LoadingComponent } from '../LoadingComponent';

export const ForgetFormComponent = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const [ formValues, handleInputChange ] = useForm({
        email: '',
    });

    const { email } = formValues

    const handleReset = async (e) => {
        setLoading(true);
        e.preventDefault();
        
        const res = await axios.post(`${API_SERVER}/auth/reset`, { email })
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
        }

        setLoading(false);
    }


    return (
        <div className='auth__forget-form-container'>
            {
                loading && <LoadingComponent/>
            }
            <form className='auth__forget-form' onSubmit={ handleReset }>
                <h2 className='auth__forget-title'>RESET MY PASSWORD</h2>
                <p className='auth__forget-subtitle mt-5'>Don't worry, it can happen to all of us</p>
            
                <div className='auth__forget-input-container mt-5'>
                    <input type='email' name='email' value={email} placeholder='The email of the account you want to recover' onChange= { handleInputChange } className='auth__forget-input' autoComplete='off' autoFocus />
            
                    <div className='auth__error-container mt-3'>
                        <p className='auth__reset-error'>{ error }</p>
                    </div>

                    <div className='auth__forget-form-footer'>
                            <button className='auth__forget-form-forget-btn pointer' type='submit'>SEND EMAIL</button>
                            <p className='auth__forgot-form-remember-user'>I remember my password, <Link to="/auth/login" className='auth__forget-form-remember-user-action pointer'>Signin here</Link></p>
                    </div>

                </div>
            </form>
        </div>
    )
}
