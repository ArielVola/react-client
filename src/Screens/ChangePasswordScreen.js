import React from 'react'
import { AnimatedPage } from '../Components/AnimatedPage'
import { ChangePasswordFormComponent } from '../Components/Auth/ChangePasswordFormComponent'
import { SideContentComponent } from '../Components/Auth/SideContentComponent'

export const ChangePasswordScreen = () => {
  return (
    <AnimatedPage>
        <div className='auth__change-password-container'>
            <SideContentComponent
                picture='https://cdn.wallpapersafari.com/84/2/ifQ43W.jpg'
            />
            <ChangePasswordFormComponent/>
        </div>
    </AnimatedPage>
  )
}
