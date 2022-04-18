import React from 'react'
import { AnimatedPage } from '../Components/AnimatedPage'
import { LoginFormComponent } from '../Components/Auth/LoginFormComponent'
import { SideContentComponent } from '../Components/Auth/SideContentComponent'


export const LoginScreen = () => {

    return (
        <AnimatedPage>
            <div className='auth__login-container'>
                        <SideContentComponent 
                            picture='https://fondosmil.com/fondo/11239.jpg'    
                        />
                        <LoginFormComponent />
            </div>
        </AnimatedPage>
    )
}
