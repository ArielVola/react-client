import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_SERVER } from '../../env/dev';
import { useForm } from '../../Hooks/useForm';
import { LoadingComponent } from '../LoadingComponent';

export const VerifyFormComponent = () => {

    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect((userId) => {
        axios.get(`${API_SERVER}/auth/isVerified`, userId)
        .then( res =>{
            if(res.data === true) {
                navigate('/auth/login');
            }
        });
    }, [navigate])

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    const [ formValues, handleInputChange ] = useForm({
        digit1: '',
        digit2: '',
        digit3: '',
        digit4: '',
        digit5: '',
        digit6: ''
    });

    const { digit1, digit2, digit3, digit4, digit5, digit6 } = formValues;

    const handleVerify = async (e) => {
        setLoading(true);
        e.preventDefault();

        const verifyCodeInput = Number.parseInt(digit1 + digit2 + digit3 + digit4 + digit5 + digit6);
        
        const res = await axios.post(`${API_SERVER}/auth/verify`,{userId, verifyCodeInput})
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
                autoClose: 5000,
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

    const goNextDigit = (input) => {
        handleInputChange(input);
    }

    return (
        <div className='auth__verify-form-container'>
        {
        loading && <LoadingComponent />
        }
            <form className='auth__verify-register-form' onSubmit={handleVerify}>
                <h2 className='auth__verify-title'>VERIFY WITH US</h2>

                <p className='auth__verify-subtitle mt-5'>Please enter the verification code we sent you by email</p>

                <div className='auth__verify-inputs-container mt-10'>
                    <input className='auth__verify-input' type='text' name='digit1' onChange= { goNextDigit } maxLength="1" autoComplete='off' autoFocus />
                    <input className='auth__verify-input' type='text' name='digit2' onChange= { goNextDigit } maxLength="1" autoComplete='off' />
                    <input className='auth__verify-input' type='text' name='digit3' onChange= { goNextDigit } maxLength="1" autoComplete='off' />
                    <input className='auth__verify-input' type='text' name='digit4' onChange= { goNextDigit } maxLength="1" autoComplete='off' />
                    <input className='auth__verify-input' type='text' name='digit5' onChange= { goNextDigit } maxLength="1" autoComplete='off' />
                    <input className='auth__verify-input' type='text' name='digit6' onChange= { goNextDigit } maxLength="1" autoComplete='off' />

                    <div className='auth__verify-error-container mt-5'>
                        <p className='auth__verify-error-label'>{ error }</p>
                    </div>
                </div>

                <div className='auth__verify-button-container mt-5'>
                    <button className='auth__verify-button pointer mt-5' type='submit'>Check code</button>
                </div>
            </form>
        </div>
    )
}
