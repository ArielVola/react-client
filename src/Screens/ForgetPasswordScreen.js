import React from 'react'
import { AnimatedPage } from '../Components/AnimatedPage'
import { ForgetFormComponent } from '../Components/Auth/ForgetFormComponent'
import { SideContentComponent } from '../Components/Auth/SideContentComponent'

export const ForgetPasswordScreen = () => {
  return (
    <AnimatedPage>
      <div className='auth__forget-password-container'>
        <SideContentComponent
          picture='https://upload.wikimedia.org/wikipedia/commons/9/9d/The_Scream_by_Edvard_Munch%2C_1893_-_Nasjonalgalleriet.png'
        />
        <ForgetFormComponent/>
      </div>
    </AnimatedPage>
  )
}
