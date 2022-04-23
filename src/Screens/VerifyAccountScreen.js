import React from 'react'
import { AnimatedPage } from '../Components/AnimatedPage'
import { SideContentComponent } from '../Components/Auth/SideContentComponent'
import { VerifyFormComponent } from '../Components/Auth/VerifyFormComponent'

export const VerifyAccountScreen = () => {
  return (
    <AnimatedPage>
        <div className='auth__verify-container'>
            <SideContentComponent
                picture='https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbmlnaHRoYXdrc19ieV9lZHdhcmRfaG9wcGVyXzE5NDIuanBnIiwicmVzaXplLDIwMDAsMjAwMCJdfQ.Phiqu5UOU7-vSUrYfkCOq7sNp-6IJhi2vxx4mCgJz1Q.jpg'
            />
            <VerifyFormComponent />
        </div>
    </AnimatedPage>
  )
}
