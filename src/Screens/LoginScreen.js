import React from 'react'
import { LoginFormComponent } from '../Components/Auth/LoginFormComponent'
import { SideContentComponent } from '../Components/Auth/SideContentComponent'


export const LoginScreen = () => {

    return (
        <div className='auth__login-container'>
                    <SideContentComponent 
                        picture='https://fondosmil.com/fondo/11239.jpg'    
                    />
                    <LoginFormComponent />
        </div>
    )
}
