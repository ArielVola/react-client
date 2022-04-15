import React from 'react'
import { RegisterFormComponent } from '../Components/Auth/RegisterFormComponent'
import { SideContentComponent } from '../Components/Auth/SideContentComponent'

export const RegisterScreen = () => {
  return (
    <div className='auth__register-container'>
        <SideContentComponent
            picture='https://www.descubrirelarte.es/wp-content/uploads/2015/09/NACIMIENTO-DE-VENUS.jpg'
        />
        <RegisterFormComponent />
    </div>
  )
}
