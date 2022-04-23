import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_SERVER } from '../../env/dev';
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

    const dig1Ref = useRef(null);
    const dig2Ref = useRef(null);
    const dig3Ref = useRef(null);
    const dig4Ref = useRef(null);
    const dig5Ref = useRef(null);
    const dig6Ref = useRef(null);

    const [dig1, setDig1] = useState(null);
    const [dig2, setDig2] = useState(null);
    const [dig3, setDig3] = useState(null);
    const [dig4, setDig4] = useState(null);
    const [dig5, setDig5] = useState(null);
    const [dig6, setDig6] = useState(null);

    const handleVerify = async (e) => {
        setLoading(true);
        e.preventDefault();

        const verifyCodeInput = Number.parseInt(dig1 + dig2 + dig3 + dig4 + dig5 + dig6);
    
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
        <div className='auth__verify-form-container'>
        {
        loading && <LoadingComponent />
        }
            <form className='auth__verify-register-form' onSubmit={handleVerify}>
                <h2 className='auth__verify-title'>VERIFY WITH US</h2>

                <p className='auth__verify-subtitle mt-5'>Please enter the verification code we sent you by email</p>

                <div className='auth__verify-inputs-container mt-10'>

                    <input className='auth__verify-input' ref={dig1Ref} type='text' name='digit1' onChange= { (pin1) => {setDig1(pin1.target.value); if(pin1 !== null){ dig2Ref.current.focus() }}} maxLength="1" autoComplete='off' autoFocus />
                    <input className='auth__verify-input' ref={dig2Ref} type='text' name='digit2' onChange= { (pin2) => {setDig2(pin2.target.value); if(pin2 !== null){ dig3Ref.current.focus() }}} maxLength="1" autoComplete='off' />
                    <input className='auth__verify-input' ref={dig3Ref} type='text' name='digit3' onChange= { (pin3) => {setDig3(pin3.target.value); if(pin3 !== null){ dig4Ref.current.focus() }}} maxLength="1" autoComplete='off' />
                    <input className='auth__verify-input' ref={dig4Ref} type='text' name='digit4' onChange= { (pin4) => {setDig4(pin4.target.value); if(pin4 !== null){ dig5Ref.current.focus() }}} maxLength="1" autoComplete='off' />
                    <input className='auth__verify-input' ref={dig5Ref} type='text' name='digit5' onChange= { (pin5) => {setDig5(pin5.target.value); if(pin5 !== null){ dig6Ref.current.focus() }}} maxLength="1" autoComplete='off' />
                    <input className='auth__verify-input' ref={dig6Ref} type='text' name='digit6' onChange= { (pin6) => {setDig6(pin6.target.value)}} maxLength="1" autoComplete='off' />

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
