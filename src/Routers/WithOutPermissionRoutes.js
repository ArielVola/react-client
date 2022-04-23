import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../Screens/LoginScreen'
import { RegisterScreen } from '../Screens/RegisterScreen'
import { VerifyAccountScreen } from '../Screens/VerifyAccountScreen'

export const WithOutPermissionRoutes = () => {
  return (
    <>
        <div>
            <Routes>
                <Route
                    path='/login'
                    element={<LoginScreen />}
                />

                <Route
                    path='/register'
                    element={<RegisterScreen />}
                />

                <Route
                    path='/verify-with-us/:userId'
                    element={<VerifyAccountScreen/>}    
                />

                <Route
                    path='/*'
                    element={<LoginScreen />}
                />
            </Routes>
        </div>
    </>
  )
}
